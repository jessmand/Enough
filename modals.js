var modalJavascript = function() {
    $('#update-progress-btn').on('click', function() {
        $('#update-progress-modal').modal('toggle');
        $("#calendar").datepicker('option', 'defaultDate', maximumDate)
        if (dateList[dateList.length-1].date.getDate() == today.getDate() && dateList[dateList.length-1].date.getMonth() == today.getMonth() && dateList[dateList.length-1].date.getYear() == today.getYear()) {
            alertAtTop("You're all up to date! You can change your progress if you want.");
        } else if (maximumDate.getDate() == today.getDate() && maximumDate.getMonth() == today.getMonth() && maximumDate.getYear() == today.getYear()) {
            alertAtTop("Great job keeping up with updating your progress! Enter how many cigarettes you smoked today.");
        } else if (maximumDate.getDate() == yesterday.getDate() && maximumDate.getMonth() == yesterday.getMonth() && maximumDate.getYear() == yesterday.getYear()) {
            alertAtTop("It looks like you forgot to update your progress yesterday! Please enter how many cigarettes you smoked yesterday before you enter today's number.");
        } else {
            alertAtTop("It looks like you haven't updated your progress in a while. Please update yuor progress for the last couple of days before you enter your progress for today!");
        }
        
        updateProgressForDate(maximumDate);
        
    });
    
    var numberFadingOut = 0;

    var alertSaved = function () {
        $('.alert-saved').fadeIn("slow");
        numberFadingOut += 1;
        setTimeout(function () {
            if (numberFadingOut == 1) {
                $('.alert-saved').fadeOut("slow");
            }
            numberFadingOut -= 1;
        }, 2000);
    }

    

    var data = JSON.parse(localStorage["data"]);

    function getDate(d) {
        var dt = new Date(d.date);
        dt.setHours(24);
        dt.setMinutes(0);
        dt.setSeconds(0);
        dt.setMilliseconds(0);
        return dt;
    }

    var dateList = [];

    for (var i = 0; i < data.length; i++) {
        dateList.push({
            "date": getDate(data[i]),
            "cigarettes": data[i].cigarettes
        });
    }

    var today = new Date();
    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0);
    today.setMilliseconds(0);

    var signupDate = new Date(dateList[0].date.getTime());
    var maximumDate;
    var updateMaximumDate = function () {
        maximumDate = new Date(dateList[dateList.length - 1].date.getTime());
        maximumDate.setDate(maximumDate.getDate() + 1);
        maximumDate = new Date(Math.min.apply(null, [maximumDate, today]));
        $('#update-progress-btn span').remove();
        if (!(dateList[dateList.length - 1].date.getDate() == today.getDate() && dateList[dateList.length - 1].date.getMonth() == today.getMonth() && dateList[dateList.length - 1].date.getYear() == today.getYear())) {
            
            var needsUpdateAlert = $("<span class='glyphicon glyphicon-plus-sign'></span>").css('color', "#FFB300").css("margin-left", "5px");
            $('#update-progress-btn').append(needsUpdateAlert);
        }
    }
    updateMaximumDate();

    $("#calendar").datepicker({
        minDate: signupDate,
        maxDate: maximumDate,
        defaultDate: maximumDate,
        beforeShowDay: function (d) {
            var present = false;
            if (d < signupDate || d > today) {
                return [true, ""];
            }
            for (var j = 0; j < dateList.length; j++) {
                if (dateList[j].date.getDate() == d.getDate() && dateList[j].date.getMonth() == d.getMonth() && dateList[j].date.getYear() == d.getYear()) {
                    present = true;
                }
            }
            if (present == false) {
                return [true, "day-needs-update", "Update"];
            } else {
                return [true, ""];
            }
        },
        onSelect: function () {
            updateProgressForDate($("#calendar").datepicker("getDate"));
        }
    });


    var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    var yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);
    
    var alertAtTop = function(message) {
        $("#beginningTip").append($("<div class='alert alert-begin'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>"+message+"</div>"));
    }

    var updateProgressForDate = function (dateToUpdate) {
        var endingStr = "th";
        if (dateToUpdate.getDate() == 1 || dateToUpdate.getDate() == 21 | dateToUpdate.getDate() == 31) {
            endingStr = "st";
        } else if (dateToUpdate.getDate() == 2 || dateToUpdate.getDate() == 22) {
            endStr = "nd";
        } else if (dateToUpdate.getDate() == 3 || dateToUpdate.getDate() == 23) {
            endStr = "rd";
        }
        $('.date-selected').html(dayNames[dateToUpdate.getDay()] + ", " + monthNames[dateToUpdate.getMonth()] + " " + dateToUpdate.getDate() + endingStr);
        if (dateToUpdate.getDate() == today.getDate() && dateToUpdate.getMonth() == today.getMonth() && dateToUpdate.getYear() == today.getYear()) {
            $('.date-selected').append(" (today)");
        } else if (dateToUpdate.getDate() == yesterday.getDate() && dateToUpdate.getMonth() == yesterday.getMonth() && dateToUpdate.getYear() == yesterday.getYear()) {
            $('.date-selected').append(" (yesterday)");
        }
        var enteredCigarettes;
        var dateIndex;
        for (var j = 0; j < dateList.length; j++) {
            if (dateList[j].date.getDate() == dateToUpdate.getDate() && dateList[j].date.getMonth() == dateToUpdate.getMonth() && dateList[j].date.getYear() == dateToUpdate.getYear()) {
                dateIndex = j;
                enteredCigarettes = dateList[j].cigarettes;
            }
        }

        $("#update-cigarettes-btn").unbind("click");
        if (enteredCigarettes !== undefined) {
            $("#num-cigarettes").val(enteredCigarettes);
            $("#update-cigarettes-btn").on('click', function () {
                alertSaved();
                data[dateIndex].cigarettes = parseInt($("#num-cigarettes").val());
                localStorage["data"] = JSON.stringify(data);
                dateList[dateIndex].cigarettes = parseInt($("#num-cigarettes").val());
            });
        } else {
            $("#num-cigarettes").val("");
            $("#update-cigarettes-btn").on('click', function () {
                alertSaved();
                var dd = dateToUpdate.getDate();
                var mm = dateToUpdate.getMonth() + 1; //January is 0!
                var yyyy = dateToUpdate.getFullYear();

                if (dd < 10) {
                    dd = '0' + dd
                }

                if (mm < 10) {
                    mm = '0' + mm
                }
                data.push({
                    "date": yyyy + "-" + mm + "-" + dd,
                    "cigarettes": parseInt($("#num-cigarettes").val())
                });
                localStorage["data"] = JSON.stringify(data);
                dateList.push({
                    "date": getDate(data[data.length - 1]),
                    "cigarettes": data[data.length - 1].cigarettes
                });
                updateMaximumDate();
                $("#calendar").datepicker('option', 'maxDate', maximumDate).datepicker('option', 'defaultDate', maximumDate).datepicker('refresh');


                $("#update-cigarettes-btn").unbind("click");
                $("#update-cigarettes-btn").on('click', function () {
                    alertSaved();
                    data[data.length - 1].cigarettes = parseInt($("#num-cigarettes").val());
                    localStorage["data"] = JSON.stringify(data);
                });
            });
        }


    }
    
    $('#update-progress-modal').on('hide.bs.modal', function () {
        var pathname = window.location.pathname;
        var pagename = pathname.split("/")
        pagename = pagename[pagename.length-1].split(".")[0];
        if (pagename == "myprogress") {
            location.reload();
        }
    })
    
    
    var generateData = function(numCigarettes) {
        var randomNumDays = Math.floor(Math.random() * 50 +20);
        var today = new Date();
        
        var data = [];
        for (var i=randomNumDays; i>1; i--) {
            var prevDay = new Date();
            prevDay.setDate(today.getDate()-i);
            var dd = prevDay.getDate();
            var mm = prevDay.getMonth()+1; //January is 0!
            var yyyy = prevDay.getFullYear();
            
            if(dd<10) {
                dd='0'+dd
            } 
            
            if(mm<10) {
                mm='0'+mm
            }
            
            var randomVariance = Math.floor(Math.random() * 3 - 1);
            var prevDayCigarettes = Math.round(numCigarettes/2*(i/(randomNumDays-1)) + numCigarettes/2) + randomVariance;
            
            data.push({'date':yyyy+"-"+mm+"-"+dd, 'cigarettes':prevDayCigarettes});
        }
        return data
    }
    
    
    var bio;
    var viewGoal;
    var viewData;
    var randomStartCigarettes;
    var name;
    
    var people = JSON.parse(localStorage["people"]);
    
    var followClickEvent = function(button) {
        var person_name = name;
        for (var k=0; k<people.length; k++) {
            if (people[k].name == person_name) {
                people[k].following = "true";
            }
        }
        localStorage["people"] = JSON.stringify(people);
        button.addClass("following");
        button.text("Following");
        constructFollowingList();
        button.unbind("click");
        button.on("click", function() {
            unfollowClickEvent($(this));
        });
    };
    
    var unfollowClickEvent = function(button) {
        var person_name = name;
        for (var k=0; k<people.length; k++) {
            if (people[k].name == person_name) {
                people[k].following = "false";
            }
        }
        localStorage["people"] = JSON.stringify(people);
        button.removeClass("following");
        button.text("Follow");
        constructFollowingList();
        button.unbind("click");
        button.on("click", function() {
            followClickEvent($(this));
        });
    }
    
    var constructFollowingList = function() {
        $(".following-nav").empty();
        for (var i=0; i<people.length; i++) {
            if (people[i].following == "true") {
                var link = $("<a>"+people[i].name+"</a>");
                link.on('click', function() {
                    //$('#view-following-modal modal-dialog').width
                    $('#view-following-modal').modal('toggle');
                    $('#view-following-modal .modal-title').html($(this).text());
            
                });
                var listElement = $("<li></li>").append(link);
                $(".following-nav").append(listElement);
            }
        }
    }
    
    $('.following-nav a, .btn-view').on('click', function() {
        name = $(this).text();
        if (name == "View Profile") {
            name = $(this).parent().parent().find("h3").text();
        }
        //$('#view-following-modal modal-dialog').width
        
        for (var i=0; i<people.length; i++) {
            if (people[i].name == name) {
                bio = people[i].bio;
                following = people[i].following;
            }
        }
        randomStartCigarettes = Math.floor(Math.random() * 10 +10);
        viewData = generateData(randomStartCigarettes);
        viewGoal = Math.round(randomStartCigarettes/2)
        $('#view-following-modal').modal('toggle');
        
        $('#view-following-modal .modal-title').html(name).append($('<button href="#" class="btn btn-view-follow"></button>'));;
        
        if (following == "true") {
                $(".btn-view-follow").addClass("following").text("Following").on("click", function() {
                    unfollowClickEvent($(this))
                });
            } else {
                $(".btn-view-follow").text("Follow").on("click", function() {
                    followClickEvent($(this))
                });
            }
        
        
        
    });
    
    
    var cigaretteCost = .5;
    
    var savedMoney = function(savedCigarettes) {
        var totalCost = savedCigarettes*cigaretteCost;
         return ("$" + totalCost.toFixed(2));
    }
    

    
    $('#view-following-modal').on('shown.bs.modal', function (e) {
            $("#view-graph-container").empty();
            var totalSaved = drawChart(viewData, "view-graph-container", viewGoal, randomStartCigarettes);
            
            
            $('.view-saved-cigarettes').html(totalSaved);
            $(".view-saved-money").html(savedMoney(totalSaved));
            $('#view-following-modal #view-bio').html(bio);
        
    });
    
    

}

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
    
    
    
    
    
    var name = "Joe K.";
    
    $('.following-nav a, .btn-view').on('click', function() {
        //$('#view-following-modal modal-dialog').width
        $('#view-following-modal').modal('toggle');
        $('#view-following-modal .modal-title').html(name);

    });
    
    var viewData = [{
            'date': "2014-03-01",
            'cigarettes': 7
        }, {
            'date': "2014-03-02",
            'cigarettes': 7
        }, {
            'date': "2014-03-03",
            'cigarettes': 8
        }, {
            'date': "2014-03-04",
            'cigarettes': 7
        }, {
            'date': "2014-03-05",
            'cigarettes': 7
        }, {
            'date': "2014-03-06",
            'cigarettes': 6
        }, {
            'date': "2014-03-07",
            'cigarettes': 6
        }, {
            'date': "2014-03-08",
            'cigarettes': 5
        }, {
            'date': "2014-03-09",
            'cigarettes': 6
        }, {
            'date': "2014-03-10",
            'cigarettes': 5
        }, {
            'date': "2014-03-11",
            'cigarettes': 4
        }, {
            'date': "2014-03-12",
            'cigarettes': 4
        }, {
            'date': "2014-03-13",
            'cigarettes': 3
        }, {
            'date': "2014-03-14",
            'cigarettes': 4
        }];
    var bio = 'I am a 35 year old with a loving wife and 3 kids. I want to be around as long as possible to help my wife handle our kids, and to be there for them while they grow up. If that means quitting a bad habit then thats what I\'m going to do. The love I recieve from my family on a daily basis is worth the feeling of a lifetime of cigarettes. I enjoy biking and rafting, and can\'t wait to do those things without having to worry about my health.';
    var viewGoal = 3;
    
    var extendLifeMilestones = ["see another smile", "share another hug", "see another sunset", "have another birthday"];
    
    var whichMilestone = function(saved) {
        var milestone = null;
        if (saved < 1) {
            milestone = 0;
        } else if (saved<6) {
            milestone = 1;
        } else if (saved<21) {
            milestone = 2;
        } else if (saved<51) {
            milestone = 3;
        }
        if (milestone == null) {
            return "conquer smoking";
        } else {
            return extendLifeMilestones[milestone];
        }
    }
    
    var cigaretteCost = .5;
    
    var savedMoney = function(savedCigarettes) {
        var totalCost = savedCigarettes*cigaretteCost;
         return ("$" + totalCost.toFixed(2));
    }
    

    
    $('#view-following-modal').on('shown.bs.modal', function (e) {
            $("#view-graph-container").empty();
            var totalSaved = drawChart(viewData, "view-graph-container", 3);
            
            
            $('.view-saved-cigarettes').html(totalSaved);
            $(".view-extended-life").html(whichMilestone(totalSaved));
            $(".view-saved-money").html(savedMoney(totalSaved));
            $('#view-following-modal #view-bio-container .bio-text').html(bio);
        
    });

}

$(function() {
    
    var sidebarHeight = function() {
        $('.row-top').height($('.top-banner').height());
        var sidebarHeight = $(window).height()-$('.top-banner').height() - 10;
        $('.sidebar').height(sidebarHeight);
        var contentLeft = $('.sidebar').width()+20;
        var contentWidth = $(window).width()-contentLeft-35;
        $('#content').css('margin-left', contentLeft);
        $('#content').width(contentWidth);
    }
    
    //$('.sidebar').css("top", $('.top-banner').height());
    sidebarHeight();
    
    function alertTimeout(wait){

    }
    
    var numberFadingOut = 0;
    
    var alertSaved = function() {
        $('.alert-saved').fadeIn("slow");
        numberFadingOut +=1;
        setTimeout(function() {
            if (numberFadingOut == 1) {
                $('.alert-saved').fadeOut("slow");
            }
            numberFadingOut -= 1;
        }, 2000);
    }
    
    $(window).resize(sidebarHeight);
    var path = "file:///C:/Users/Jessica/Documents/6.813/Enough";
    $(".main-nav").append("<li><a href='./myprogress.html'>My Progress</a></li>")
        .append("<li><a href='./people.html'>People</a></li>")
        .append("<li><a href='./forums.html'>Forums</a></li>")
        .append("<li><a href='./resources.html'>Resources</a></li>");
    
    
    var calendar = "<div id='calendar' class='col-md-6'></div>";
    
    var updateDiv = "<div id='update-div' class='col-md-6 form-horizontal'>"
        +"<div class='row'><div class='date-selected col-md-12'></div></div>"
    +'<div class="row form-group"><label for="num-cigarettes" class="col-md-4 control-label">Cigarettes:</label>'
    +'<div class="col-md-4">'
      +'<input type="text" class="form-control" id="num-cigarettes" placeholder="#">'
    +'</div>'
    +'<div class="col-md-4"><button class="btn" id="update-cigarettes-btn">Update</button></div></div>'
    +'<div id="alert-placeholder" class="row"><div class="alert alert-success alert-saved">Update saved</div></div></div>';
    
    var modalContent = "<div class='row'>"+calendar+updateDiv+"</div>";
    
    var updateProgressModal = '<div id="update-progress-modal" class="modal fade" aria-hidden="true">'
  +'<div class="modal-dialog">'
    +'<div class="modal-content">'
      +'<div class="modal-header">'
        +'<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>'
        +'<h4 class="modal-title">Update Progress</h4>'
      +'</div>'
      +'<div class="modal-body update-progress-body">'
        +modalContent
      +'</div>'
    +'</div><!-- /.modal-content -->'
  +'</div><!-- /.modal-dialog -->'
+'</div><!-- /.modal -->';
    
    var data = [{
            'date': "2014-03-01",
            'cigarettes': 20
        }, {
            'date': "2014-03-02",
            'cigarettes': 20
        }, {
            'date': "2014-03-03",
            'cigarettes': 19
        }, {
            'date': "2014-03-04",
            'cigarettes': 18
        }, {
            'date': "2014-03-05",
            'cigarettes': 18
        }];
    
    function getDate(d) {
        var dt = new Date(d.date);
        dt.setHours(24);
        dt.setMinutes(0);
        dt.setSeconds(0);
        dt.setMilliseconds(0);
        return dt;
    }
    
    var dateList =[];
    
    for (var i=0; i<data.length; i++) {
        dateList.push({"date":getDate(data[i]), "cigarettes":data[i].cigarettes});
    }
    
    var today = new Date();
    today.setHours(0);
    today.setMinutes(0);
        today.setSeconds(0);
        today.setMilliseconds(0);
    
    var signupDate = new Date(2014, 2, 1);
    var maximumDate;
    var updateMaximumDate = function() {
        maximumDate = new Date(dateList[dateList.length-1].date.getTime());
        maximumDate.setDate(maximumDate.getDate()+1);
        maximumDate = new Date(Math.min.apply(null, [maximumDate, today]));
        if (!(dateList[dateList.length-1].date.getDate() == today.getDate() && dateList[dateList.length-1].date.getMonth() == today.getMonth() && dateList[dateList.length-1].date.getYear() == today.getYear())) {
            $('#update-progress-btn span').remove();
            var needsUpdateAlert = $("<span class='glyphicon glyphicon-plus-sign'></span>").css('color', "#FFB300").css("margin-left", "5px");
            $('#update-progress-btn').append(needsUpdateAlert);
        }
    }
    updateMaximumDate();

    $('body').append(updateProgressModal);
    $( "#calendar" ).datepicker({ minDate: signupDate, maxDate: maximumDate, defaultDate: maximumDate, beforeShowDay: function(d) {
        var present = false;
        if (d<new Date(2014, 2, 1) || d>today) {
            return [true, ""];
        }
        for (var j=0; j<dateList.length; j++) {
            if (dateList[j].date.getDate() == d.getDate() && dateList[j].date.getMonth() == d.getMonth() && dateList[j].date.getYear() == d.getYear()) {
                present = true;
            }
        }
        if (present == false) {
            return [true, "day-needs-update", "Update"];
        }
        else {
            return [true, ""];
        }
    } , onSelect: function() {
        updateProgressForDate($( "#calendar" ).datepicker( "getDate" ));
    }
    });
    
    
    var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    var yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);
    
    var updateProgressForDate = function(dateToUpdate) {
        var endingStr = "th";
        if (dateToUpdate.getDate()==1 || dateToUpdate.getDate()==21 | dateToUpdate.getDate()==31) {
            endingStr = "st";
        } else if (dateToUpdate.getDate()==2 || dateToUpdate.getDate()==22) {
            endStr = "nd";
        } else if (dateToUpdate.getDate()==3 || dateToUpdate.getDate()==23) {
            endStr = "rd";
        }
        $('.date-selected').html(dayNames[dateToUpdate.getDay()]+", "+monthNames[dateToUpdate.getMonth()]+" "+dateToUpdate.getDate()+endingStr);
        if (dateToUpdate.getDate() == today.getDate() && dateToUpdate.getMonth() == today.getMonth() && dateToUpdate.getYear() == today.getYear()) {
            $('.date-selected').append(" (today)");
        } else if (dateToUpdate.getDate() == yesterday.getDate() && dateToUpdate.getMonth() == yesterday.getMonth() && dateToUpdate.getYear() == yesterday.getYear()) {
            $('.date-selected').append(" (yesterday)");
        }
        var enteredCigarettes;
        var dateIndex;
        for (var j=0; j<dateList.length; j++) {
            if (dateList[j].date.getDate() == dateToUpdate.getDate() && dateList[j].date.getMonth() == dateToUpdate.getMonth() && dateList[j].date.getYear() == dateToUpdate.getYear()) {
                dateIndex = j;
                enteredCigarettes = dateList[j].cigarettes;
            }
        }
        
        $( "#update-cigarettes-btn").unbind( "click" );
        if (enteredCigarettes !== undefined) {
            $("#num-cigarettes").val(enteredCigarettes);
            $("#update-cigarettes-btn").on('click', function() {
                alertSaved();
                data[dateIndex].cigarettes = parseInt($("#num-cigarettes").val());
                dateList[dateIndex].cigarettes = parseInt($("#num-cigarettes").val());
            });
        } else {
            $("#num-cigarettes").val("");
            $("#update-cigarettes-btn").on('click', function() {
                alertSaved();
                var dd = dateToUpdate.getDate();
                var mm = dateToUpdate.getMonth()+1; //January is 0!
                var yyyy = dateToUpdate.getFullYear();
                
                if(dd<10) {
                    dd='0'+dd
                } 
                
                if(mm<10) {
                    mm='0'+mm
                } 
                data.push({"date":yyyy+"-"+mm+"-"+dd, "cigarettes":parseInt($("#num-cigarettes").val())});
                dateList.push({"date":getDate(data[data.length-1]), "cigarettes":data[data.length-1].cigarettes});
                updateMaximumDate();
                $( "#calendar" ).datepicker('option', 'maxDate', maximumDate).datepicker('option', 'defaultDate', maximumDate).datepicker('refresh');
                
                
                $( "#update-cigarettes-btn").unbind( "click" );
                $("#update-cigarettes-btn").on('click', function() {
                    alertSaved();
                    data[data.length-1].cigarettes = parseInt($("#num-cigarettes").val());
                });
            });
        }
        
        
    }
    
    
    
    
    $('#update-progress-btn').on('click', function() {
        $('#update-progress-modal').modal('toggle');
        $("#calendar").datepicker('option', 'defaultDate', maximumDate)
        updateProgressForDate(maximumDate);
    });
    
    
    
    var viewFollowingModal = $('<div id="view-following-modal" class="modal fade" aria-hidden="true">'
  +'<div class="modal-dialog">'
    +'<div class="modal-content">'
      +'<div class="modal-header">'
        +'<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>'
        +'<h4 class="modal-title"></h4>'
      +'</div>'
      +'<div class="modal-body container-fluid view-following-body">'
    +'<div id="view-graph-container"></div>'
                    +'<div class="row view-saved-cigarettes-container">'
                       + '<div class="col-md-4 col-md-offset-4"><b>Cigarettes resisted:</b> <span class="view-saved-cigarettes"></span></div>'
                   + '</div>'
                    +'<div class="row view-cigarette-facts-container">'
                      + ' <div class="col-md-3 col-md-offset-3"><b>Life regained:</b> You will <span class="view-extended-life"></span>.</div>'
                       + '<div class="col-md-3"><b>Money saved:</b> <span class="view-saved-money"></span></div>'
                   + '</div>'
    +'<div class="row">'
                        +'<div id="view-bio-container" class="col-md-6 col-md-offset-3"><div class="view-bio-title"><span>Biography</span></div><span class="bio-text"></span"></div>'
                    +'</div>'
      +'</div>'
    +'</div><!-- /.modal-content -->'
  +'</div><!-- /.modal-dialog -->'
+'</div><!-- /.modal -->');
    $('body').append(viewFollowingModal);
    
    var name = "Joe K.";
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
    var bio = 'I am a 35 year old with a loving wife and 3 kids. I want to be around as long as possible to help my wife handle our kids, and to be there for them while they grow up. If that means quiting a bad habit then thats what I\'m going to do. The love I recieve from my family on a daily basis is worth the feeling of a lifetime of cigarettes. If you are still reading this then good for you! I just made all of this up to fill in the bio page because I couldn\'t think of anything else to write. So now I am rambling on and on and on. Whats a great pick up line you ask? Boy: "Hey girl, do you buy your pants on sale?" Girl: "Huh?" Boy:"Cause at my house they would be 100% off"';
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
    
    $('.following-nav a, .btn-view').on('click', function() {
        //$('#view-following-modal modal-dialog').width
        $('#view-following-modal').modal('toggle');
        $('#view-following-modal .modal-title').html(name);
        
        
        
        
    });
    
    $('#view-following-modal').on('shown.bs.modal', function (e) {
            $("#view-graph-container").empty();
            var totalSaved = drawChart(viewData, "view-graph-container", 3);
            
            
            $('.view-saved-cigarettes').html(totalSaved);
            $(".view-extended-life").html(whichMilestone(totalSaved));
            $(".view-saved-money").html(savedMoney(totalSaved));
            $('#view-following-modal #view-bio-container .bio-text').html(bio);
        
    });


});

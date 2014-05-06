var pageJavascript = function() {
    
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

    var data = JSON.parse(localStorage["data"]);

    
    
    
    
    
    
    
    
    
    var tomorrowGoal = 17;
    var todayGoal = 18;
    var yesterdayGoal = 18;
    var monthGoal = 15;
    var weekGoal = Math.round(parseInt(localStorage["numCigarettes"])/2)
    
    var totalSaved = drawChart(data, "graph-container", weekGoal)
    
    var currentGoal = $("<div class='goal'><span class='glyphicon glyphicon-unchecked'></span></div>");
    var completedGoal = $("<div class='goal'><span class='glyphicon glyphicon-ok'></span></div>");
    var failedGoal = $("<div class='goal'><span class='glyphicon glyphicon-remove'></span></div>");
    todayGoalDiv = currentGoal.clone().append("<span><b> Today</b>, you should only have "+todayGoal+" cigarettes.</span>");
    $("#goals-list").append(todayGoalDiv);
    tomorrowGoalDiv = currentGoal.clone().append("<span><b> Tomorrow</b>, only smoke "+tomorrowGoal+" cigarettes.</span>");
    $("#goals-list").append(tomorrowGoalDiv);
    weekGoalDiv = currentGoal.clone().append("<span> This <b>week</b>, average "+weekGoal+" cigarettes per day.</span>");
    $("#goals-list").append(weekGoalDiv);
    monthGoalDiv = currentGoal.clone().append("<span> This <b>month</b>, get down to "+monthGoal+" cigarettes per day.</span>");
    $("#goals-list").append(monthGoalDiv);
    yesterdayGoalDiv = completedGoal.clone().append("<span><b> Yesterday</b>, you only smoked "+yesterdayGoal+" cigarettes. Good job!</span>");
    $("#goals-list").append(yesterdayGoalDiv);
    
    $('.saved-cigarettes').append(totalSaved);
    $(".extended-life").append(whichMilestone(totalSaved));
    $(".saved-money").append(savedMoney(totalSaved));
};
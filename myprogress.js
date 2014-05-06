var pageJavascript = function() {
    
    
    var cigaretteCost = .5;
    
    var savedMoney = function(savedCigarettes) {
        var totalCost = savedCigarettes*cigaretteCost;
         return ("$" + totalCost.toFixed(2));
    }

    var data = JSON.parse(localStorage["data"]);

    
    
    
    
    
    
    
    
    
    
    
    var totalSaved = drawChart(data, "graph-container", parseInt(localStorage["weekGoal"]), localStorage["numCigarettes"])
    
    var currentGoal = $("<div class='goal'><span class='glyphicon glyphicon-unchecked'></span></div>");
    var completedGoal = $("<div class='goal'><span class='glyphicon glyphicon-ok'></span></div>");
    var failedGoal = $("<div class='goal'><span class='glyphicon glyphicon-remove'></span></div>");
    
    var updateGoals = function() {
        $("#goals-list").empty();
        todayGoalDiv = currentGoal.clone().append("<span><b> Today</b>, you should only have "+localStorage["todayGoal"]+" cigarettes.</span>");
        $("#goals-list").append(todayGoalDiv);
        tomorrowGoalDiv = currentGoal.clone().append("<span><b> Tomorrow</b>, only smoke "+localStorage["tomorrowGoal"]+" cigarettes.</span>");
        $("#goals-list").append(tomorrowGoalDiv);
        weekGoalDiv = currentGoal.clone().append("<span> This <b>week</b>, average "+localStorage["weekGoal"]+" cigarettes per day.</span>");
        $("#goals-list").append(weekGoalDiv);
        monthGoalDiv = currentGoal.clone().append("<span> This <b>month</b>, get down to "+localStorage["monthGoal"]+" cigarettes per day.</span>");
        $("#goals-list").append(monthGoalDiv);
        yesterdayGoalDiv = completedGoal.clone().append("<span><b> Yesterday</b>, you only smoked "+localStorage["yesterdayGoal"]+" cigarettes. Good job!</span>");
        $("#goals-list").append(yesterdayGoalDiv);
    }
    updateGoals()
    
    $('.saved-cigarettes').append(totalSaved);
    $(".saved-money").append(savedMoney(totalSaved));
    
    $('.harder-button').on("click", function() {
        localStorage["todayGoal"] = parseInt(localStorage["todayGoal"])-1;
        localStorage["tomorrowGoal"] = parseInt(localStorage["tomorrowGoal"])-1;
        localStorage["weekGoal"] = parseInt(localStorage["weekGoal"])-1;
        localStorage["monthGoal"] = parseInt(localStorage["monthGoal"])-1;
        updateGoals()
    });
    
    $('.easier-button').on("click", function() {
        localStorage["todayGoal"] = parseInt(localStorage["todayGoal"])+1;
        localStorage["tomorrowGoal"] = parseInt(localStorage["tomorrowGoal"])+1;
        localStorage["weekGoal"] = parseInt(localStorage["weekGoal"])+1;
        localStorage["monthGoal"] = parseInt(localStorage["monthGoal"])+1;
        updateGoals()
    });
};
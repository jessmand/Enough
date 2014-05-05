$(function() {
    
    var whenSignedIn = function() {
        $("#login-signup").empty().append($('<span><a href="#" id="log-out-button" class="btn">Logout</a></span>'));
        $(".description").empty().append($('<div class="statistic">Welcome back '+localStorage["name"].split(" ")[0]+'.</div>'
		+'<div class="motivation">Take the next step.'
			+'<div id="bold" class="stop-smoking-signup-link">Keep going. </div></div>'));
        $(".stop-smoking-signup-link").on("click", function() {
		  location.href="./myprogress.html";
	   });
        $("#log-out-button").on("click", function() {
            localStorage["signed-in"] = "false";
            whenNotSignedIn();
        });
    }
    
    var whenNotSignedIn = function() {
        $("#login-signup").empty().append($('<span><a href="#" id="log-in-button" class="btn">Log-in </a>| </span><span><a href="#" id="sign-up-button" class="btn">Sign-up</a></span>'));
        $(".description").empty().append($('<div class="statistic">8.6 million people in the U.S. have at least one serious illness caused by smoking.</div>'
		+'<div class="motivation">Take the first step.'
			+'<div id="bold" class="stop-smoking-signup-link">Stop smoking today. </div></div>'));
        $(".stop-smoking-signup-link").on("click", function() {
		location.href="./StepOne.html";
	   });
        $("#sign-up-button").on("click", function() {
		location.href="./StepOne.html";
        });
        $("#log-in-button").on("click", function() {
            localStorage["signed-in"] = "true";
            whenSignedIn();
        });
    }
    
    if (localStorage["signed-in"] == "true") {
        whenSignedIn();
    } else {
        whenNotSignedIn()
    }

});
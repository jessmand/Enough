$(function() {
    
    var generateInitialData = function(numCigarettes) {
        
        var today = new Date();
        
        var data = [];
        for (var i=40; i>1; i--) {
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
            var prevDayCigarettes = Math.round(numCigarettes/2*(i/39) + numCigarettes/2) + randomVariance;
            
            data.push({'date':yyyy+"-"+mm+"-"+dd, 'cigarettes':prevDayCigarettes});
        }
        return data
    }

	$("#button1to2").on("click", function() {
        localStorage["name"] = $('#firstName').val()+' '+$('#lastName').val();
		location.href="./StepTwo.html";
	});

	$("#button2to3").on("click", function() {
        localStorage["numCigarettes"] = $("#num-cigarettes-spinner").val();
        var data = generateInitialData(parseInt(localStorage["numCigarettes"]));
        localStorage["data"] = JSON.stringify(data);
		location.href="./StepThree.html";
	});

	$("#buttonFinish").on("click", function() {
        localStorage["reason"] = $("#reason").val();
        localStorage["signed-in"] = "true";
        var biography = "I am a 35 year old with a loving wife and 3 kids. I want to be around as long as possible to help my wife handle our kids, and to be there for them while they grow up. If that means quitting a bad habit then thats what I\'m going to do. The love I recieve from my family on a daily basis is worth the feeling of a lifetime of cigarettes. I enjoy biking and rafting, and can\'t wait to do those things without having to worry about my health."
        
        var people = [{name:"Michael Bay", bio:biography, following:"false"}, {name:"Carolyn Smith", bio:biography, following:"false"}, {name:"Jonny Knoxville", bio:biography, following:"false"}, {name:"Jack Black", bio:biography, following:"false"}, {name:"Tony Stark", bio:biography, following:"false"}, {name:"Chris Evans", bio:biography, following:"false"}, {name:"Natalia Romanova", bio:biography, following:"false"}, {name:"Hawk Eye", bio:biography, following:"false"}, {name:"Joe Kookie", bio:biography, following:"false"}];
        
        localStorage["people"] = JSON.stringify(people);
        
        
        
		location.href="./myprogress.html";
	});

	$("#button1to0").on("click", function() {
		location.href="./index.html";
	});

	$("#button2to1").on("click", function() {
		location.href="./StepOne.html";
	});

	$("#button3to2").on("click", function() {
		location.href="./StepTwo.html";
	});

	$(".smoking-info-box.info-box-off").on("click", function() {
		location.href="./StepTwo.html";
	});

	$(".goals-info-box.info-box-off").on("click", function() {
		location.href="./StepThree.html";
	});

	$(".personal-info-box.info-box-on").on("click", function() {
		location.href="./StepOne.html";
	});

	$(".smoking-info-box.info-box-on").on("click", function() {
		location.href="./StepTwo.html";
	});
    
    
    
    var maxGoalCharacters = 140;
    $('.goal-character-count').html(maxGoalCharacters + ' characters remaining');

    $('#goal').keyup(function() {
        var text_length = $('#goal').val().length;
        var text_remaining = maxGoalCharacters - text_length;

        $('.goal-character-count').html(text_remaining + ' characters remaining');
    });
});
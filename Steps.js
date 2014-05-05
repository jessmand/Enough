$(function() {

	$("#button1to2").on("click", function() {
        localStorage["name"] = $('#firstName').val()+' '+$('#lastName').val();
		location.href="./StepTwo.html";
	});

	$("#button2to3").on("click", function() {
        localStorage["numCigarettes"] = $("#num-cigarettes-spinner").val();
		location.href="./StepThree.html";
	});

	$("#buttonFinish").on("click", function() {
        localStorage["reason"] = $("#reason").val();
        localStorage["signed-in"] = "true";
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

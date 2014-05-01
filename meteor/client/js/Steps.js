$("#button1to2").on("click", function() {
		location.href="./StepTwo.html";
	});

	$("#button2to3").on("click", function() {
		location.href="./StepThree.html";
	});

	$("#buttonFinish").on("click", function() {
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

	$("#num-cigarettes-spinner").spinner({min:0});
	$( "#num-cigarettes-spinner" ).spinner( "value", 0 );

    
    
    
    var maxGoalCharacters = 140;
    $('.goal-character-count').html(maxGoalCharacters + ' characters remaining');

    $('#goal').keyup(function() {
        var text_length = $('#goal').val().length;
        var text_remaining = maxGoalCharacters - text_length;

        $('.goal-character-count').html(text_remaining + ' characters remaining');
    });

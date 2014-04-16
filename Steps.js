$(function() {

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
		console.log("HI");
		location.href="./StepTwo.html";
	});
});

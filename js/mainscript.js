$(document).ready(function(){
	var sessionLength = 25, 
		breakLength = 5,
		isSession = true,
		timeLeft = sessionLength * 60,
		isPauses = true;
	
	var fomartTime = function(){
		var foo = Math.floor(timeLeft / 60);
		var bar = timeLeft - foo * 60;
		return foo + ":" + (bar < 10 ? "0" : "") + bar;
	};

});

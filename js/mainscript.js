$(document).ready(function(){
	var sessionLength = 25, 
		breakLength = 5,
		isSession = true,
		timeLeft = sessionLength * 60,
		isPauses = true;

	/*function to format time*/
	var fomartTime = function(){
		var foo = Math.floor(timeLeft / 60);
		var bar = timeLeft - foo * 60;
		return foo + ":" + (bar < 10 ? "0" : "") + bar;
	};
	
	var fillAnimationSess = null,
 		fillAnimationBreak = null,
		intervalCounter = null;
	
	/*function to update Session settings*/
	var updateSettingsTimeValues = function() {
      $('.Settings>.break>.value>.v').text(breakLength); $('.Settings>.session>.value>.v').text(sessionLength);
    }

});

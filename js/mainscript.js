$(document).ready(function(){
	var sessionLength = 25, 
		breakLength = 5,
		isSession = true,
		timeLeft = sessionLength * 60,
		isPaused = true;

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
    };
	
	/*function to pause the pomodoro*/
	var pausePomodoro = function() {
      if (fillAnimationSess !== null)
        fillAnimationSess.stop();
      if (fillAnimationBreak !== null)
        fillAnimationBreak.stop();
      isPaused = true;
      clearInterval(intervalCounter);
		
		/*add stop material icon, when button is clicked*/
		$('.status > a > .material-icons').text('play_arrow');
		$('.status > .a').removeClass('red').addClass('green')
    };
 
	/*function to handle the next button*/
   var nextStep = function() {
      if (isSession) {
		  /*get the time left*/
		  timeLeft = breakLength * 60;
		  
		  /*fill the session*/
		  $('.fill.session').animate(
			  {height: '100%'}, 
			  500);
		  
		  /*fill the break*/
		  $('.fill.break').animate(
			  {height: '0%'}, 
			  500
		  );
		  
		  fillAnimationBreak = $('.fill.break').animate(
			  {height: '100%'},
			  (timeLeft * 1000)
		  );
		  isSession = false;
	  }else {
		  
		  $('.fill.session').animate(
			  {height: '0%'}, 
			  500
		  );
		  
		  $('.fill.break').animate(
			  {height: '0%'}, 
			  500
		  );
		  isSession = true;
		  
		  timeLeft = sessionLength * 60;
		  
		  fillAnimationSess = $('.fill.session').animate(
			  {height: '100%'}, 
			  (timeLeft * 1000)
		  );
      }
    };
	
	/*function to start the pomodoro*/
	var startPomodoro = function() {
      intervalCounter = setInterval(function() {
        if (timeLeft > 0) {
          timeLeft--;
          $('.pomodoro>.time-left').text(fomartTime());
        } else
          nextStep();
      }, 1000);
		isPaused = false;
      	isSession = !isSession;
      	nextStep();
		$('.status > .a').removeClass('red').addClass('green')
    };
 
 
});

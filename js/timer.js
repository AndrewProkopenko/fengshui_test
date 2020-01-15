;(function(){

       
let dis = document.querySelectorAll('.timer');
let finishTime;
let savedTime;
let timerLength = 129600*1000
let timeoutID;


if(localStorage.getItem('timerFinishTime')){
	UpdateTimer(); 
}else{
	UpdateTimerDis(timerLength);
}

if(localStorage.getItem('timerSavedTime')){
	let savedTime = localStorage.getItem('timerSavedTime') * 1;
  UpdateTimerDis(savedTime);
}

function UpdateTimer() {
    finishTime = localStorage.getItem('timerFinishTime');
    let timeLeft = (finishTime - new Date());
	
		if(timeLeft > 0){
			timeoutID = window.setTimeout(UpdateTimer, 1000);
		}else{
			timeLeft = 0;
			if (timeoutID != undefined) window.clearTimeout(timeoutID);
			localStorage.removeItem('timerIsRunning');
			localStorage.removeItem('timerFinishTime');
			localStorage.removeItem('timerSavedTime');
		}
		UpdateTimerDis(timeLeft);
}

function UpdateTimerDis(millis) {
	for(let i = 0; i < dis.length; i++) { 
		dis[i].innerHTML = millisToMinutesAndSeconds(millis);
	}
}

function StartTimer() { 
	
	if(localStorage.getItem('timerSavedTime')){
		savedTime = localStorage.getItem('timerSavedTime') * 1;
		localStorage.removeItem('timerSavedTime');
	}else{
		savedTime = timerLength;
	}
	
	localStorage.setItem('timerIsRunning', true);
	localStorage.setItem('timerFinishTime', ((new Date()).getTime() + savedTime));
	if (timeoutID != undefined) window.clearTimeout(timeoutID);
	UpdateTimer();
} 

function millisToMinutesAndSeconds(millis) {
		let hours = Math.floor(millis / 3600000);
		let minutes = (Math.floor(millis / 60000))-(hours*60);
		if(minutes > 59){
			minutes = 0;
		}
		let seconds = ((millis % 60000) / 1000).toFixed(0);
		if(seconds > 59){
			seconds = 0;
		}
		return hours + " : " + (minutes < 10 ? '0' : '') + minutes + " : " + (seconds < 10 ? '0' : '') + seconds;
} 

})();
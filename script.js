var startButton = document.getElementById('start-button');
var stopButton = document.getElementById('stop-button');
var resetButton = document.getElementById('reset-button');

var millisecondsValue = document.getElementById('milliseconds');
var secondsValue = document.getElementById('seconds');
var minutesValue = document.getElementById('minutes');
var hoursValue = document.getElementById('hours');


// Variables to be used in the functions globally
var milliseconds = 0;
var seconds = 0;
var minutes = 0;
var hours = 0;
var interval;


// Start Button Function
startButton.addEventListener('click', function(){
    clearInterval(interval);
    interval = setInterval(startTimer,10);
});


// Stop Button Function
stopButton.addEventListener('click',function(){
    clearInterval(interval);
});


// Reset Button Function
resetButton.addEventListener('click',function(){
    clearInterval(interval);
    milliseconds = "00";
    seconds = "00";
    minutes = "00";
    hours = "00";
    millisecondsValue.innerHTML = milliseconds;
    secondsValue.innerHTML = seconds;
    minutesValue.innerHTML = minutes;
    hoursValue.innerHTML = hours;
});


// Here Is The Code For Working Of Timer Interval
function startTimer()
{
    milliseconds++;
    if(milliseconds <= 9)
    {
        millisecondsValue.innerHTML = "0" + milliseconds;
    }
    if(milliseconds > 9)
    {
        millisecondsValue.innerHTML = milliseconds;
    }

    if(milliseconds > 99)
    {
        seconds++;
        secondsValue.innerHTML = "0" + seconds;
        milliseconds = 0;
        millisecondsValue.innerHTML = "0" + milliseconds;        
    }

    if(seconds > 9)
    {
        secondsValue.innerHTML = seconds;
    }

    if(seconds >=60 )
    {
        minutes++;
        minutesValue.innerHTML = "0" + minutes;
        seconds = 0;
        secondsValue.innerHTML = "0" + seconds;
    }

    if(minutes > 9)
    {
        minutesValue.innerHTML = minutes;
    }

    if(minutes >= 60)
    {
        hours++;
        hoursValue.innerHTML = "0" + hours;
        minutes = 0;
        minutesValue.innerHTML ="0" + minutes;
    }

    if(hours > 9)
    {
        hoursValue.innerHTML = hours;
    }
}

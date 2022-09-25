var timerEl = document.queryselector(".time");
var timeLeft = doucment.queryselector(".timeleft");
var mainEl = document.querySelector(".main");
var textAreaEl = document.querySelector("#textarea");
var clearEl = 

var secondsLeft = 75;

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }
}
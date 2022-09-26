var timerEl = document.queryselector(".time");
var timeLeft = doucment.queryselector(".timeleft");
var mainEl = document.querySelector(".main");
var textAreaEl = document.querySelector("#textarea");

var questionList = ["Commonly used data types do not inculde: ", "The condition in an if / else statement is enclosed within ____", "Arrays in Javascript can be used to store", "String values must be enclosed within ____ when being assigned to variables", "A very usedful tool used in web development and debugging for printing content to the debugger"]

var secondsLeft = 75;

// call a countdown function that starts at 75 seconds

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 1000);
}

// 10 seconds are subtracted from the countdown when user selects the incorrect answer. They're still directed to the next section though.
function guessedAnswer() {
    if (questionList[i].correct) {
        score++
    } else {
        timeLeft -= 10;
        time.textContent = timeLeft;
    }

    if (questionlist[i]) {
        score = timeLeft;
        GameOver()
    } else {
        renderQuestion()
    }
}

// states the high score
function highScore() {
    h3EL.innerText = ("High Scores"); 
}
// game over screen
function highScore() {
    clearInterval(countdown);
}
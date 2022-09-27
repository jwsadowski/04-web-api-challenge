var score = 0;
var index = 0;
var timerEl = document.getElementById(".timer");
var startButton = document.getElementById("#start");
var timeLeft = document.querySelector(".timeleft");
var mainEl = document.querySelector(".main");
var textAreaEl = document.querySelector("#textarea");
var seconds = 75000;

var questionList = [
    {
        question: "Commonly used data types do not include:",
        options: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts" 
    }, {
        question: "The condition in an if / else statement is enclosed within ______",
        options: ["quotes", "curly brackets", "parenthesis", "square brackets"],
        answer:  "parenthesis"
    }, {
        question: "Arrays in JavaScript can be used to store _______",
        options: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "numbers and strings"
    }, {
        question: "String vallues must be enclosed within ______ when being assigned to variables",
        options: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    }, {
        question: "A very useful tool used during web development and debugging for printing content to the debugger",
        options: ["javascript", "terminal bash", "for loops", "console log"],
        asnwer: "console log"
    }
]

// call a countdown function that starts at 75 seconds

function countdown() {
    setTimeout(decrement, 75000);
}

//decrement function and value
function decrement() {
    if (document.getElementById) {
        seconds = document.getElementById("seconds");

        // if less than 75 seconds remain, display seconds value
        if (seconds < 75) {
            seconds.value = seconds;
        } else {
            seconds.value = getseconds();
        }
        if (seconds === 0) {
            alert("time's up");
            seconds.value = 0;
        } else {
            seconds--;
            setTimeout (decrement(), 75000);
        }

    }
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

// stores user's initials in the computer
function renderLastRegistered() {
    var initials = localStorage.getItem("initials");
    if (initials === "") {
        displayMessage("error", "initials cannot be blank");
    } else {
        displayMessage("success", "registered successfully");

        localStorage.setItem("initials");
        renderLastRegistered();
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


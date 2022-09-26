var timerEl = document.queryselector(".time");
var timeLeft = doucment.queryselector(".timeleft");
var mainEl = document.querySelector(".main");
var textAreaEl = document.querySelector("#textarea");
var seconds = Math.floor((distance % (75000 * 60)) / 1000);

var questionList = ["Commonly used data types do not inculde: ", "The condition in an if / else statement is enclosed within ____", "Arrays in Javascript can be used to store", "String values must be enclosed within ____ when being assigned to variables", "A very usedful tool used in web development and debugging for printing content to the debugger"]

// call a countdown function that starts at 75 seconds

function countdown() {
    setTimeout(decrement(), 75000)
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


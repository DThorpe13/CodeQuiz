var startScreen = document.getElementById("startScreen");
var quiz = document.getElementById("questionsDiv");
var scores = document.getElementById("scoresDiv");
var ques = document.getElementById("question");
var c1 = document.getElementById("choice1");
var c2 = document.getElementById("choice2");
var c3 = document.getElementById("choice3");
var c4 = document.getElementById("choice4");
var total = document.getElementById("total");
var seconds = 90;

var questions = [
    {
        question: "What does CSS stand for?",
        choice1: "Computer Software Syntax",
        choice2: "Cascading Style Sheets",
        choice3: "Computer Styling Syntax",
        choice4: "Cascading Software Sheets",
        correct: "2"
    },
    {
        question: "What does HTML stand for?",
        choice1: "Hyper Textile Marking Language",
        choice2: "Hyper Text Marking Link",
        choice3: "Hyper Text Markup Language",
        choice4: "Hyper Text Markup Link",
        correct: "3"
    },
    {
        question: "How do you round down a number using JavaScript?",
        choice1: "Math.round.down",
        choice2: "Math.floor()",
        choice3: "Number.round(down)",
        choice4: "Math.random()",
        correct: "2"
    },
    {
        question: "Which of the following is NOT a CSS selector?",
        choice1: "id",
        choice2: "class",
        choice3: "element",
        choice4: "boolean",
        correct: "4"
    },
    {
        question: "OOP stands for what?",
        choice1: "Object Operated Programs",
        choice2: "Order Operated Programming",
        choice3: "Object Orientated Programming",
        choice4: "Order Oriented Programs",
        correct: "3"
    },
    {
        question: "jQuery is a library for...",
        choice1: "JavaScript",
        choice2: "CSS",
        choice3: "HTML",
        choice4: "JSON",
        correct: "1"
    },
]


var lastQues = questions.length - 1;
var displayedQuestions = 0;


function randomQuestions() {
    var q = questions[displayedQuestions];
    question.innerHTML = "<h4>" + q.question + "</h4>";
    choice1.innerHTML = q.choice1;
    choice2.innerHTML = q.choice2;
    choice3.innerHTML = q.choice3;
    choice4.innerHTML = q.choice4;
}

function countDown() {
    var timeLeft = document.getElementById("time")
    var i = setInterval(function () {
        seconds--;
        var secondsString = seconds.toString();
        timeLeft.textContent = secondsString;
        if (seconds <= 0) {
            clearInterval(i);
        } else if (lastQues === displayedQuestions) {
            clearInterval(i)
        }
    }, 1000);
}

document.getElementById("startbutton").addEventListener("click", function startQuiz() {
    startScreen.style.display = "none";
    randomQuestions();
    quiz.style.display = "block"
    countDown();
});

function checkAnswer(answer) {
    if (answer == questions[displayedQuestions].correct) {

        seconds += 10;
        console.log("Correct!");

    } else {

        seconds -= 15;

    }
    if (displayedQuestions < lastQues) {
        displayedQuestions++;
        randomQuestions();

    } else
        scoreDisplay();
}
function correctchoice() {
    document.getElementById()
}


function scoreDisplay() {
    quiz.style.display = "none"
    scores.style.display = "block";
    score.innerHTML = "Your Score is " + seconds;
}


var initals = document.getElementById("initials");
var submitScore = document.getElementById("subScore");

var highScores = JSON.parse(localStorage.getItem("highScores")) || [];


submitScore.addEventListener("click", function (event) {
    event.preventDefault();


    var userData = {
        initials: initals.value.trim(),
        score: seconds,
    }

    console.log(userData);

    highScores.push(userData);

    localStorage.setItem("highScores", JSON.stringify(highScores));

    console.log(highScores);

    window.location.href = "Highscores.html";


    var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

    console.log("highScores", highScores);

    for (i = 0; i < highScores.length; i++) {

        var newEl = document.createElement("li");

        newEl.textContent = highScores.initials + ":" + highScores.score;
        scoreboard.innerHTML = highScores.initials + ":" + highScores.score;

        console.log(highScoresEl);

        highScoresEl.append(newEl);
    }

});



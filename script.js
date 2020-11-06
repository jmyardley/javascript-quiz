var timeEl = document.querySelector("#clock");
var startButton = document.querySelector("#startButton");
var secondsLeft = 10;

var answerList = document.querySelector("#answerList");
var questionArea = document.querySelector("#questionList");

var questions = [
    {
        question: "what is JS?",
        choices: [
            "A language for the web",
            "A drink"
        ],
        answerIndex: 0
    },
    {
        question: "what is CSS?",
        choices: [
            "A language for webpage appearance",
            "A politician"
        ],
        answerIndex: 0
    }
]

//------------------- COUNTDOWN -------------------

function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft;

        //if(secondsLeft === 0) {
        // clearInterval(timerInterval);
        //}

    }, 1000);
}

startButton.addEventListener("click", function () {
    setTime()
});

//------------------- QUIZ -------------------

var currentQuestionIndex = 0;

function displayQuestion() {
    var questionText = document.createElement("p");
    questionText.textContent = questions[currentQuestionIndex].question;
    questionArea.appendChild(questionText);
    for (var i = 0; i < questions[currentQuestionIndex].choices.length; i++) {

        var listOption = document.createElement("li");
        listOption.textContent = questions[currentQuestionIndex].choices[i];
        answerList.appendChild(listOption);
    }
}

function answerChosen() {
    //...
    currentQuestionIndex++;
    displayQuestion();
}

answerList.addEventListener("click", answerChosen);

displayQuestion()
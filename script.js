var timeEl = document.querySelector("#clock");
var startButton = document.querySelector("#startButton");
var secondsLeft = 10;

var answerList = document.querySelector("#answerList");
var questionArea = document.querySelector("#questionList");

var questions = [
    {
        question: "what is JavaScript?",
        choices: [
            "A national holiday",
            "An archaeological discovery",
            "A language for the web",
            "A coffee drink"
        ],
        answerIndex: 2
    },
    {
        question: "what type of variable stores multiple objects?",
        choices: [
            "Function",
            "Array",
            "Jazzmaster",
            "Shopping cart"
        ],
        answerIndex: 1
    },
    {
        question: "What is the correct way to call the function myFunction?",
        choices: [
            "Avengers(assemble)",
            "Ready, set, go",
            "Hey Siri, run myFunction",
            "myFunction()"
        ],
        answerIndex: 3
    },
    {
        question: "Where would you place Javascript code in HTML?",
        choices: [
            "Inside <head></head> tags",
            "Inside <script></script> tags",
            "Inside the Oval Office",
            "Inside the Salty Spittoon"
        ],
        answerIndex: 1
    },
    {
        question: "Who invented Javascript?",
        choices: [
            "Brendan Eich",
            "Jim Henson",
            "God",
            "Bernie Sanders"
        ],
        answerIndex: 0
    },
]

//------------------- COUNTDOWN -------------------

function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft;
        
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            displayQuestion();
        }
        
    }, 1000);
}

startButton.addEventListener("click", function () {
    setTime()
});

//------------------- QUIZ -------------------

var currentQuestionIndex = 0;

function displayQuestion() {
    questionArea.removeChild(questionArea.childNodes[0]);
    while(answerList.firstChild){
        answerList.removeChild(answerList.lastChild);
    }
    
    var questionText = document.createElement("p");
    questionText.textContent = questions[currentQuestionIndex].question;
    questionArea.appendChild(questionText);
    
    for (var i = 0; i < questions[currentQuestionIndex].choices.length; i++) {
        var listOption = document.createElement("li");
        listOption.textContent = questions[currentQuestionIndex].choices[i];
        answerList.appendChild(listOption);
        listOption.setAttribute("id", i.toString());
        listOption.addEventListener("click", answerChosen);
    }
}





function answerChosen() {
    //...
    currentQuestionIndex++;
    displayQuestion();
}

//answerList.addEventListener("click", answerChosen);

//displayQuestion()
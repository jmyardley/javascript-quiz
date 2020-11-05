var timeEl = document.querySelector("#clock");
var startButton = document.querySelector("#startButton");
var secondsLeft = 100;

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


function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft;
  
      //if(secondsLeft === 0) {
       // clearInterval(timerInterval);
      //}
  
    }, 1000);
  }

startButton.addEventListener("click", function() {
    setTime()
});

var currentQuestionIndex = 0;

function displayQuestion(){

}

function answerChosen(){
    //...
    currentQuestionIndex++;
    displayQuestion();
}

choiceList.addEventListener("click", answerChosen);
// Defining functions
var start = document.querySelector ("#Begin")
var Rules = document.querySelector ("#Rules")
var Timer = document.querySelector ("#secondsLeft")
var questionElement= document.querySelector (question)
var answerElement = document.querySelector (answer)
var questionContainer = document.querySelector ("#questionContainer")
var GameState = {
    timeOff: 60

}


// activating Start btn
start.addEventListener("click",()=>{
    console.log("hello");
    start.style.display = "none";
    Rules.style.display = "block";
    countdownTimer();
    questionContainer = document.querySelector ("#questionContainer")
    setNextQuestion
})

function setNextQuestion(question){


function countdownTimer(){
    var countdown = setInterval(function() {
        GameState.timeOff--;
        document.getElementById("timer").textContent = GameState.timeOff;
        if (GameState.timeOff <= 0) clearInterval(countdown);{

        }
    }, 1000);}

var questions = [
{
    question: "What is Javascript",
    answers: [
        {"A programming language": true},
        {"A sandwich": false },
        {"A sandwich": false },
        {"A sandwich": false },

    ]
}
]

}


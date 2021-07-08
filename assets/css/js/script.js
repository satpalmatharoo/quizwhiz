// Defining functions
var start = document.querySelector ("#Begin")
var Rules = document.querySelector ("#Rules")
var Timer = document.querySelector ("#secondsLeft")
var questionElement= document.querySelector ("#questionOption")
var next = document.querySelector ("#nextButton")
var questionContainer = document.querySelector ("#questionContainer")
var questionOption = document.querySelector (".questionOption")
var currentQuestion =0
var scorer = document.querySelector ("#scorer")
var score = 0
var GameState = {
    timeOff: 60}


//var answerElement = document.querySelector (answer)



// activating Start btn
start.addEventListener("click",()=>{
    console.log("hello");
    start.style.display = "none";
    Rules.style.display = "block";
    questionContainer = document.querySelector ("#questionContainer")
    
})

//activating next btn
next.addEventListener("click",()=>{
    console.log("hello");
    start.style.display = "none";
    Rules.style.display = "block";
})

//activating next btn
questionOption.addEventListener("click",(event)=>{
   var isCorrect = event.target.getAttribute("data-isCorrect")
   console.log(isCorrect);
// Change class of current question

var curQuestion = document.querySelector (`[data-index = "${currentQuestion}"]`)
console.log (curQuestion)
curQuestion.classList.add("hide")
currentQuestion = currentQuestion +1
// Change class of next question
var nextQuestion =document.querySelector (`[data-index = "${currentQuestion}"]`) 
nextQuestion.classList.remove("hide")
// If correct then increase the score
if (isCorrect) {score +=1}
else {GameState.timeOff -=10}
// if incorrect reduce the time

// If last question end quiz

})


function setNextQuestion(question){
} 

function countdownTimer(){
    console.log ("working")
    var countdown = setInterval(function() {
        GameState.timeOff--;
        console.log ("working")
        document.getElementById("timer").textContent = GameState.timeOff;
        if (GameState.timeOff <= 0) clearInterval(countdown);{

        }
    }, 1000);}
    countdownTimer();
// //  var questions = [
//  {
//     question: "What is Javascript",
//     answers: [
//      {"A programming language": true},
//      {"A sandwich": false },
//      {"A sandwich": false },
//      {"A sandwich": false },

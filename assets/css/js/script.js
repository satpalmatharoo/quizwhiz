// Defining functions
var start = document.querySelector ("#Begin")
var Rules = document.querySelector ("#Rules")
var Timer = document.querySelector ("#secondsLeft")
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
})
function countdownTimer(){
    var countdown = setInterval(function() {
        GameState.timeOff--;
        document.getElementById("timer").textContent = GameState.timeOff;
        if (GameState.timeOff <= 0) clearInterval(countdown);{

        }
    }, 1000);}

function nextButton(){

}
    var next

//}>NEXT</button}

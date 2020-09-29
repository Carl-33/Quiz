// var quizBox = document.querySelector(".quiz-box");
var script = document.createElement("SCRIPT");
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
script.type = 'text/javascript';

var Question = document.querySelector("h3")
var button1 = document.querySelector("#button1")
var button2 = document.querySelector("#button2")
var button3 = document.querySelector("#button3")
var button4 = document.querySelector("#button4")
var startBox = document.querySelector(".start-box")
var startButton = document.querySelector(".start-button")
var quizButtons = [button1, button2, button3, button4]


var questionList = ["What is Nicolas Cage's real name?", "Where was Nic Cage born?", "For what movie did Nic Cage win a 'Best Actor' academy award?", "farts 2"];
var answerList = [["Nicholas Cage", "John Farnsworth Booth", "Nicolas Kim Coppola", "Benjamin Franklin Gates"],
 ["San Fransisco, California", "Hollywood, Florida", "Brooklyn, New York", "Long Beach, California"],
["Adaption", "Leaving Las Vegas", "Moonstruck", "Nic Cage has never won a Best Actor Oscar, don't be silly"]]


$(document).ready(function(){

        var startButton = $("<div>")
        startButton.addClass("btn btn-success");
        startButton.attr( )
        startButton.text("Start!");
        $(".card").append(startButton)

        for (let i = 0; i < questionList.length; i++) {
                Question.innerText = questionList[i];
                button1.innerHTML = answerList[i][0];
                button2.innerHTML = answerList[i][1];
                button3.innerHTML = answerList[i][2];
                button4.innerHTML = answerList[i][3];


})

   
quizButtons.forEach(function(element){

     element.addEventListener("click", nextQuestion);

})



    function quiz(i){
        
                
        //     event.preventDefault(); 
            Question.innerText = questionList[i]
            button1.innerHTML = answerList[i][0];
            button2.innerHTML = answerList[i][1];
            button3.innerHTML = answerList[i][2];
            button4.innerHTML = answerList[i][3];
        }
 
 


    };









    




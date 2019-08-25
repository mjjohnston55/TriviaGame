var questions = [];

var questions = [
    {
    question: "If a level 40 player is both honored with the corresponding faction and has achieved rank 3 in PvP, how much will mount+training cost total?",
    answers: { 
    a: "100g",
    b: "90g",
    c: "80g",
    d: "85g",
    },
    correctAnswer: "c"
    },
    {
    question: "What is widely considered the hardest class to level?",
    answers: {
    a: "Rogue",
    b: "Warrior",
    c: "Priest",
    d: "Paladin",
    },
    correctAnswer: "b"
    },



]

function startGame() {

}

// function initiate_question() {

// $("#question-div").html(questions.question[question_number]);
// $("#answers1-div").html(questions.answers[question_number].a);
// $("#answers2-div").html(questions.answers[question_number].b);
// $("#answers3-div").html(questions.answers[question_number].c);
// $("#answers4-div").html(questions.answers[question_number].d);
// question_number++;
// }
// initiate_question();

$(document).ready();
$(".main-row").hide();

$("#start-button").on("click", function() {
    $(".main-row").show();
    $(".main-row").html("Hello");

})
var questions = [];
var question_count = 0;

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
    {
    question: "How many players are allowed to enter the Deadmines in one instance group?",
    answers: {
    a: "5",
    b: "10",
    c: "20",
    D: "40",
    },
    correctAnswer: "b"
    }

]
console.log(questions.question[0]);

function showQuestion() {

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
$("#time-div").hide();
$("#question-div").hide();
$("#answer1-div").hide();
$("#answer2-div").hide();
$("#answer3-div").hide();
$("#answer4-div").hide();
$("#score-div").hide();

$("#start-button").on("click", function() {
    $("#time-div").show();
    $("#question-div").show();
    $("#answer1-div").show();
    $("#answer2-div").show();
    $("#answer3-div").show();
    $("#answer4-div").show();
    $("#score-div").show();
    // $("#time-div").;
    $("#question-div").html(questions.question[0]);
    // $("#answer1-div").show();
    // $("#answer2-div").show();
    // $("#answer3-div").show();
    // $("#answer4-div").show();
    // $("#score-div").show();

})
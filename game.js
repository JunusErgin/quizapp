let allQuestions;

let right_answer;
let question_number = 0;
let progress = 0;


function init() {
    // Load questions

fetch('./questions/html.json')
  .then(response => response.json())
    nextQuestion();
}


function hideElements() {
    document.getElementById('right-answer').classList.add('d-none');
    document.getElementById('next-btn').classList.add('d-none');
}


function nextQuestion() {
    hideElements();

    if (question_number == allQuestions.length) {
        finishQuiz();
    } else {
        question_number = question_number + 1;
        progress = Math.round((question_number / allQuestions.length) * 100);
        document.getElementById('progress-bar').innerHTML = progress + '%';
        document.getElementById('progress-bar').style.width = progress + '%';

        loadQuestion();
    }
}

function finishQuiz() {
    document.getElementById('quiz-container').classList.add('d-none');
    document.getElementById('quiz-finished-container').classList.remove('d-none');
}

function loadQuestion() {
    document.getElementById('question').innerHTML = allQuestions[question_number - 1]['question'];
    document.getElementById('answer1').innerHTML = allQuestions[question_number - 1]['answer_1'];
    document.getElementById('answer2').innerHTML = allQuestions[question_number - 1]['answer_2'];
    document.getElementById('answer3').innerHTML = allQuestions[question_number - 1]['answer_3'];
    document.getElementById('answer4').innerHTML = allQuestions[question_number - 1]['answer_4'];
    right_answer = allQuestions[question_number - 1]['right_answer'];
}



function answer(a) {
    if (a == right_answer) { // Right answer
        document.getElementById('wrong-answer').classList.add('d-none');
        document.getElementById('right-answer').classList.remove('d-none');
        // Show next buttton
        document.getElementById('next-btn').classList.remove('d-none');
    } else {
        document.getElementById('right-answer').classList.add('d-none');
        document.getElementById('wrong-answer').classList.remove('d-none');
    }
}

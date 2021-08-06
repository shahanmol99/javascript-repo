
var quizBox = document.getElementById('quiz-container');
var nextBtn = document.getElementById('nextbtn');
var resultBtn = document.getElementById('result');
var playagin = document.getElementById('playagain');

var qNo = 0;
var score = 0;

document.addEventListener('DOMContentLoaded', loadQuestionsHandler);
nextBtn.addEventListener('click', checkAnswer);
resultBtn.addEventListener('click', analyseResult);
playagin.addEventListener('click', function() {
    location.reload();
});

function loadQuestionsHandler() {
    
    var p = document.getElementById('question'); 
    renderHTML(p, questions[qNo].question);

    var optA = document.getElementById('optA'); 
    renderHTML(optA, questions[qNo].answers.a);

    var optB = document.getElementById('optB'); 
    renderHTML(optB, questions[qNo].answers.b);

    var optC = document.getElementById('optC'); 
    renderHTML(optC, questions[qNo].answers.c);

    var optD = document.getElementById('optD'); 
    renderHTML(optD, questions[qNo].answers.d);

}

function loadNextQuestion() {
    
    if(qNo<4) {
        qNo++;
        loadQuestionsHandler();
    }
    else {
        nextBtn.style.visibility = 'hidden';
        resultBtn.style.visibility = 'visible';
        playagin.style.visibility = 'visible';
    }
}

function checkAnswer() {
    var options = document.querySelectorAll('.options');
    var answer;

    for(var i=0;i<options.length;i++) {
        if(options[i].checked) {
            answer = options[i].value;
        }
    }

    if(answer==undefined) {
        alert('Please Enter A Option');
        return;
    }

    if(answer==questions[qNo].correctAnswer) {
        score++;
    }

    loadNextQuestion();
}

function analyseResult() {
    resultBtn.style.visibility = 'hidden';
    score = score*100/5;

    var p = document.createElement('p');
    p.innerText = "You score is " + score + "% :)";
    quizBox.appendChild(p);

}

function renderHTML(element, text) {
    element.innerText = text;
}


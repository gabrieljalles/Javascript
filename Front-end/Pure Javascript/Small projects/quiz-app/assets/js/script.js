const quizData = [
    {
        question: 'How old is Gabriel Jalles?',
        a:'21',
        b:'23',
        c:'24',
        d:'22',
        correct:'d'
    },{
        question:'What is the best programing language?',
        a:'Javascript',
        b:'Python',
        c:'Java',
        d:'kotlin',
        correct: 'a'
    },{
        question: ' Who is the president of Brasil in 2022 ?',
        a:'Bolsonaro',
        b:'Ratinho',
        c:'Fernando Color',
        d:'Rui barbosa',
        correct:'a',
    },{
        question: ' What does HTML stand for ?',
        a:'Hypertext Markup Language',
        b:'Cascading style sheet',
        c:'Json object Notation',
        d:'Application Programming Interface',
        correct:'a',
    },{
        question: 'What year was Javascript launched?',
        a:'2020',
        b:'1995',
        c:'1996',
        d:'None of the above',
        correct:'b'
    }
]

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswer();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c; 
    d_text.innerText = currentQuizData.d;
}

function getSelected(){
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswer(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}


submitBtn.addEventListener('click', () => {

    const answer = getSelected();

    if(answer){
        if (answer === quizData[currentQuiz].correct){
            score ++;
        }

        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        }else {
            quiz.innerHTML = `
            <h2> You answered correctly at ${score}/${quizData.length} questions <h2>
            <button onclick="location.reload()">Reload</button>`;
        }

    }
});
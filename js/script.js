var codeQuestions = [
    {
        question: "1.What does HTML stand for",
        answers: {
            a: "a. Hyperlinks and Text Markup Language",
            b: "b. Hyper Text Markup Language",
            c: "c. Home Tool Markup Language"
        },
        correctAnswer: "a"
    },
    {
        question: "2.Choose the correct HTML element to define important text",
        answers: {
            a: "a. &lt;b&gt;",
            b: "b. &lt;strong&gt;",
            c: "c. &lt;important&gt;"
        },
        correctAnswer: "b"
    },
    {
        question: "3.How can you make a numbered list?",
        answers: {
            a: "a. &lt;ol&gt;",
            b: "b. &lt;list&gt;",
            c: "c. &lt;ul&gt;"
        },
        correctAnswer: "a"
    },
    {
        question: "4.What does CSS stand for?",
        answers: {
            a: "a. Cascading Style Sheets",
            b: "b. Computer Style Sheets",
            c: "c. Colorful Style Sheets"
        },
        correctAnswer: "a"
    },
    {
        question: "5.Which property is used to change the background color?",
        answers: {
            a: "a. color",
            b: "b. bgcolor",
            c: "c. background-color"
        },
        correctAnswer: "c"
    },
    {
        question: "6.Which CSS property controls the text size?",
        answers: {
            a: "a. text-size",
            b: "b. text-style",
            c: "c. font-size"
        },
        correctAnswer: "c"
    },
    {
        question: "7.How do you select elements with class name 'test'?",
        answers: {
            a: "a. #test",
            b: "b. .test",
            c: "c. *test"
        },
        correctAnswer: "b"
    },
    {
        question: "8.Where is the correct place to insert a JavaScript?",
        answers: {
            a: "a. Both the &lt;head&gt; section and the &lt;body&gt; section are correct",
            b: "b. The &lt;head&gt; section",
            c: "c. The &lt;body&gt; section"
        },
        correctAnswer: "a"
    },
    {
        question: '9.How do you write "Hello World" in an alert box?',
        answers: {
            a: 'a. alertBox("Hello World");',
            b: 'b. alert("Hello Wrold")',
            c: 'c. msg("Hello World")'
        },
        correctAnswer: "b"
    },
    {
        question: "10.What is the correct way to write a JavaScript array?",
        answers: {
            a: 'a. var colors = ["red", "green", "blue"]',
            b: 'b. var colors = (1:"red", 2:"green", 3:"blue")',
            c: 'c. var colors = "red", "green", "blue"'
        },
        correctAnswer: "a"
    }
]
var savedScores = document.getElementById('saved-scores')

var quizDiv = document.getElementById('quiz')
quizDiv.style.display = "none";

var quizOver = document.getElementById('quiz-over')
quizOver.style.display = "none";

var quizComplete = document.getElementById('quiz-complete')
quizComplete.style.display = "none";

var playerScore = document.getElementById('player-score')
playerScore.style.display = "none";

var startDiv = document.getElementById('start')
startDiv.style.display = "block";

var timer = document.getElementById('timer');
var time = 150;
timer.innerHTML = time;


var timeIntervalId;
function onclick() {
    startDiv.style.display = "none";
    playerScore.style.display = "none";
    quizDiv.style.display = "block";


    timeIntervalId = setInterval(function () {
        time = time - 1;
        if (time <= 0) {
            quizDiv.style.display = "none";
            timer.style.display = "none";
            playerScore.style.display = "block";
            quizOver.style.display = "block";

        } else {
            timer.innerHTML = time;
        }
    }, 1000);
}



var startBtn = document.getElementById('start-btn')
startBtn.addEventListener('click', onclick)


var currentQuestionIndex = 0;
var renderQuestion = function (index) {

    var codeQuiz = document.getElementById('question')
    codeQuiz.innerHTML = codeQuestions[index].question

    var answerChoice = document.getElementById('a')
    answerChoice.innerHTML = codeQuestions[index].answers.a

    var answerChoice = document.getElementById('b')
    answerChoice.innerHTML = codeQuestions[index].answers.b

    var answerChoice = document.getElementById('c')
    answerChoice.innerHTML = codeQuestions[index].answers.c

}
renderQuestion(currentQuestionIndex);

var score = 0;
var correctBtnA = document.getElementById('a');
var correctBtnB = document.getElementById('b');
var correctBtnC = document.getElementById('c');

var correctChoiceA = function () {
    var correctAnswer = codeQuestions[currentQuestionIndex].correctAnswer;

    if (correctAnswer === 'a') {
        currentQuestionIndex = currentQuestionIndex + 1;
        alert("Correct!");
        score++;

        if (codeQuestions.length === currentQuestionIndex) {
            quizComplete.style.display = "block";
            playerScore.style.display = "block";
            quizDiv.style.display = "none";
            timer.style.display = "none";
        } else {
            renderQuestion(currentQuestionIndex);
        }

    } else {
        time = time - 10;
        alert("Wrong!");
        currentQuestionIndex = currentQuestionIndex + 1;

        if (time <= 0 || codeQuestions.length === currentQuestionIndex) {
            quizDiv.style.display = "none";
            timer.style.display = "none";
            quizOver.style.display = "block";
            quizComplete.style.display = "block";
            playerScore.style.display = "block";
        } else {
            renderQuestion(currentQuestionIndex);
        }
        
    }
    quizComplete.textContent = 'You scored ' + score + '/' + codeQuestions.length;
}

var correctChoiceB = function () {
    var correctAnswer = codeQuestions[currentQuestionIndex].correctAnswer;

    if (correctAnswer === 'b') {
        currentQuestionIndex = currentQuestionIndex + 1;
        alert("Correct!");
        score++;

        if (codeQuestions.length === currentQuestionIndex) {
            quizComplete.style.display = "block";
            playerScore.style.display = "block";
            quizDiv.style.display = "none";
            timer.style.display = "none";
        } else {
            renderQuestion(currentQuestionIndex);
        }


    } else {
        time = time - 10;
        alert("Wrong!");
        currentQuestionIndex = currentQuestionIndex + 1;

        if (time <= 0 || codeQuestions.length === currentQuestionIndex) {
            quizDiv.style.display = "none";
            timer.style.display = "none";
            quizOver.style.display = "block";
            quizComplete.style.display = "block";
            playerScore.style.display = "block";
        } else {
            renderQuestion(currentQuestionIndex);
        }
    }
    quizComplete.textContent = 'You scored ' + score + '/' + codeQuestions.length;
}

var correctChoiceC = function () {
    var correctAnswer = codeQuestions[currentQuestionIndex].correctAnswer;

    if (correctAnswer === 'c') {
        currentQuestionIndex = currentQuestionIndex + 1;
        alert("Correct!");
        score++;

        if (codeQuestions.length === currentQuestionIndex) {
            quizComplete.style.display = "block";
            playerScore.style.display = "block";
            quizDiv.style.display = "none";
            timer.style.display = "none";

        } else {
            renderQuestion(currentQuestionIndex);
        }

    } else {
        time = time - 10;
        alert("Wrong!");
        currentQuestionIndex = currentQuestionIndex + 1;
        
        if (time <= 0 || codeQuestions.length === currentQuestionIndex) {
            quizDiv.style.display = "none";
            timer.style.display = "none";
            quizOver.style.display = "block";
            quizComplete.style.display = "block";
            playerScore.style.display = "block";
        } else {
            renderQuestion(currentQuestionIndex);
        }
    }
    quizComplete.textContent = 'You scored ' + score + '/' + codeQuestions.length;
}

correctBtnA.addEventListener('click', correctChoiceA);
correctBtnB.addEventListener('click', correctChoiceB);
correctBtnC.addEventListener('click', correctChoiceC);
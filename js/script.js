var codeQuestions = [
    {
        question: "1.What does HTML stand for",
        answers: {
            a: "Hyperlinks and Text Markup Language",
            b: "Hyper Text Markup Language",
            c: "Home Tool Markup Language" 
        },
        correctAnswer: "a"
    },
    {
        question: "2.Choose the correct HTML element to define important text",
        answers: {
            a: "&lt;b&gt;",
            b: "&lt;strong&gt;",
            c: "&lt;important&gt;"
        },
        correctAnswer: "b"
    },
    {
        question: "3.How can you make a numbered list?",
        answers: {
            a: "&lt;ol&gt;",
            b: "&lt;list&gt;",
            c: "&lt;ul&gt;"
        },
        correctAnswer: "a"
    },
    {
        question: "4.What does CSS stand for?",
        answers: {
            a: "Cascading Style Sheets",
            b: "Computer Style Sheets",
            c: "Colorful Style Sheets"
        },
        correctAnswer: "a"
    },
    {
        question: "5.Which property is used to change the background color?",
        answers: {
            a: "color",
            b: "bgcolor",
            c: "background-color"
        },
        correctAnswer: "c"
    },
    {
        question: "6.Which CSS property controls the text size?",
        answers: {
            a: "text-size",
            b: "text-style",
            c: "font-size"
        },
        correctAnswer: "c"
    },
    {
        question: "7.How do you select elements with class name 'test'?",
        answers: {
            a: "#test",
            b: ".test",
            c: "*test"
        },
        correctAnswer: "b"
    },
    {
        question: "8.Where is the correct place to insert a JavaScript?",
        answers: {
            a: "Both the <head> section and the <body> section are correct",
            b: "The <head> section",
            c: "The <body> section"
        },
        correctAnswer: "a"
    },
    {
        question: '9.How do you write "Hello World" in an alert box?',
        answers: {
            a: 'alertBox("Hello World");',
            b: 'alert("Hello Wrold")',
            c: 'msg("Hello World")'
        },
        correctAnswer: "b"
    },
    {
        question: "10.What is the correct way to write a JavaScript array?",
        answers: {
            a: 'var colors = ["red", "green", "blue"]',
            b: 'var colors = (1:"red", 2:"green", 3:"blue")',
            c: 'var colors = "red", "green", "blue"'
        },
        correctAnswer: "a"
    }
]


var quizDiv = document.getElementById('quiz')
quizDiv.style.display = "none";


var startDiv = document.getElementById('start')
startDiv.style.display = "block";




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


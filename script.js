// ===============================
// ONLINE QUIZ SYSTEM
// ===============================

const questions = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlinks Text Mark Language",
            "Home Tool Markup Language"
        ],
        answer: 0
    },

    {
        question: "Which language is used to style a web page?",
        options: [
            "HTML",
            "CSS",
            "Java",
            "Python"
        ],
        answer: 1
    },

    {
        question: "Which language is used to make a web page interactive?",
        options: [
            "HTML",
            "CSS",
            "JavaScript",
            "SQL"
        ],
        answer: 2
    },

    {
        question: "Which symbol is used for an ID selector in CSS?",
        options: [
            ".",
            "#",
            "*",
            "@"
        ],
        answer: 1
    },

    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: [
            "var",
            "int",
            "string",
            "define"
        ],
        answer: 0
    }
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;


// When page loads
document.addEventListener("DOMContentLoaded", function () {
    showQuestion();
});


// Display question
function showQuestion() {

    const question = questions[currentQuestion];

    document.getElementById("questionNumber").textContent =
        currentQuestion + 1;

    document.getElementById("question").textContent =
        question.question;


    // Progress bar
    const progress =
        ((currentQuestion + 1) / questions.length) * 100;

    document.getElementById("progressBar").style.width =
        progress + "%";


    // Display options
    const optionsContainer =
        document.getElementById("options");

    optionsContainer.innerHTML = "";


    question.options.forEach(function (option, index) {

        const div = document.createElement("div");

        div.className = "answer-option";

        div.innerHTML = `
            <input type="radio" name="answer">
            <span>${option}</span>
        `;


        div.addEventListener("click", function () {

            // Remove previous selection
            document.querySelectorAll(".answer-option")
                .forEach(function (item) {
                    item.classList.remove("selected-answer");
                });


            // Select current option
            div.classList.add("selected-answer");

            selectedAnswer = index;
        });


        optionsContainer.appendChild(div);

    });


    // Button text
    const nextButton =
        document.getElementById("nextBtn");

    if (currentQuestion === questions.length - 1) {

        nextButton.textContent =
            "Finish Quiz 🏆";

    } else {

        nextButton.textContent =
            "Next →";

    }


    selectedAnswer = null;
}


// Next button
function nextQuestion() {

    if (selectedAnswer === null) {

        alert("Please select an answer!");

        return;
    }


    // Check answer
    if (
        selectedAnswer ===
        questions[currentQuestion].answer
    ) {

        score++;

    }


    currentQuestion++;


    // More questions
    if (currentQuestion < questions.length) {

        showQuestion();

    }

    // Quiz completed
    else {

        localStorage.setItem(
            "quizScore",
            score
        );

        window.location.href =
            "result.html";
    }
}
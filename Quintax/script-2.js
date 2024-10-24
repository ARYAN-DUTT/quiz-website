const quizData = [
    {
        question: "What is the output of print(2 ** 3)?",
        options: ["a.) 6", "b.) 8", "c.) 9", "d.) 12"],
        answer: 1
    },
    {
        question: "Which of these is a Python data type?",
        options: ["a.) String", "b.) Interger", "c.) Character", "d.) Syntax"],
        answer: 0
    },
    {
        question: "What does 'len()' function do?",
        options: ["a.) Calculates length", "b.) Calculates sum", "c.) Finds max", "d.) Finds min"],
        answer: 0
    },
    {
        question: "Which keyword is used to define a function in Python?",
        options: ["a.) func", "b.) define", "c.)def", "d.)function"],
        answer: 2
    },
    {
        question: "What does 'pip' stand for in Python?",
        options: ["a.) Pip installs Python", "b.) Pip installs packages", "c.) Python installs packages", "d.) Package installs Python"],
        answer: 1
    }
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

const quizContainer = document.getElementById("quiz");
const nextButton = document.getElementById("next-btn");



function loadQuestion() {
    // Load the question
    const questionData = quizData[currentQuestion];
    quizContainer.innerHTML = `
        <h2>${questionData.question}</h2>
        <ul class="options">
            ${questionData.options.map((option, index) => 
                `<li onclick="selectOption(${index})">${option}</li>`
            ).join('')}
        </ul>
    `;
}

function selectOption(index) {
    const options = document.querySelectorAll(".options li");
    options.forEach(option => option.classList.remove("selected"));
    options[index].classList.add("selected");
    selectedAnswer = index;
    nextButton.disabled = false; // Enable the next button
}

function nextQuestion() {
    if (selectedAnswer === quizData[currentQuestion].answer) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
        nextButton.disabled = true;
        selectedAnswer = null; // Reset selected answer for the next question
    } else {
        showResult();
    }
}


function showResult() {
    quizContainer.classList.add("hidden");
    nextButton.classList.add("hidden");
    const resultContainer = document.getElementById("result");
    resultContainer.classList.remove("hidden");
    document.getElementById("score").textContent = score;
}

// Initialize the quiz
loadQuestion();

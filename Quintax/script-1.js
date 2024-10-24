const quizData = [
    {
        question: "What does CSS stand for?",
        options: ["a.) Cascading Style Sheets", "b.) Colorful Style Sheets", "c.) Creative Style Systems", "d.) Computer Style Sheets"],
        answer: 0 // Correct answer: a.) Cascading Style Sheets
    },
    {
        question: "Which HTML tag is used to define an internal style sheet?",
        options: ["a.) style", "b.) css", "c.) script", "d.) link"],
        answer: 0 // Correct answer: a.) <style>
    },
    {
        question: "How do you select an element with the ID 'myElement' using JavaScript?",
        options: ["a.) document.getElementById('myElement')", "b.) document.querySelector('#myElement')", "c.) Both a and b", "d.) document.getElement('myElement')"],
        answer: 2 // Correct answer: c.) Both a and b
    },
    {
        question: "Which property is used to change the font of an element in CSS?",
        options: ["a.) font-weight", "b.) font-style", "c.) font-family", "d.) text-style"],
        answer: 2 // Correct answer: c.) font-family
    },
    {
        question: "Which HTML attribute is used to define inline javascript?",
        options: ["a.) class", "b.) script", "c.) font", "d.) styles"],
        answer: 1 // Correct answer: b.) style
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


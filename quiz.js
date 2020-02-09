// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score
// {
//     questions:String,
//     answers:[],
//     answerIndex:1
// }
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const questions = [
    {
        question: "Who invented javaScript?",
        answers: {
            a: "Bill Gates",
            b: "Steve Jobs",
            c: "Brendan Eich"
        },
        answerIndex: "c"
    },
    {
        question: "Which one is not a front end language?",
        answers: {
            a: "JavaScript",
            b: "HTML",
            c: "Java",
            d: "CSS"
        },
        answerIndex: "c"
    },
    {
        question: "Which tool can you use to ensure code quality?",
        answers: {
            a: "Angular",
            b: "jQuery",
            c: "RequireJS",
            d: "ESLint"
        },
        correctAnswer: "d"
    },
    {
        question: "Which programming language is the oldest?",
        answer: {
            a: "C++",
            b: "Fortran",
            c: "JavaScript",
            d: "COBOL"
        },
        correctAnswer: "b"
    },
    {
        question: "Who did not cofound Microsoft?",
        answer: {
            a: "Steve Jobs",
            b: "Bill Gates",
            c: "Paul Allen"
        },
        correctAnswer: "a"
    }
];

function buildQuiz() {
    //variable to store the HTML output
    const output = [];

    //for rach question
    questions.forEach((currentQuestion, questionNumber) => {
        //variable to store  the list of possible answers
        const answers = [];

        //and for each available answer
        for (letter in currentQuestion.answers) {
            answers.push(
                `<label>
                <input type = "radio" name = "question${questionNumber}" value="${letter}" >
                ${letter} :
                 ${currentQuestion.answers[letter]}
                    </label>`
            );
        }
        //add this question and its answers to the output
        output.push(
            `<div class="question">${currentQuestion.question}</div>
            <div class="answers">${answers.join('')}</div>`
        );
    }
    );
    quizContainer.innerHTML = output.join('');
}
function showResults() {
    //gather answer containers from the quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;
    questions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    if (userAnswer === currentQuestion.correctAnswer) {
        numCorrect++;
    }




});
resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}
buildQuiz();
submitButton.addEventListener('click', showResults);

    

function showResults() {

}
buildQuiz();

submitButton.addEventListener('click', showResults);
















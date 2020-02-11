(function () {
    document.getElementById('submit').addEventListener("click", function (e) {
        document.getElementById("container").innerHTML = "Done!";
        clearInterval(timer)
    });

    var timer;
    const display = document.querySelector('#realSeconds');
    function timer() {
        var totalSecond = 75;
        timer = setInterval(function () {
            totalSecond--;
            display.textContent = totalSecond;
            // if(userAnswer !== currentQuestion.correctAnswer){
            //     totalSecond -= 10;
            if (totalSecond < 0) {
                document.getElementById("container").innerHTML = "Done!";
                clearInterval(timer)
            }

        }, 1000);

    }
   
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
                `<div class="slide">
                <div class="question">${currentQuestion.question}</div>
                <div class="answers">${answers.join("")}</div>
                </div>`
            );
        }
        );
        quizContainer.innerHTML = output.join('');
        timer();
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
        resultsContainer.innerHTML = `${numCorrect} out of ${questions.length}`;
    }

    function showSlide(n) {

    }

    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const startButton = document.getElementById("start");
    const questions = [
        {
            question: "Who invented javaScript?",
            answers: {
                a: "Bill Gates",
                b: "Steve Jobs",
                c: "Brendan Eich"
            },
            correctAnswer: "c"
        },
        {
            question: "Which one is not a front end language?",
            answers: {
                a: "JavaScript",
                b: "HTML",
                c: "Java",
                d: "CSS"
            },
            correctAnswer: "c"
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
            answers: {
                a: "C++",
                b: "Fortran",
                c: "JavaScript",
                d: "COBOL"
            },
            correctAnswer: "b"
        },
        {
            question: "Who did not cofound Microsoft?",
            answers: {
                a: "Steve Jobs",
                b: "Bill Gates",
                c: "Paul Allen"
            },
            correctAnswer: "a"
        }
    ];

    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
    showSlide(currentSlide);
    startButton.addEventListener('click', buildQuiz);
    submitButton.addEventListener('click', showResults);


})();

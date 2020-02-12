(function () {

    const display = document.querySelector('#realSeconds');
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const startButton = document.getElementById("start");

    var questionIndex = 0;
    var timer;
    let numCorrect = 0;

    const questions = [
        {
            question: "Who invented javaScript?",
            answers: [
                "Bill Gates",
                "Steve Jobs",
                "Brendan Eich"
            ],
            correctAnswer: "Brendan Eich"
        },
        {
            question: "Which one is not a front end language?",
            answers: [
                "JavaScript",
                "HTML",
                "Java",
                "CSS"
            ],
            correctAnswer: "Java"
        },
        {
            question: "Which tool can you use to ensure code quality?",
            answers: [
                "Angular",
                "jQuery",
                "RequireJS",
                "ESLint"
            ],
            correctAnswer: "ESLint"
        },
        {
            question: "Which programming language is the oldest?",
            answers: [
                "C++",
                "Fortran",
                "JavaScript",
                "COBOL"
            ],
            correctAnswer: "Fortran"
        },
        {
            question: "Who did not cofound Microsoft?",
            answers: [
                "Steve Jobs",
                "Bill Gates",
                "Paul Allen"
            ],
            correctAnswer: "Steve Jobs"
        }
    ];
    submitButton.addEventListener("click", function (e) {
        document.getElementById("container").innerHTML = "Done!";
        clearInterval(timer)

    });

    var answers = document.querySelector("#answers");
    answers.addEventListener("click", function (e) {
        if (!e.target.matches("button")) return;
        var answer = e.target.textContent
        console.log(answer);

        checkAnswer(answer);



    });

    function checkAnswer(answer) {
        if (answer === questions[questionIndex].correctAnswer) {

            numCorrect++
            questionIndex++

            buildQuiz();

        } else {
            questionIndex++

            buildQuiz();
        }
    }

    function timer() {
        var totalSecond = 75;
        timer = setInterval(function () {
            totalSecond--;
            display.textContent = totalSecond;

            if (totalSecond < 0) {
                document.getElementById("container").innerHTML = "Done!";
                clearInterval(timer)
                showResults();
            }

        }, 1000);

    }

    function buildQuiz() {
        if (questionIndex >= questions.length) {

            showResults();
        } else {
            //variable to store the HTML output
            const output = [];
            const currentQuestion = questions[questionIndex];

            answers.innerHTML = "";
            document.getElementById("question").textContent = currentQuestion.question;

            currentQuestion.answers.forEach(function (answer) {
                var btn = document.createElement("button");
                btn.textContent = answer;

                document.getElementById("answers").append(btn);
            })
        }
    }
    function showResults() {
        clearInterval(timer);


        document.getElementById("question").innerText = "";
        document.getElementById("answers").innerHTML = "";

        resultsContainer.innerHTML = `${numCorrect} out of ${questions.length}`;
    }

    startButton.addEventListener('click', function () {
        timer();
        buildQuiz();
    });
    submitButton.addEventListener('click', showResults);
})();

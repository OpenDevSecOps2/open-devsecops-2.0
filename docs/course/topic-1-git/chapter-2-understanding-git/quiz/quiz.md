---
layout: custom
title: Chapter 2 Quiz
grand_parent: Topic 1 - Git
parent: Chapter 2 - Git Fundamentals
nav_order: 2
---

<div id="git-quiz">
    <style>
        #git-quiz {
            font-family: "Inter", sans-serif;
            text-align: center;
            margin: 0;
            padding: 0;
            color: white;
        }
        #git-quiz .main-container {
            display: flex;
            width: 100%;
            min-height: 100vh;
        }
        #git-quiz .quiz-container {
            background: radial-gradient(#CECECE, #7253ed);
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            flex: 3;
            margin: 20px;
            position: relative;
        }
        #git-quiz .sidebar {
            flex: 1;
            background-color: #f5f5f5;
            padding: 20px;
            border-radius: 10px;
            margin: 20px;
            color: #333;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        #git-quiz .question-status {
            display: flex;
            flex-direction: column;
            gap: 10px;
            flex-grow: 1;
        }
        #git-quiz .sidebar h2 {
            text-align: left;
            margin-bottom: 20px;
            font-size: 18px;
            color: #7253ed;
        }
        #git-quiz .status-item {
            padding: 20px;
            border-radius: 5px;
            text-align: center;
            font-weight: bold;
        }
        #git-quiz .status-item.correct {
            background-color: #BEE6B7;
            color: #147638;
        }
        #git-quiz .status-item.incorrect {
            background-color: #FFDEDE;
            color: #EF4444;
        }
        #git-quiz .status-item.pending {
            background-color: #f0f0f0;
            color: #666;
        }
        #git-quiz .start-quiz {
            text-align: center;
            padding: 40px 20px;
        }
        #git-quiz .start-quiz h1 {
            padding-top: 175px;
        }
        #git-quiz .start-btn {
            padding: 12px 30px;
            background-color: #ffffff;
            color: #7253ed;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 18px;
            margin-top: 20px;
            font-weight: bold;
        }
        #git-quiz .start-btn:hover {
            background-color: #f0f0f0;
        }
        #git-quiz .question {
            font-size: 24px;
            margin: 50px 0 25px 0;
        }
        #git-quiz .options {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-bottom: 20px;
        }
        #git-quiz button {
            padding: 10px;
            background-color: #315EEB;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
        }
        #git-quiz button:hover {
            background-color: #1046e9;
        }
        #git-quiz .option-btn {
            padding: 20px;
            text-align: left;
            background-color: white;
            color: black;
            border: 1px solid #ddd;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
        }
        #git-quiz .option-btn:hover {
            background-color: #f0f0f0;
        }
        #git-quiz .option-btn.selected {
            background-color: #CFC3FF;
        }
        #git-quiz .option-btn.correct {
            background-color: #BEE6B7;
            color: #147638;
        }
        #git-quiz .option-btn.incorrect {
            background-color: #FFDEDE;
            color: #EF4444;
        }
        #git-quiz .progress {
            position: absolute;
            top: 20px;
            right: 20px;
            font-weight: bold;
            background-color: rgba(255, 255, 255, 0.7);
            padding: 5px 10px;
            border-radius: 5px;
            color: #333;
        }
        #git-quiz .result-header {
            font-size: 28px;
            margin-bottom: 20px;
            margin-top: 50px;
            color: white;
        }
        #git-quiz .result {
            font-size: 24px;
            margin-top: 175px;
            margin-bottom: 20px;
            font-weight: bold;
        }
        #git-quiz .feedback {
            margin: 15px 0;
            font-size: 24px;
            font-weight: bold;
            min-height: 24px;
        }
        #git-quiz .hidden {
            display: none;
        }
        #git-quiz #next-btn, #git-quiz #dash-btn {
            width: 100%;
            padding: 15px;
            margin-top: 20px;
            font-size: 18px;
            font-weight: bold;
            background-color: #315EEB;
            color: white;
        }
        #git-quiz #next-btn:hover {
            background-color: #1E4BD6;
        }
        #git-quiz .progress-container {
            width: 100%;
            height: 8px;
            background-color: #e0e0e0;
            border-radius: 4px;
            margin-bottom: 20px;
            overflow: hidden;
            margin-top: 20px;
        }
        #git-quiz .progress-bar {
            height: 100%;
            background-color: #7253ed;
            border-radius: 4px;
            transition: width 0.3s ease;
        }
        #git-quiz .progress-text {
            text-align: left;
            font-size: 14px;
            color: #7253ed;
            margin-bottom: 5px;
        }
    </style>
    <div class="main-container">
        <div class="quiz-container">
            <div id="start-quiz" class="start-quiz">
                <h1>Chapter 2: Git Fundamentals</h1>
                <button id="start-btn" class="start-btn">Start Quiz</button>
            </div>
            <div id="quiz-screen" class="hidden">
                <div id="quiz">
                    <div class="question" id="question"></div>
                    <div class="options" id="options"></div>
                    <div class="feedback" id="feedback"></div>
                    <div class="progress" id="progress"></div>
                </div>
                <div id="result" class="hidden">
                    <h2 class="result-header">Quiz Results</h2>
                    <div class="result" id="score"></div>
                </div>
            </div>
        </div>
        <div id="sidebar" class="sidebar hidden">
            <div class="progress-text" id="progress-text">0% Complete</div>
            <div class="progress-container">
                <div class="progress-bar" id="progress-bar"></div>
            </div>
            <!-- <h2>Completed Questions</h2> -->
            <div class="question-status" id="question-status"></div>
            <button id="next-btn" class="hidden">Next Question</button>
            <button id="dash-btn" class="hidden">Back to Dashboard</button>
        </div>
    </div>

<script>
    const questions = [
      {
        question: "What is a repository in Git?",
        options: [
            "A tool that helps developers communicate with each other", 
            "A central location where files for a specific project are stored and managed", 
            "A place where developers store backup copies of their work", 
            "A location on a developer's local machine to edit files"
        ],
        correctAnswer: 1
      },
      {
        question: "What command is used to check the status of changes in your working directory?",
        options: [
            "git log", 
            "git add", 
            "git status", 
            "git push"
        ],
        correctAnswer: 2
      },
      {
        question: "What is the purpose of the staging area in Git?",
        options: [
            "It stores the final version of your project files", 
            "It holds changes that are ready to be committed to the repository", 
            "It shows the history of your commits", 
            "It is where you keep your backup files"
        ],
        correctAnswer: 1
      }
    ];

    let currentQuestion = 0;
    let score = 0;
    let selectedOption = null;
    let answerChecked = false;
    let questionResults = Array(questions.length).fill(null);

    const startScreen = document.getElementById('start-quiz');
    const quizScreen = document.getElementById('quiz-screen');
    const sidebar = document.getElementById('sidebar');
    const startButton = document.getElementById('start-btn');
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const feedbackElement = document.getElementById('feedback');
    const nextButton = document.getElementById('next-btn');
    const dashboardButton = document.getElementById('dash-btn');
    const progressElement = document.getElementById('progress');
    const resultElement = document.getElementById('result');
    const scoreElement = document.getElementById('score');
    const questionStatusElement = document.getElementById('question-status');
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');

    function startQuiz() {
        startScreen.classList.add('hidden');
        quizScreen.classList.remove('hidden');
        sidebar.classList.remove('hidden');
        initializeQuestionStatus();
        updateProgressBar();
        loadQuestion();
    }

    function initializeQuestionStatus() {
        questionStatusElement.innerHTML = '';
        questions.forEach((_, index) => {
            const statusItem = document.createElement('div');
            statusItem.className = 'status-item pending';
            statusItem.textContent = `Question ${index + 1}`;
            statusItem.id = `status-${index}`;
            questionStatusElement.appendChild(statusItem);
        });
    }

    function updateProgressBar() {
        const answeredQuestions = questionResults.filter(result => result !== null).length;
        const progressPercentage = (answeredQuestions / questions.length) * 100;
        progressBar.style.width = `${progressPercentage}%`;
        progressText.textContent = `${Math.round(progressPercentage)}% Complete`;
    }

    function updateQuestionStatus(questionIndex, isCorrect) {
        const statusItem = document.getElementById(`status-${questionIndex}`);
        statusItem.classList.remove('pending');
        if (isCorrect) {
            statusItem.classList.add('correct');
            statusItem.textContent = `✓ Question ${questionIndex + 1}`;
        } else {
            statusItem.classList.add('incorrect');
            statusItem.textContent = `✗ Question ${questionIndex + 1}`;
        }
        questionResults[questionIndex] = isCorrect;
        updateProgressBar();
    }

    function loadQuestion() {
        answerChecked = false;
        const question = questions[currentQuestion];
        questionElement.textContent = question.question;
        feedbackElement.textContent = '';
        
        optionsElement.innerHTML = '';
        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.textContent = option;
            button.className = 'option-btn';
            button.addEventListener('click', () => selectOption(index));
            optionsElement.appendChild(button);
        });
        
        if (currentQuestion === questions.length - 1) {
            nextButton.textContent = 'See Results';
        } else {
            nextButton.textContent = 'Next Question';
        }
        
        nextButton.classList.add('hidden');
        dashboardButton.classList.add('hidden')
        progressElement.textContent = `Question ${currentQuestion + 1}/${questions.length}`;
    }

    function selectOption(index) {
        if (answerChecked) return;
        
        const options = document.querySelectorAll('#git-quiz .option-btn');
        const correctIndex = questions[currentQuestion].correctAnswer;
        
        options[index].classList.add('selected');
        selectedOption = index;
        
        const isCorrect = (index === correctIndex);
        
        if (isCorrect) {
            feedbackElement.textContent = "Correct!";
            feedbackElement.style.color = "#147638";
            options[correctIndex].classList.add('correct');
            score++;
        } else {
            feedbackElement.textContent = "Incorrect!";
            feedbackElement.style.color = "#EF4444";
            options[index].classList.add('incorrect');
        }
        
        updateQuestionStatus(currentQuestion, isCorrect);
        
        answerChecked = true;
        nextButton.classList.remove('hidden');
    }

    function nextQuestion() {
        currentQuestion++;
        
        if (currentQuestion < questions.length) {
            loadQuestion();
        } else {
            showResult();
        }
    }

    function showResult() {
        document.getElementById('quiz').style.display = 'none';
        resultElement.classList.remove('hidden');
        nextButton.classList.add('hidden')
        dashboardButton.classList.remove('hidden')
        scoreElement.textContent = `Your score: ${score} out of ${questions.length}`;
        updateProgressBar();

        dashboardButton.addEventListener('click', function() {
        window.location.href = "../index";
    });
    }

    startButton.addEventListener('click', startQuiz);
    nextButton.addEventListener('click', nextQuestion);
  </script>
</div>
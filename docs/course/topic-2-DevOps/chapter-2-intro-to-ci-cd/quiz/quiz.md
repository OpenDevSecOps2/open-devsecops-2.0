---
layout: custom
title: Chapter 2 Quiz 📝
grand_parent: Topic 2 - DevOps
parent: Chapter 2 - Intro to CI/CD
nav_order: 2
---

<div id="quiz">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">    
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js"></script>
    <style>
        #quiz {
            font-family: "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif;
            line-height: 1.6;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            color: black;
        }

        #quiz header {
            text-align: center;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid #eee;
        }

        #quiz .chapter-name {
            font-size: 30px;
            font-weight: bold;
            text-align: left;
        }

        #quiz .container {
            background-color: #f9f9f9;
            border-radius: 8px;
            padding: 2px 20px;
            margin-bottom: 20px;
            border: 2px solid lightgray;
        }

        #quiz .quiz-info {
            justify-content: space-between;
            margin-bottom: 20px;
            font-weight: bold;
        }

        #quiz .btn {
            font-size: 16px;
            display: inline-block;
            background-color: #315EEB;
            color: white;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
            margin-right: 10px;
            border: none;
            cursor: pointer;
        }

        #quiz .btn:hover {
            background-color: #1046e9;
        }

        #quiz .return-link {
            color: #315EEB;
            text-decoration: none;
        }

        #quiz .return-link:hover {
            text-decoration: underline;
        }

        #quiz .actions {
            text-align: center;
            margin-top: 30px;
        }

        #quiz p + ul, h3 + ul {
            margin-top: -15px;
        }

        #quiz h2 {
            font-size: 20px;
        }

        #quiz #quiz-container {
            display: none;
        }

        #quiz .progress-container {
            width: 100%;
            background-color: #e4e4e4;
            border-radius: 10px;
            margin: 20px 0 40px;
        }

        #quiz .progress-bar {
            height: 10px;
            background-color: #7253ed;
            border-radius: 9px;
            transition: width 0.3s ease;
        }

        #quiz .question-container {
            margin-bottom: 20px;
        }

        #quiz .options {
            margin: 15px 0;
        }

        #quiz .option {
            margin: 10px 0;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
            cursor: pointer;
        }

        #quiz .option:hover {
            background-color: #f5f5f5;
        }

        #quiz .option.disabled {
            cursor: not-allowed;
            opacity: 0.7;
        }

        #quiz .option.selected {
            background-color: #e0e0e0;
        }

        #quiz .quiz-btn, .return-btn {
            width: 160px;
            background-color: #315EEB;
            color: white;
            border: none;
            padding: 10px 15px;
            text-align: center;
            display: inline-block;
            font-size: 16px;
            margin: 10px 2px;
            cursor: pointer;
            border-radius: 5px;
        }

        #quiz .return-btn {
            background-color: white;
            color: #315EEB;
            box-shadow: inset 0 0 0 2px #315EEB;
        }

        #quiz .quiz-btn:hover {
            background-color: #1046e9;
        }

        #quiz .return-btn:hover {
            text-decoration: underline;
        }

        #quiz .feedback-correct {
            background-color: #e7f9eb;
            padding: 0 20px;
            border-radius: 5px;
            border: 1px solid #54b56b;
            margin: 25px 0;
        }

        #quiz .feedback-incorrect {
            background-color: #fff4f4;
            padding: 0 20px;
            border-radius: 5px;
            border: 1px solid #df7d87;
            margin: 25px 0;
        }

        #quiz .hidden {
            display: none;
        }

        #quiz .quiz-complete {
            text-align: center;
        }
        
        #quiz #areas-for-review {
            text-align: left;
            background-color: #fef7ed;
            border-radius: 8px;
            border: 1px solid #ebcfa8;
            margin-bottom: 20px;
        }
        
        #quiz .review-section h3 {
            margin-bottom: 5px;
        }

        #quiz .review-item {
            text-align: left;
            margin-bottom: 15px;
            padding: 15px;
            border-radius: 5px;
        }

        #quiz .review-item.correct-review {
            background-color: #e7f9eb;
            border: 1px solid #54b56b;
        }

        #quiz .review-item.incorrect-review {
            background-color: #fff4f4;
            border: 1px solid #df7d87;
        }

        #quiz .review-question {
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 8px;
        }

        #quiz .user-answer {
            color: #333;
            margin-left: 25px;
        }

        #quiz .option-letter {
            font-weight: bold;
            margin-right: 8px;
        }
        
        #quiz .score-container {
            display: flex;
            align-items: center;
            justify-content: left;
            background-color: #f9f9f9;
            border-radius: 8px;
            padding: 10px 20px;
            margin: 20px 0;
            border: 2px solid lightgray;
        }

        #quiz .score-circle {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            background-color: #315EEB;
            color: white;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            margin-right: 15px;
        }
        
        #quiz .score-display {
            display: flex;
            align-items: baseline;
            justify-content: center;
        }

        #quiz .score-numerator {
            font-size: 32px;
            font-weight: bold;
            line-height: 1;
        }

        #quiz .score-divider {
            font-size: 24px;
            margin: 0 2px;
            line-height: 1;
        }

        #quiz .score-denominator {
            font-size: 20px;
            line-height: 1;
        }

        #quiz .completion-message {
            text-align: left;
            margin-left: 20px;
            <!-- flex-grow: 1; -->
            <!-- justify-content: left; -->
        }
    </style>

    <div id="intro-page">
        <header>
            <div class="chapter-name">Chapter 2 - Introduction to CI/CD</div>
        </header>
        
        <div class="container">
            <p>This quiz covers the key concepts from Chapter 2 - Introduction to CI/CD</p>
            <p>You'll be tested on:</p>
            <ul>
                <li>The meaning and goals of CI/CD</li>
                <li>Differences between CI, CD, and DevOps</li>
                <li>The CI/CD lifecycle and key practices</li>
                <li>Benefits such as automation, rapid feedback, and reduced deployment risk</li>
            </ul>
        </div>

        <div class="quiz-info">
            <div>Number of questions: 3</div>
            <div>Estimated time: 4-6 minutes</div>
        </div>
        
        <div class="container">
            <h3>Instructions</h3>
            <ul>
                <li>Select the best answer for each multiple-choice question</li>
                <li>You'll receive immediate feedback after answering</li>
                <li>At the end, you'll see a summary of your results</li>
            </ul>
        </div>
        
        <div class="actions">
            <button id="start-quiz-btn" class="btn">Start Quiz</button>
            <a href="../index" class="return-link">Return to Chapter</a>
        </div>
    </div>
    
    <div id="quiz-container">
        <h3 style="font-weight: normal;" id="question-counter">Question 1 of 7</h3>
        <div class="progress-container">
            <div id="progress-bar" class="progress-bar"></div>
        </div>
        
        <div id="question-container" class="question-container"></div>
        
        <div id="options-container" class="options"></div>
        
        <button id="submit-btn" class="quiz-btn hidden">Submit Answer</button>
        
        <div id="feedback-container"></div>
        
        <button id="next-btn" class="quiz-btn hidden">Next Question</button>
    </div>
    
    <div id="quiz-complete" class="quiz-complete hidden">
        <div class="chapter-name">Quiz Completed!</div>
        
        <div class="score-container">
            <div class="score-circle">
                <div class="score-display">
                    <span class="score-numerator" id="score">0</span>
                    <span class="score-divider">/</span>
                    <span class="score-denominator" id="total-questions">7</span>
                </div>
                <div style="font-weight: normal;">correct</div>
            </div>
            <div class="completion-message">
                <h2 style="font-size: 24px; margin-top: 5px"></h2>
                <p></p>
            </div>
        </div>
                
        <h3 style="text-align: left; margin-top: 25px; margin-bottom: 5px;">Areas for Review</h3>
        <div id="areas-for-review">
            <ul style="margin-top: 10px; margin-left: 20px" id="review-list"></ul>
        </div>
        
        <div class="review-section">
            <h3 style="text-align: left;">Question Review</h3>
            <div id="question-review"></div>
        </div>
        
        <div>
            <button id="return-chapter" class="return-btn" onclick="window.location.href='../index'">Return to Chapter</button>
            <button id="next-chapter" class="quiz-btn" onclick="window.location.href='../../chapter-3-containerization/index'">Next Chapter</button>
        </div>
    </div>

    <script type='module'>
        import { auth, db } from '../../../../../assets/js/firebase.js';
        import { ref, update } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";
        import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

        const quizData = [
            {
                question: "What does CI/CD stand for?",
                options: [
                    "Central Integration and Central Deployment",
                    "Cloud Infrastructure and Centralized Deployment",
                    "Continuous Integration and Continuous Delivery",
                    "Collaborative Integration and Collaborative Development"
                ],
                explanations: [
                    "CI/CD stands for Continuous Integration and Continuous Delivery, not Central Integration.",
                    "While cloud infrastructure is important, it is unrelated to the CI/CD acronym.",
                    "CI/CD is a DevOps practice focused on continuously integrating and delivering code changes reliably.",
                    "Collaboration is important but not what CI/CD directly stands for."
                ],
                correctAnswer: 2
            },
            {
                question: "What is the main purpose of Continuous Integration (CI)?",
                options: [
                    "Building infrastructure automatically",
                    "Automating testing to ensure code compatibility",
                    "Automating code deployment to production",
                    "Managing communication between developers and customers"
                ],
                explanations: [
                    "Infrastructure as Code (IaC) handles that, not CI directly.",
                    "CI focuses on testing code automatically to identify and resolve integration issues early.",
                    "That's the purpose of Continuous Delivery (CD), not CI.",
                    "That's broader DevOps work, not CI specifically."
                ],
                correctAnswer: 1
            },
            {
                question: "What is a key benefit of Continuous Delivery (CD)?",
                options: [
                    "It prevents developers from pushing code quickly",
                    "It automates deployment processes to minimize risks",
                    "It slows down software updates to ensure extra caution",
                    "It eliminates the need for infrastructure"
                ],
                explanations: [
                    "CD accelerates pushing code safely, not prevents it.",
                    "CD ensures code can be reliably deployed with minimal human intervention, reducing deployment risks.",
                    "CD speeds up updates while still maintaining reliability.",
                    "Infrastructure is still needed for any deployment."
                ],
                correctAnswer: 1
            },
            {
                question: "How is DevOps different from CI/CD?",
                options: [
                    "DevOps only happens after CI/CD pipelines are built",
                    "DevOps eliminates the need for operations teams",
                    "DevOps encompasses culture and automation beyond just integration and delivery",
                    "DevOps focuses only on testing while CI/CD focuses on operations"
                ],
                explanations: [
                    "DevOps practices are continuous, not something that happens afterward.",
                    "DevOps strengthens collaboration with operations, not removes them.",
                    "DevOps is the overall framework that includes CI/CD, collaboration, automation, and feedback.",
                    "DevOps is broader, involving culture, collaboration, and automation across the lifecycle."
                ],
                correctAnswer: 2
            },
            {
                question: "What is a key method used in DevOps?",
                options: [
                    "Manual testing and deployment of code",
                    "Increasing the number of manual release meetings",
                    "Limiting developer access to production environments",
                    "Infrastructure as Code (IaC) for managing infrastructure"
                ],
                explanations: [
                    "DevOps emphasizes automation to avoid manual errors.",
                    "DevOps tries to streamline and automate releases, not slow them down with manual steps.",
                    "While access management is important, the core methods focus on automation and collaboration.",
                    "IaC allows teams to manage and provision infrastructure automatically through code."
                ],
                correctAnswer: 3
            }
        ];

        let currentQuestion = 0;
        let score = 0;
        let userAnswers = [];
        let selectedOption = null;
        let answerSubmitted = false;

        const introPage = document.getElementById('intro-page');
        const startQuizBtn = document.getElementById('start-quiz-btn');
        const questionContainer = document.getElementById('question-container');
        const optionsContainer = document.getElementById('options-container');
        const submitBtn = document.getElementById('submit-btn');
        const nextBtn = document.getElementById('next-btn');
        const feedbackContainer = document.getElementById('feedback-container');
        const questionCounter = document.getElementById('question-counter');
        const progressBar = document.getElementById('progress-bar');
        const quizContainer = document.getElementById('quiz-container');
        const quizComplete = document.getElementById('quiz-complete');
        const scoreDisplay = document.getElementById('score');
        const totalQuestionsDisplay = document.getElementById('total-questions');
        const reviewList = document.getElementById('review-list');
        const questionReview = document.getElementById('question-review');
        const returnChapterBtn = document.getElementById('return-chapter');
        const nextChapterBtn = document.getElementById('next-chapter');
        const quizInfo = document.querySelector('.quiz-info');
        
        quizInfo.innerHTML = `
            <div>Number of questions: ${quizData.length}</div>
            <div>Estimated time: ${Math.round(quizData.length * 0.75)}-${Math.ceil(quizData.length * 1.25)} minutes</div>
        `;

        startQuizBtn.addEventListener('click', () => {
            introPage.style.display = 'none';
            quizContainer.style.display = 'block';
            initQuiz();
        });

        function initQuiz() {
            showQuestion();
            totalQuestionsDisplay.textContent = quizData.length;
        }

        function showQuestion() {
            answerSubmitted = false;
            const question = quizData[currentQuestion];
            questionContainer.innerHTML = `<h3>${question.question}</h3>`;
            
            optionsContainer.innerHTML = '';
            const optionLetters = ['A', 'B', 'C', 'D'];
            question.options.forEach((option, index) => {
                const optionElement = document.createElement('div');
                optionElement.className = 'option';
                optionElement.innerHTML = `<span class="option-letter">${optionLetters[index]}.</span> ${option}`;
                optionElement.dataset.index = index;
                optionElement.addEventListener('click', selectOption);
                optionsContainer.appendChild(optionElement);
            });
            
            questionCounter.textContent = `Question ${currentQuestion + 1} of ${quizData.length}`;
            progressBar.style.width = `${(currentQuestion / quizData.length) * 100}%`;
            
            submitBtn.classList.add('hidden');
            nextBtn.classList.add('hidden');
            feedbackContainer.innerHTML = '';
            
            if (currentQuestion === quizData.length - 1) {
                nextBtn.textContent = 'See Results';
            } else {
                nextBtn.textContent = 'Next Question';
            }
        }

        function selectOption(e) {
            if (answerSubmitted) return;
            
            document.querySelectorAll('.option').forEach(option => {
                option.classList.remove('selected');
            });
            
            e.target.classList.add('selected');
            selectedOption = e.target.dataset.index;
            
            submitBtn.classList.remove('hidden');
        }

        submitBtn.addEventListener('click', () => {
            if (selectedOption === null) return;
            
            answerSubmitted = true;
            
            document.querySelectorAll('.option').forEach(option => {
                option.classList.add('disabled');
            });
            
            const question = quizData[currentQuestion];
            const selectedIndex = parseInt(selectedOption);
            const isCorrect = selectedIndex === question.correctAnswer;
            
            userAnswers.push({
                question: question.question,
                userAnswer: question.options[selectedIndex],
                correctAnswer: question.options[question.correctAnswer],
                isCorrect: isCorrect
            });
            
            if (isCorrect) {
                score++;
                launchConfetti(submitBtn);
                showCorrectFeedback();
            } else {
                showIncorrectFeedback();
            }
            progressBar.style.width = `${((currentQuestion + 1) / quizData.length) * 100}%`;

            submitBtn.classList.add('hidden');
            nextBtn.classList.remove('hidden');
        });

        function launchConfetti(button) {
            const rect = button.getBoundingClientRect();
            const x = (rect.left + rect.width/2) / window.innerWidth;
            const y = (rect.top + rect.height/2) / window.innerHeight;
            
            confetti({
                particleCount: 50,
                spread: 50,
                origin: {x, y},
                startVelocity: 20,
                gravity: 0.5,
                ticks: 50,
                colors: ['#315EEB', '#7253ed', '#54b56b'],
            });
        }

        function showCorrectFeedback() {
            const question = quizData[currentQuestion];
            feedbackContainer.innerHTML = `
                <div class="feedback-correct">
                    <p style="color: green; font-size: 18px"><strong><i class="fa-solid fa-circle-check"></i> Correct!</strong></p>
                    <p><strong>You selected:</strong> ${question.options[question.correctAnswer]}</p>
                    <p style="margin-left: 20px">${question.explanations[question.correctAnswer]}</p>
                </div>
            `;
        }

        function showIncorrectFeedback() {
            const question = quizData[currentQuestion];
            feedbackContainer.innerHTML = `
                <div class="feedback-incorrect">
                    <p style="color: red; font-size: 18px"><strong><i class="fa-solid fa-circle-xmark"></i> Incorrect</strong></p>
                    <p><strong>You selected:</strong> ${question.options[selectedOption]}</p>
                    <p style="margin-left: 20px">${question.explanations[selectedOption]}</p>
                    <p><strong style="color: green">Correct answer:</strong> ${question.options[question.correctAnswer]}</p>
                    <p style="margin-left: 20px">${question.explanations[question.correctAnswer]}</p>
                </div>
            `;
        }

        nextBtn.addEventListener('click', () => {
            currentQuestion++;
            
            if (currentQuestion < quizData.length) {
                showQuestion();
                selectedOption = null;
            } else {
                completeQuiz();
            }
        });

        function completeQuiz() {
            quizContainer.style.display = 'none';
            quizComplete.classList.remove('hidden');
            
            scoreDisplay.textContent = score;
            
            const percentage = (score / quizData.length) * 100;
            const quizName = "Intro to CI/CD";
            
            const completionMessage = document.querySelector('.completion-message h2');
            const completionSubtext = document.querySelector('.completion-message p');
            
            if (percentage >= 75) {
                completionMessage.textContent = 'Good job!';
                completionSubtext.innerHTML = `You've completed the ${quizName} quiz`;
            } else {
                completionMessage.textContent = 'Good effort';
                completionSubtext.innerHTML = `
                    <div style="margin-bottom: 8px; color: #666;">Score at least 75% to pass the quiz</div>
                    <a href="../index" class="return-link">Review this chapter</a>
                `;
            }
            
            const incorrectQuestions = userAnswers.filter(answer => !answer.isCorrect);
            if (incorrectQuestions.length > 0) {
                reviewList.innerHTML = incorrectQuestions.map(q => 
                    `<li>${q.question}</li>`
                ).join('');
            } else {
                reviewList.innerHTML = "<li>No areas need review</li>";
            }
            
            questionReview.innerHTML = userAnswers.map((answer, index) => {
                return `
                    <div class="review-item ${answer.isCorrect ? 'correct-review' : 'incorrect-review'}">
                        <div class="review-question">
                            <i class="${answer.isCorrect ? 'fa-solid fa-circle-check' : 'fa-solid fa-circle-xmark'}" style="color: ${answer.isCorrect ? 'green' : 'red'}"></i>
                                Question ${index + 1}: ${answer.question}
                        </div>
                        <div class="user-answer ${answer.isCorrect ? 'correct' : 'incorrect'}">
                            Your answer: ${answer.userAnswer} ${answer.isCorrect ? '' : ''}
                        </div>
                        ${!answer.isCorrect ? `
                            <div style="color: #00ab41; margin-left: 25px">
                                Correct answer: ${answer.correctAnswer}
                            </div>
                        ` : ''}
                    </div>
                `;
            }).join('');

            onAuthStateChanged(auth, (user) => {
                if (user) {
                    const quizRef = ref(db, "users/" + user.uid + "/" + "Intro_to_CI_CD");

                    let status = "Failed";
                    let passed = false
                    if (percentage >= 75) {
                        status = "Passed";
                        passed = true
                    }

                    const today = new Date();
                    const formatted = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;

                    const outcome = score + "/" + quizData.length;

                    update(quizRef, {
                        score: outcome,
                        date: formatted,
                        passed: passed,
                        status: status
                    })
                }
            });
        }
    </script>
</div>
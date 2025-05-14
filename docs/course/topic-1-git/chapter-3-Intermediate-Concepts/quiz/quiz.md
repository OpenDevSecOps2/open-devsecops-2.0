---
layout: custom
title: Chapter 3 Quiz
grand_parent: Topic 1 - Git
parent: Chapter 3 - Git Intermediate Concepts
nav_order: 2
---

<div id="quiz">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">    
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
            <div class="chapter-name">Chapter 3 - Git Intermediate Concepts</div>
        </header>
        
        <div class="container">
            <p>This quiz covers the key concepts from Chapter 3 - Git Intermediate Concepts.</p>
            <p>You'll be tested on:</p>
            <ul>
                <li>Different branching strategies and their purposes</li>
                <li>Types of merges in Git and when to use them</li>
                <li>Core concepts like pull requests, workflows, and rebasing</li>
                <li>Advanced techniques like stashing and squash merging</li>
            </ul>
        </div>

        <div class="quiz-info">
            <div>Number of questions: 7</div>
            <div>Estimated time: 5-7 minutes</div>
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
            <button id="next-chapter" class="quiz-btn" onclick="window.location.href='../../chapter-4-git-best-practices/index'">Next Chapter</button>
        </div>
    </div>

    <script type='module'>
        import { auth, db } from '../../../../../assets/js/firebase.js';
        import { ref, update } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";
        import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

        const quizData = [
            {
                question: "What is the main purpose of feature branching?",
                options: [
                    "To delete old code from the main branch",
                    "To isolate new development work from the main codebase",
                    "To merge all code directly into production",
                    "To backup the project regularly"
                ],
                correctAnswer: 1,
                explanation: "Feature branches allow developers to build features without affecting the main branch."
            },
            {
                question: "When would you typically create a release branch?",
                options: [
                    "When starting a new feature",
                    "When preparing a project for a production release",
                    "When fixing a security vulnerability",
                    "When merging several features at once"
                ],
                correctAnswer: 1,
                explanation: "Release branches allow final adjustments and testing before releasing."
            },
            {
                question: "What is the goal of a hotfix branch?",
                options: [
                    "To add a new feature requested by users",
                    "To quickly address a critical bug in production",
                    "To save uncommitted changes before merging",
                    "To rewrite history into a straight line"
                ],
                correctAnswer: 1,
                explanation: "Hotfix branches are for urgent production bug fixes."
            },
            {
                question: "What happens during a fast-forward merge?",
                options: [
                    "Git creates a new merge commit joining two diverging histories",
                    "The base branch pointer moves forward to match the feature branch without creating a merge commit",
                    "Git combines all commits into one",
                    "Git deletes the feature branch automatically"
                ],
                correctAnswer: 1,
                explanation: "Fast-forward merging simply advances the branch pointer without extra commits."
            },
            {
                question: "What is the purpose of squash merging?",
                options: [
                    "To delete unneeded branches",
                    "To combine all commits from a feature branch into a single clean commit",
                    "To overwrite the main branch",
                    "To fast-track changes into production without review"
                ],
                correctAnswer: 1,
                explanation: "Squash merging produces one clean commit for easier project history."
            },
            {
                question: "What is a pull request (PR) used for?",
                options: [
                    "To notify others about changes and request code review before merging",
                    "To delete an old repository",
                    "To merge branches without any approvals",
                    "To back up local branches"
                ],
                correctAnswer: 0,
                explanation: "PRs allow team members to review and discuss changes before they become part of the main branch."
            },
            {
                question: "What is the purpose of rebasing in Git?",
                options: [
                    "To create a backup of the entire repository",
                    "To rewrite commit history into a linear sequence",
                    "To clone a repository from GitHub",
                    "To merge changes by creating a new commit"
                ],
                correctAnswer: 1,
                explanation: "Rebasing restructures commits to make history cleaner and more straightforward."
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
                explanation: question.explanation,
                isCorrect: isCorrect
            });
            
            if (isCorrect) {
                score++;
                showCorrectFeedback();
            } else {
                showIncorrectFeedback();
            }
            progressBar.style.width = `${((currentQuestion + 1) / quizData.length) * 100}%`;

            submitBtn.classList.add('hidden');
            nextBtn.classList.remove('hidden');
        });

        function showCorrectFeedback() {
            const question = quizData[currentQuestion];
            feedbackContainer.innerHTML = `
                <div class="feedback-correct">
                    <p style="color: green; font-size: 18px"><strong><i class="fa-solid fa-circle-check"></i> Correct!</strong></p>
                    <p><strong>You selected:</strong> ${question.options[question.correctAnswer]}</p>
                    <p style="margin-left: 20px">${question.explanation}</p>
                </div>
            `;
        }

        function showIncorrectFeedback() {
            const question = quizData[currentQuestion];
            feedbackContainer.innerHTML = `
                <div class="feedback-incorrect">
                    <p style="color: red; font-size: 18px"><strong><i class="fa-solid fa-circle-xmark"></i> Incorrect</strong></p>
                    <p><strong>You selected:</strong> ${question.options[selectedOption]}</p>
                    <p style="margin-left: 20px">${question.explanation}</p>
                    <p><strong style="color: green">Correct answer:</strong> ${question.options[question.correctAnswer]}</p>
                    <p style="margin-left: 20px">${question.explanation}</p>
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
            const quizName = "Introduction to Version Control";
            
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
                
                const reviewLink = completionSubtext.querySelector('.return-link');
                reviewLink.addEventListener('click', () => {
                    alert('Returning to chapter for review...');
                });
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
                    const quizRef = ref(db, "users/" + user.uid + "/" + "Git_Intermediate_Concepts");

                    let status = "Failed";
                    let passed = false;
                    if (percentage >= 75) {
                        status = "Passed";
                        passed = true;
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
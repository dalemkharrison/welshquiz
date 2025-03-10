<!-- main.js -->
document.addEventListener("DOMContentLoaded", () => {
  const quizContainer = document.getElementById("quiz-container");
  const restartButton = document.createElement("button");
  restartButton.textContent = "Restart Quiz";
  restartButton.classList.add("quiz-button");
  restartButton.style.display = "none";
  restartButton.onclick = restartQuiz;
  document.body.appendChild(restartButton);

  function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  let currentQuiz = shuffleArray(window.quizQuestions);
  let currentQuestionIndex = 0;
  let score = 0;
  const username = localStorage.getItem('username') || 'User';

  function showQuestion() {
    if (currentQuestionIndex < currentQuiz.length) {
      const question = currentQuiz[currentQuestionIndex];
      quizContainer.innerHTML = `<h2>${question.question}</h2>`;
      question.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("quiz-button");
        button.onclick = () => handleAnswer(index === question.answer);
        quizContainer.appendChild(button);
      });
    } else {
      quizContainer.innerHTML = `<h2>Well done, ${username}! You scored ${score} out of ${currentQuiz.length}!</h2>`;
      restartButton.style.display = "block";
    }
  }

  function handleAnswer(isCorrect) {
    if (isCorrect) {
      score++;
      alert("Correct!");
    } else {
      alert("Incorrect. The correct answer is " + currentQuiz[currentQuestionIndex].options[currentQuiz[currentQuestionIndex].answer]);
    }
    currentQuestionIndex++;
    showQuestion();
  }

  function restartQuiz() {
    currentQuiz = shuffleArray(window.quizQuestions);
    currentQuestionIndex = 0;
    score = 0;
    restartButton.style.display = "none";
    showQuestion();
  }

  showQuestion();
});

function saveName() {
  const username = document.getElementById('username').value;
  localStorage.setItem('username', username);
  alert('Name saved! You can now start the quiz.');
}

// Highlight the active page in navigation
const links = document.querySelectorAll(".nav-link");
links.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});
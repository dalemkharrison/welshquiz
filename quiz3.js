//quiz.js
// Questions Array
window.quizQuestions = [
  {
    question: "cyfrifiadur",
    options: ["computer", "scanner", "keyboard", "printer"],
    answer: 0,
  },


  {
    question: "cyfrinair",
    options: ["monitor", "password", "internet", "mouse"],
    answer: 1,
  },

  {
    question: "bysellfwrdd",
    options: [ "mouse", "printer","keyboard", "webcam"],
    answer: 2,
  },

  {
    question: "argraffydd",
    options: ["monitor", "internet", "printer", "scanner"],
    answer: 2,
  },

  {
    question: "rhyngrwyd",
    options: ["password", "internet", "keyboard", "printer"],
    answer: 1,
  },

  {
    question: "llawrlwytho",
    options: ["update", "restart", "refactor", "download"],
    answer: 3,
  },

  {
    question: "côd",
    options: ["code", "program", "Email", "file"],
    answer: 0,
  },

  {
    question: "e-bost",
    options: ["file", "password",  "online", "Email"],
    answer: 3,
  },

  {
    question: "diweddariad",
    options: ["update",  "back-up", "printer", "keyboard"],
    answer: 0,
  },

  {
    question: "ffeil",
    options: ["code",  "mouse", "fail", "file"],
    answer: 3,
  },
  
  ];

let currentQuestionIndex = 0;
let score = 0;
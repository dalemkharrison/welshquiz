//quiz1.js
// Questions Array
window.quizQuestions = [
  {
    question: "What are the Welsh words for strong password?",
    options: ["sbwriel adref", "cyfrinair cryf", "cefnder cryfach", "caerdydd hardd"],
    answer: 1,
  },


  {
    question: "What is the Welsh word for English?",
    options: ["Sausage", "Snakeskin", "Skegness", "Saesneg"],
    answer: 3,
  },

  {
    question: "What is the Welsh word for computer?",
    options: [ "cyfrifiadur", "cefnder","argraffydd", "Rhino"],
    answer: 0,
  },

  {
    question: "What is the Welsh word for printer?",
    options: ["llenor", "brawd", "argraffydd", "peiriant gwnïo"],
    answer: 2,
  },

  {
    question: "What is the Welsh word for keyboard?",
    options: ["bwrdd syrffio", "bysellfwrdd", "bwrdd gwyn", "gwely a bwrdd"],
    answer: 1,
  },

  {
    question: "What is the Welsh word for mouse?",
    options: ["eliffant", "ceffyl", "gwiwer", "llygoden"],
    answer: 3,
  },

  {
    question: "What is the Welsh word for log-on?",
    options: ["dysgu", "mewngofnodi", "nofio", "sbwriel"],
    answer: 1,
  },

  {
    question: "What is the Welsh word for online?",
    options: ["ar-lein", "llinell ddillad",  "llinellwr", "llorweddol"],
    answer: 0,
  },

  {
    question: "What are the Welsh words for quantum computing?",
    options: ["cefnder quentin",  "naid cwantwm", "cyfrifiadura cwantwm", "cyfrifiadur ffenestri"],
    answer: 2,
  },

  {
    question: "What is the Welsh word for Welsh?",
    options: ["Albanaidd",  "Gwyddelod", "Manaweg", "Cymraeg"],
    answer: 3,
  },
  
  ];

let currentQuestionIndex = 0;
let score = 0;
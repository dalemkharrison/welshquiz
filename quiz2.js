//quiz2.js
// Questions Array
window.quizQuestions = [
  {
    question: "Rydw i eisiau ___________ i gyfrifiadur: I want to log on to a computer",
    options: ["adref", "mewngofnodi", "cryfach", "caerdydd"],
    answer: 1,
  },


  {
    question: "Mae angen i mi greu _________ cryf: I need to create a strong password",
    options: ["ceffyl", "cwpan", "credu", "cyfrinair"],
    answer: 3,
  },

  {
    question: "Mae angen i mi ________ copi o fy CV: I need to print out a copy of my Curriculum Vitae.",
    options: [ "argraffu", "cefnder","nofio", "dysgu"],
    answer: 0,
  },

  {
    question: "Rydw i'n hoffi chwarae gemau ar y _________: I like to play games on the internet.",
    options: ["canolfan", "iechyd", "rhyngrwyd", "rhedeg"],
    answer: 2,
  },

  {
    question: "Mae angen i mi deipio e-bost gan ddefnyddio'r ___________: I need to type an email using the keyboard.",
    options: ["bwrdd syrffio", "bysellfwrdd", "bwrdd gwyn", "gwely a bwrdd"],
    answer: 1,
  },

  {
    question: "Mae angen diweddaru'r __________:The computer needs to be updated.",
    options: ["llygoden", "ceffyl", "gwiwer", "cyfrifiadur"],
    answer: 3,
  },

  {
    question: "Rydw i'n dysgu sut i _____ mewn Python: I am learning how to code in Python.",
    options: ["dysgu", "godio", "nofio", "gopi"],
    answer: 1,
  },

  {
    question: "Rydw i eisiau lawrlwytho _______ o'r rhyngrwyd: I want to download a program from the internet.",
    options: ["rhaglen", "ddillad",  "llinellwr", "llorweddol"],
    answer: 0,
  },

  {
    question: "Mae angen i mi gefnogi fy ________ ar ddisg allanol: I need to back up my files on an external drive.",
    options: ["fford",  "ffilament", "ffeiliau", "ffenestri"],
    answer: 2,
  },

  {
    question: "Nid yw'r ___________ yn gweithio; mae angen i mi ei drwsio: The computer is not working; I need to fix it.",
    options: ["rhyngrwyd",  "bysellfwrdd", "llygoden", "cyfrifiadur"],
    answer: 3,
  },
  
  ];

let currentQuestionIndex = 0;
let score = 0;
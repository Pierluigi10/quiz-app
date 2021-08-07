const container = document.querySelector(".container");
const welcomeBox = document.querySelector(".welcome");
const buttonStart = document.querySelector(".buttonStart");
const questionParagraph = document.querySelector(".question");
const answersContainer = document.querySelector(".answers");
const answers = document.querySelectorAll("answers");
const scoreSpan = document.querySelector("#score");
const buttonNext = document.querySelector(".buttonNext");

//Questions with answers
const questions = [
  {
    question: "What is JavaScript?",
    answers: [
      { text: "der", isAnswer: false },
      { text: "die", isAnswer: false },
      { text: "das", isAnswer: true },
    ],
  },
  {
    question: "2What is JavaScript?",
    answers: [
      { text: "der", isAnswer: false },
      { text: "die", isAnswer: false },
      { text: "das", isAnswer: true },
    ],
  },
  {
    question: "3What is JavaScript?",
    answers: [
      { text: "der", isAnswer: false },
      { text: "die", isAnswer: false },
      { text: "das", isAnswer: true },
    ],
  },
  {
    question: "4What is JavaScript?",
    answers: [
      { text: "der", isAnswer: false },
      { text: "die", isAnswer: false },
      { text: "das", isAnswer: true },
    ],
  },
  {
    question: "5What is JavaScript?",
    answers: [
      { text: "der", isAnswer: false },
      { text: "die", isAnswer: false },
      { text: "das", isAnswer: true },
    ],
  },
];

//first question must be with index =0.
let firstQuestion = 0;
let score = 0;

//button to change page (welcomeBox receives display none and cointainer display grid)
buttonStart.addEventListener("click", () => {
  welcomeBox.style.display = "none";
  container.style.display = "grid";

  //function to bring out one question at a time
  oneQuestion(firstQuestion);
});

const oneQuestion = (index) => {
  const question = questions[firstQuestion];
  questionParagraph.textContent = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.classList.add("answerButton");
    button.append(answer.text);
    answersContainer.appendChild(button);
    button.dataset.isCorrect = answer.isAnswer;
    button.addEventListener("click", checkAnswer);
  });
};

const checkAnswer = (e) => {
  const allAnswers = document.querySelectorAll(".answerButton");
  const answerBoolean = e.target.dataset.isCorrect;
  if (answerBoolean == "true") {
    e.target.classList.add("valid");
    score++;
    scoreSpan.textContent = score;
  } else {
    e.target.classList.add("invalid");
  }
  allAnswers.forEach((element) => {
    element.disabled = true;
  });
};

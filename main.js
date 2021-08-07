const container = document.querySelector(".container");
const welcomeBox = document.querySelector(".welcome");
const buttonStart = document.querySelector(".buttonStart");
const questionParagraph = document.querySelector(".question");
const answerContainer = document.querySelector(".answers");
const answers = document.querySelectorAll("answers");
const scoreSpan = document.querySelector("#score");
const buttonNext = document.querySelector(".buttonNext");

buttonStart.addEventListener("click", () => {
  welcomeBox.style.display = "none";
  container.style.display = "grid";
});

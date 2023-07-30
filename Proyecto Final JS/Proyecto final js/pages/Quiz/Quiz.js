import idols from "./Quiz.json";
import "./Quiz.css";
import { randomNumber } from "../../utils";

const template = () => `
  <div id="quiz">
    <button id="startQuiz">Start!</button>
    <div id="finishMessage"></div>
    <div id="containerQuiz">
      <div id="Pregunta">¿Quién es este idol?</div>
      <div id="containerImgRespuestas">
        <img
          id="idolImage"
          src="https://i.imgur.com/i5qiIsD.png"
          alt="idolImage"
        />
        <div id="answers">
          <button id="answer1">Incorrecto</button>
          <button id="answer2">Incorrecto</button>
          <button id="answer3">Incorrecto</button>
        </div>
      </div>
      <div id="Ronda">
        <span id="rounds">Ronda 1</span>
        <span id="fails">0 Fallos</span>
      </div>
    </div>
  </div>
`;

let randomAnswer = 0;
let rounds = 1;
let fails = 0;

const addEventListener = () => {
  const startQuiz = document.getElementById("startQuiz");
  startQuiz.addEventListener("click", (e) => {
    const Quiz = document.getElementById("containerQuiz");
    Quiz.style.display = "flex";
    const startButton = document.getElementById("startQuiz");
    startButton.setAttribute("disabled", true);
    const finishMessage = document.getElementById("finishMessage");
    finishMessage.style.display = "none";
    rounds = 1;
    fails = 0;
    const failsText = document.getElementById("fails");
    failsText.innerHTML = "Fallos " + fails;
    newQuizQuestions();
  });

  const answer1 = document.getElementById("answer1");
  answer1.addEventListener("click", (e) => {
    checkAnswer(1);
  });

  const answer2 = document.getElementById("answer2");
  answer2.addEventListener("click", (e) => {
    checkAnswer(2);
  });

  const answer3 = document.getElementById("answer3");
  answer3.addEventListener("click", (e) => {
    checkAnswer(3);
  });
};

const newQuizQuestions = () => {
  let unselectedIdols = [...idols];
  for (let index = 1; index <= 3; index++) {
    const randomPosition = randomNumber(0, unselectedIdols.length - 1);
    const randomIdol = unselectedIdols[randomPosition];
    unselectedIdols.splice(randomPosition, 1);
    const answer = document.getElementById("answer" + index);
    console.log({ randomIdol });
    answer.innerHTML = randomIdol.idol;
    answer.style.backgroundColor = "white";
    answer.removeAttribute("disabled");
  }

  const randomPosition = randomNumber(0, unselectedIdols.length - 1);
  const randomIdol = unselectedIdols[randomPosition];
  randomAnswer = randomNumber(1, 3);
  const correctAnswer = document.getElementById("answer" + randomAnswer);
  correctAnswer.innerHTML = randomIdol.idol;
  const imgIdol = document.getElementById("idolImage");
  imgIdol.src = randomIdol.img;
  const roundsText = document.getElementById("rounds");
  roundsText.innerHTML = "Ronda " + rounds++;
};

const checkAnswer = (choosenAnswer) => {
  for (let index = 1; index <= 3; index++) {
    const answer = document.getElementById("answer" + index);
    answer.setAttribute("disabled", true);
  }
  const choosenButton = document.getElementById("answer" + choosenAnswer);
  choosenButton.style.backgroundColor = "red";
  const correctButton = document.getElementById("answer" + randomAnswer);
  correctButton.style.backgroundColor = "green";
  const failsText = document.getElementById("fails");
  if (choosenAnswer != randomAnswer) ++fails;
  failsText.innerHTML = "Fallos " + fails;
  if (fails == 3) {
    const Quiz = document.getElementById("containerQuiz");
    Quiz.style.display = "none";
    const startButton = document.getElementById("startQuiz");
    startButton.removeAttribute("disabled");
    const finishMessage = document.getElementById("finishMessage");
    finishMessage.style.display = "flex";
    finishMessage.innerHTML = `Has llegado a la ronda ${
      rounds - 1
    } Pulsa Start para intentarlo de nuevo`;
  } else {
    setTimeout(() => {
      newQuizQuestions();
    }, 2500);
  }
};

const dataService = () => {
  addEventListener();
};

export const PrintQuiz = () => {
  document.querySelector("main").innerHTML = template();
  dataService();
};

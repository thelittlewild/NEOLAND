import idols from "./Quiz.json";
import "./Quiz.css";
import { randomNumber } from "../../utils";

const template = () => `
  <div id="quiz">
  <button id="startQuiz">Start!</button>
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
        <span id="rondas">Ronda 1</span>
        <span id="fallos">0 Fallos</span>
      </div>
    </div>
  </div>
`;

const addEventListener = () => {
  const startQuiz = document.getElementById("startQuiz");
  startQuiz.addEventListener("click", (e) => {
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
var randomAnswer = 0;
const newQuizQuestions = () => {
  for (let index = 1; index <= 3; index++) {
    const randomPosition = randomNumber(0, idols.length - 1);
    const randomIdol = idols[randomPosition];
    const answer = document.getElementById("answer" + index);
    answer.innerHTML = randomIdol.idol;
    answer.style.backgroundColor = "white";
  }

  const randomPosition = randomNumber(0, idols.length - 1);
  const randomIdol = idols[randomPosition];
  randomAnswer = randomNumber(1, 3);
  const correctAnswer = document.getElementById("answer" + randomAnswer);
  correctAnswer.innerHTML = randomIdol.idol;
  correctAnswer.style.backgroundColor = "green";
  const imgIdol = document.getElementById("idolImage");
  imgIdol.src = randomIdol.img;
};

const checkAnswer = (choosenAnswer) => {};

const dataService = () => {
  addEventListener();
};

export const PrintQuiz = () => {
  document.querySelector("main").innerHTML = template();
  dataService();
};

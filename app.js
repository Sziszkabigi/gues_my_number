import { difficultyList } from "./data.js";

const getRandomInt = () => {
  return Math.floor(Math.random() * Math.floor(100));
};

const checkValue =(inputValue, lastTry=" ") => {
  console.log(currentTry);

  if(inputValue === myNumber){
    statusText.innerText = "Win";
  }else if(inputValue < myNumber) {
    statusText.innerText =`${lastTry} Your number is: ${inputValue}. which is less then my number.`;
  }else {
    statusText.innerText =`${lastTry} Your number is ${inputValue}. which is greater then my number!`;
  }
};

const gameOver = () => {

}

let inputValue = 0;
let tryNumber = 10;
let currentTry = 1;

const myNumber = getRandomInt();

const checkBtn = document.querySelector(".input-container button");
const numberInput = document.querySelector(".input-container input");
const navigation = document.querySelector(".nav");
const description = document.querySelector(".js-description");
const startBtn = document.querySelector(".start-btn");
const statusText = document.querySelector(".js-status-text");
const inputContainer = document.querySelector(".input-container");

difficultyList.forEach((elem) => {
  const btn = document.createElement("button");
  btn.innerText = elem.name;
  btn.classList.add(elem.class);
  btn.addEventListener("click", function () {
    description.innerText = elem.description;
    tryNumber = elem.try;
    startBtn.classList.toggle("deactivate-click");
  });
  navigation.appendChild(btn);
});

startBtn.addEventListener("click", function () {

  startBtn.classList.add("hide");
  inputContainer.classList.toggle("deactivate-click")
  navigation.classList.toggle("deactivate-click");
  console.log (myNumber,myNumber);

});

checkBtn.addEventListener("click", function () {
  inputValue = numberInput.value ? parseInt(numberInput.value) : 0;


    if (currentTry < tryNumber) {
     checkValue(inputValue);
  } else  if (currentTry === tryNumber) {

    checkValue(inputValue);
  } else {
    gameOver( );
  }
  numberInput.value = "";
  currentTry++;
});




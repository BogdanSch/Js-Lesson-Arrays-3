"use strict";

const words = {
  apple: "яблуко",
  house: "будинок",
  mouse: "миша",
};

let mistakes = 0;
let correctAnswers = 0;
let mistakenWords = {
  apple: 0,
  house: 0,
  mouse: 0,
};

let tries = +prompt("Введіть вашу кількість спроб: ");
let translationMode = prompt("Виберіть режим перекладу (enUa або uaEn): ");

if (translationMode !== "enUa" && translationMode !== "uaEn") {
  alert("Некоректний режим перекладу. Введіть 'enUa' або 'uaEn'.");
} else {
  mainLoop: for (let i = 0; i < tries; i++) {
    for (const key in words) {
      const word = words[key];
      let input = "";

      if (translationMode === "enUa") {
        input = prompt(`Input translation of ${key}: `);
      } else {
        input = prompt(`Input translation of ${word}: `);
      }
      if (input === "" || isNaN(+input) || input === "!") {
        alert("Exiting...");
        break mainLoop;
      }
      if (translationMode === "enUa") {
        checkWord(input, word, key);
      } else {
        checkWord(input, key, key);
        // if (input === key) {
        //   correctAnswers++;
        //   alert("Correct!");
        // } else {
        //   mistakes++;
        //   mistakenWords[key]++;
        //   alert("Incorrect!");
        // }
        alert(`${key} : ${word}`);
      }
    }
  }
  alert(`Mistakes: ${correctAnswers}, correct ${mistakes}`);
  alert(`Words that you need to practice a bit more ${getMistakenWords()}`);
}
function getMistakenWords() {
  let arr = [];
  for (const key in mistakenWords) {
    if (mistakenWords[key] > 1) arr.push(mistakenWords[key]);
  }
  return arr;
}
function checkWord(input, word, key) {
  if (input === word) {
    correctAnswers++;
    alert("Correct!");
  } else {
    mistakes++;
    mistakenWords[key]++;
    alert("Incorrect!");
  }
}

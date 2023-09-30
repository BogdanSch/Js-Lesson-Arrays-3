"use strict";

const words = {
  apple: "яблуко",
  house: "будинок",
  mouse: "миша",
};

let mistakenWords = {
  apple: 0,
  house: 0,
  mouse: 0,
};

let mistakes = 0;
let correctAnswers = 0;

let tries = +prompt("Введіть вашу кількість спроб: ");
let translationMode = prompt("Виберіть режим перекладу (enUa або uaEn): ");

main(translationMode, words);

function main(translationMode = "enUa", words = []) {
  if (translationMode !== "enUa" && translationMode !== "uaEn") {
    alert("Некоректний режим перекладу. Введіть 'enUa' або 'uaEn'.");
  } else {
    for (let i = 0; i < tries; i++) {
      for (const key in words) {
        const word = words[key];
        let input = "";

        if (translationMode === "enUa") {
          input = prompt(`Введіть значення слова ${key}: `);
        } else {
          input = prompt(`Введіть значення слова ${word}: `);
        }

        if (input === "" || isNaN(+input) || input === "!") {
          alert("Exiting...");
          return;
        }

        if (translationMode === "enUa") {
          checkWord(input, word, key);
        } else {
          checkWord(input, key, key);
        }
      }
    }
    alert(`Mistakes: ${correctAnswers}, correct ${mistakes}`);
    alert(`Words that you need to practice a bit more: ${getMistakenWords()}`);
  }
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
  alert(`${key} : ${word}`);
}

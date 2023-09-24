"use strict";

const words = {
  apple: "яблуко",
  house: "будинок",
  mouse: "миша",
};

let mistakes = 0;
let correctAnswers = 0;
let tries = +prompt("Enter amount of tries you want to do: ");
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
        if (input === word) {
          correctAnswers++;
          alert("Correct!");
        } else {
          mistakes++;
          alert("Incorrect!");
        }
      } else {
        if (input === key) {
          correctAnswers++;
          alert("Correct!");
        } else {
          mistakes++;
          alert("Incorrect!");
        }
        alert(`${key} : ${word}`);
      }
    }   
  }
  alert(`Mistakes: ${correctAnswers}, correct ${mistakes}`);
}

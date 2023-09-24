"use strict";

const words = {
  apple: "яблуко",
  house: "будинок",
  mouse: "миша",
};

let mistakes = 0;
let correctAnswers = 0;
let loops = +prompt("Enter amount of loops you want to do: ");

mainLoop: for (let i = 0; i < loops; i++) {
  for (const key in words) {
    const word = words[key];
    alert(key);
    let input = prompt(`Input translation of ${key}: `);

    if (input === "" || isNaN(input) || input === "!") {
      alert("Exiting...");
      break mainLoop;
    }
    if (input === word) {
      correctAnswers++;
      alert("Correct!");
    } else {
      mistakes++;
      alert("?");
    }
    alert(`${key} : ${word}`);
  }
}

alert(`Mistakes: ${correctAnswers}, correct ${mistakes}`);

"use strict";

let shipLocations = [3, 4, 5];
let sunkLocations = [];
let guess;
let hits = 0;
let guesses = 0;
let isSunk = false;
isAlreadyHit = false;

while (isSunk == false) {
  guess = prompt("Ваш вистріл! (введіть число від 0 до 6):");
  if (guess < 0 || guess > 6) {
    alert("Введіть правильний номер!");
  } else {
    guesses = guesses + 1;
    if (
      guess == shipLocations[0] ||
      shipLocations[1] ||
      guess == shipLocations[2]
    ) {
      for (let i = 0; i < sunkLocations.length; i++) {
        const sunkLocation = sunkLocations[i];
        if (sunkLocation === guess) {
          alert("Вже потопили!");
          isAlreadyHit = true;
        }
      }
      if (isAlreadyHit) {
        isAlreadyHit = false;
        continue;
      }
      alert("Влучення!");
      sunkLocations.push(guess);
      hits = hits + 1;
      if (hits == 3) {
        isSunk = true;
        alert("Ви потопили корабель!");
      }
    } else {
      alert("Промах!");
    }
    if (hits === 3) {
      alert("Ви потопили корабель!");
      isSunk = true;
    }
  }
}
let stats =
  "Ви мали " +
  guesses +
  " спроб, щоб потопити корабель, " +
  "що означає, що загальна точність була " +
  3 / guesses;
alert(stats);

"use strict";

let fieldLength = Math.floor(Math.random() * 7) + 5;
let shipLength = Math.floor(Math.random() * (fieldLength - 2)) + 2;
let shipStart = Math.floor(Math.random() * (fieldLength - shipLength + 1));

let shipLocations = [];
for (let i = 0; i < shipLength; i++) {
  shipLocations.push(shipStart + i);
}

let sunkLocations = [];
let guess;
let hits = 0;
let guesses = 0;
let isSunk = false, isAlreadyHit = false;

while (!isSunk) {
  guess = prompt(`Ваш вистріл! (введіть число від 0 до ${fieldLength}):`);
  if (guess < 0 || guess > fieldLength) {
    alert("Введіть правильний номер!");
  } else {
    guesses++;
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
      hits++;
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

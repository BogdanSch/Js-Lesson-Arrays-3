"use strict";

function fillArray() {
  const symbols = ["X", "O", ""];
  const array = [];

  for (let i = 0; i < 4; i++) {
    const row = [];
    for (let j = 0; j < 4; j++) {
      const randomIndex = Math.floor(Math.random() * symbols.length);
      row.push(symbols[randomIndex]);
    }
    array.push(row);
  }

  return array;
}

function countSymbols(array) {
  let crosses = 0;
  let zeros = 0;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === "X") {
        crosses++;
      } else if (array[i][j] === "O") {
        zeros++;
      }
    }
  }

  return { crosses, zeros };
}

function playGame() {
  const gameArray = fillArray();
  console.log("Масив гри:");
  console.log(gameArray);

  const { crosses, zeros } = countSymbols(gameArray);

  console.log(`\nКількість хрестиків: ${crosses}`);
  console.log(`Кількість нуликів: ${zeros}`);

  if (crosses > zeros) {
    console.log("\nХрестики вийшли більше!");
  } else if (crosses < zeros) {
    console.log("\nНулики вийшли більше!");
  } else {
    console.log("\nХрестики та нулики вийшли рівномірно!");
  }
}

playGame();

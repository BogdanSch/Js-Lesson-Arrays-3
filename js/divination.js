"use strict";

const poetsVerses = {
  "Robert Frost": [
    "The road not taken",
    "Stopping by woods on a snowy evening",
  ],
  "William Shakespeare": [
    "Shall I compare thee to a summer's day?",
    "To be or not to be",
  ],
  "William Wordsworth": ["I wandered lonely as a cloud"],
  "Taras Shevchenko": ["Заповіт", "Катерина"],
  "Lesya Ukrainka": ["Лісова пісня", "Камінний гість"],
};

function getPoetFortune(poetName) {
  const poetVerses = poetsVerses[poetName];
  if (!poetVerses) {
    return "Unknown poet.";
  }
  const randomIndex = Math.floor(Math.random() * poetVerses.length);
  return poetVerses[randomIndex];
}

const poetFortune = getPoetFortune("Taras Shevchenko");
console.log("Your fortune by Taras Shevchenko is:\n" + poetFortune);

"use strict";

let nameParts = ["ни", "буль", "коль",  "то", "ро", "паль", "ми", "ма"];

let numberOfSyllables = +prompt("Введіть кількість складів для клички собаки: ");

if (!isNaN(numberOfSyllables) && numberOfSyllables > 0) {
    let dogName = generateDogName(numberOfSyllables);
    alert(`Кличка песика: ${dogName}`);
} else {
    alert("Введіть коректне число більше нуля.");
}

function generateDogName(syllables) {
    let dogName = "";

    for (let i = 0; i < syllables; i++) {
        let randomIndex = Math.floor(Math.random() * nameParts.length);
        dogName += nameParts[randomIndex];
    }

    return dogName;
}

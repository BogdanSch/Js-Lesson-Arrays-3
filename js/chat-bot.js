"use strict";

const phrases = [
  "Наш менеджер передзвонить Вам найближчим часом!",
  "Уточнити деталі можна за телефоном 123456789",
  "Залишайтеся на зв'язку!",
  "Сьогодні чудова погода!",
  "З Вами дуже приємно спілкуватися!",
];

while (true) {
  let input = prompt("Enter your question: ");
  if (input === "До побачення!") {
    alert("До побачення, радий був поспілкуватися!");
    break;
  } else if (input === "Привіт") {
    alert("Добрий день, чим я можу вам допомогти?");
  } else if (input === "Ти хто?") {
    alert("Я бот Василь!");
  } else {
    const phrase = phrases[Math.floor(Math.random() * phrases.length)];
    alert(phrase);
  }
}

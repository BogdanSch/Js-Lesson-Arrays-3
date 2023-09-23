"use strict";

let en = [
  "monday",
  "tuesday",
  "wendnesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];
let ua = [
  "понеділок",
  "вівторок",
  "середа",
  "четвер",
  "п'ятниця",
  "субота",
  "неділя",
];
let nl = [
  "maandag",
  "dinsdag",
  "woensdag",
  "donderdag",
  "vrijdag",
  "zaterdag",
  "zondag",
];

let dayNumber = +prompt("Введіть число від 1 до 7: ");
let lang = prompt("Введіть мову (ua, en, nl): ");

if (!isNaN(dayNumber)) {
  if (dayNumber >= 1 && dayNumber <= 7) {
    let day = null;

    switch (lang) {
      case "en":
        day = en[dayNumber - 1];
        break;
      case "ua":
        day = ua[dayNumber - 1];
        break;
      case "nl":
        day = nl[dayNumber - 1];
        break;
      default:
        alert("Введіть мову правильно!");
        break;
    }

    if (day) {
      alert(`День тижня: ${day}`);
    }
  } else {
    alert("Введіть число від 1 до 7.");
  }
} else {
  alert("Введіть коректне число.");
}

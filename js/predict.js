"use strict"

let phrases = ["Звучить погано", "Так, це точно варто зробити", "Не вважаю, що це гарна ідея",
               "Може, не сьогодні?", "Комп'ютер говорить: ні!"];

let question = prompt("Задайте питання гадалці");
let randomIndex = Math.floor(Math.random() * phrases.length);
let answer = phrases[randomIndex];
alert(answer);

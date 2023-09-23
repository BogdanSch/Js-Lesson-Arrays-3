"use strict";

let words = [
    ["Сьогодні", "Вчора", "Минулого тижня", "В цьому місяці"],
    ["у Шотландії", "в Австралії", "в Нью-Йорку", "на Марсі"],
    ["зелений крокодил", "червона ракета", "велика торгова корпорація", "маленький хом'ячок"],
    ["Джон", "Мері", "професор Сміт", "ваш сусід"],
    ["зламався телевізор", "запустив ракету", "знайшов скарб", "вчив програмувати"],
    ["З цього вийшла велика пригода", "Тепер всі вражені", "Це дуже смішно", "І це все завдяки ньому"],
    ['Люди сказали: "Привіт!"', 'Газети пишуть про це', 'Всі обговорюють цю подію', 'Це сталося на всіх губах']
];

function getRandomWord(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

function generateNews(numNews) {
    let news = [];

    for (let i = 0; i < numNews; i++) {
        let story = [];
        for (let j = 0; j < words.length; j++) {
            let word = getRandomWord(words[j]);
            story.push(word);
        }
        news.push(story);
    }

    return news;
}

let numNews = +prompt("Enter number of news to generate: ");

if(!isNaN(numNews)){
    let newsStories = generateNews(numNews);

    document.write("<h2>Генератор новин:</h2>");
    for (let story of newsStories) {
        document.write(`<p>${story[0]} ${story[1]} ${story[2]} ${story[3]} ${story[4]}. ${story[5]}. ${story[6]}</p>`);
    }
}


"use strict";

const length = +prompt("Enter length of forecast: ");

if (!isNaN(length)) {
  let temperature = [];

  for (let i = 0; i < length; i++) {
    temperature[i] = Math.floor(Math.random() * 21) - 10;
  }

  let positive = 0,
    negative = 0;

  for (let i = 0; i < temperature.length; i++) {
    if (temperature[i] > 0) {
      positive++;
    } else {
      negative++;
    }
  }

  document.write(`Positive: ${positive} days, negative ${negative} days <br>`);

  let sum = 0;
  for (let i = 0; i < temperature.length; i++) {
    sum += temperature[i];
  }
  let average = sum / temperature.length;
  document.write(`Average temperatureerature: ${average}`);
}

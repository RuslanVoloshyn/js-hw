'use strict';
//Отримання та виведення даних:
const name = prompt('What is your name?');
const age = prompt('What is your age?');
const likesProgramming = confirm('Do you like programming?');
//Обробка та виведення даних
console.log(name, typeof name);
console.log(age, typeof age);
console.log(likesProgramming, typeof likesProgramming);

//Робота з рядками
const greeting = 'Ruslan';
alert(`Привіт ${greeting}`);

//Перетворення типів:
const numericAge = Number(age);
const nextAge = numericAge;
console.log(`${nextAge} + 1`);
//Порівняння значень:
let isAdult = age >= 18;
console.log(isAdult);

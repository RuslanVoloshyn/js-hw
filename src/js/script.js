'use strict';
// Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
for (let i = 20; i <= 30; i += 0.5) {
    console.log(i);
}
// Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
let usd = 27;
for (let dollars = 10; dollars <= 100; dollars += 10) {
    const hryvnias = dollars * usd;
    console.log(dollars + ' доларів = ' + hryvnias + ' гривень');
}
// Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
let N = 90;
for (let i = 1; i <= 100; i++) {
    if (i * i <= N) {
        console.log(i);
    }
}
// Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).
const isSimpleNumber = function (num = 0) {
    if (typeof num !== 'number' || isNaN(num) || !isFinite(num)) return false;

    if (num <= 1) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

console.log(isSimpleNumber(1));
console.log(isSimpleNumber(2));
console.log(isSimpleNumber(3));
console.log(isSimpleNumber(5));
console.log(isSimpleNumber(11));
console.log(isSimpleNumber(20));
// Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь.
// (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).
function isPowerOfThree(num) {
    if (num <= 0) return false;

    while (num % 3 === 0) {
        num /= 3;
    }

    return num === 1;
}

console.log(isPowerOfThree(9));
console.log(isPowerOfThree(81));
console.log(isPowerOfThree(13));

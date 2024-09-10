'use strict';
const numberArr = [
    6, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
    76, -4, 12, -35, 4, 47,
];
//Tack 1
const result = numberArr.reduce(
    (acc, item) => {
        if (item > 0) {
            acc.sum += item;
            acc.qty++;
        }

        return acc;
    },
    { sum: 0, qty: 0 }
);
console.log(result);

//Tack 2
let minimumNumber = numberArr[0];
let indexElementa = 0;

for (let i = 1; i < numberArr.length; i++) {
    if (numberArr[i] < minimumNumber) {
        minimumNumber = numberArr[i];
        indexElementa = i;
    }
}
console.log(`Мінімальне число: ${minimumNumber}`);
console.log(`Індекс мінімального числа: ${indexElementa}`);

//Tack 3
let maximumNumber = numberArr[0];
let indexElementa2 = 0;

for (let i = 1; i < numberArr.length; i++) {
    if (numberArr[i] > maximumNumber) {
        maximumNumber = numberArr[i];
        indexElementa2 = i;
    }
}
console.log(`Максимальне число: ${maximumNumber}`);
console.log(`Індекс максимального числа: ${indexElementa2}`);

//Tack 4
let count = 0;
for (let i = 1; i < numberArr.length; i++) {
    if (numberArr[i] < 0) {
        count++;
    }
}
console.log(`Кількість негативних елементів у масиві: ${count}`);

//Tack 5
let countPositive = 0;
for (let i = 0; i < numberArr.length; i++) {
    if (numberArr[i] > 0 && numberArr[i] % 2 !== 0) {
        countPositive++;
    }
}
console.log(
    `Кількість непарних позитивних елементів у масиві: ${countPositive}`
);

//Tack 6
let countPositive2 = 0;
for (let i = 0; i < numberArr.length; i++) {
    if (numberArr[i] > 0 && numberArr[i] % 2 === 0) {
        countPositive2++;
    }
}
console.log(
    `Кількість парних позитивних елементів у масиві: ${countPositive2}`
);

//Tack 7
let sumPositiveEven = 0;
for (let i = 0; i < numberArr.length; i++) {
    if (numberArr[i] > 0 && numberArr[i] % 2 === 0) {
        sumPositiveEven += numberArr[i];
    }
}
console.log(`Сума парних позитивних елементів у масиві: ${sumPositiveEven}`);

//Tack 8
let sumNegativeEven = 0;
for (let i = 0; i < numberArr.length; i++) {
    if (numberArr[i] > 0 && numberArr[i] % 2 !== 0) {
        sumNegativeEven += numberArr[i];
    }
}
console.log(`Сума непарних позитивних елементів у масиві: ${sumNegativeEven}`);

//Tack 9
let sumPositiveElemena = 1;
for (let i = 0; i < numberArr.length; i++) {
    if (numberArr[i] > 0) {
        sumPositiveElemena *= numberArr[i];
    }
}
console.log(`Добуток позитивних елементів у масиві: ${sumPositiveElemena}`);

//Tack 10
let maxSum = -Infinity;
for (let i = 0; i < numberArr.length; i++) {
    if (numberArr[i] > maxSum) {
        maxSum = numberArr[i];
    }
}
for (let i = 0; i < numberArr.length; i++) {
    if (numberArr[i] !== maxSum) {
        numberArr[i] = 0;
    }
}
console.log(`Масив з найбільшим елементом і обнуленими: ${numberArr}`);

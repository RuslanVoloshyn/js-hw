'use strict';
//Функція для обчислення середнього арифметичного числових елементів масиву
let calcSum = function (array) {
    let sum = 0;
    let count = 0;

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            sum += array[i];
            count++;
        }
    }
    if (count === 0) {
        return 'No numerical elements in the array';
    }
    return sum / count;
};
console.log(calcSum([4, 6, 7]));

// Функція doMath(x, znak, y) для математичних операцій
let doMath = function (x, znak, y) {
    switch (znak) {
        case '+':
            return x + y;
        case '-':
            return x - y;
        case '*':
            return x * y;
        case '/':
            return x / y;
        case '%':
            return x % y;
        case '^':
            return x ** y;
        default:
            return 'does not match any of the predicted values';
    }
};
console.log(doMath(5, '+', 3));
console.log(doMath(10, '-', 2));
console.log(doMath(4, '*', 5));
console.log(doMath(20, '/', 4));
console.log(doMath(10, '%', 3));
console.log(doMath(2, '^', 3));
console.log(doMath(2, '&', 3));

//Функція для заповнення двовимірного масиву даними від користувача
let numberRows = prompt('Enter the number of rows for the main array');
let numberCols = prompt('Enter the number of columns for each row');

let createArray = function (rows, cols) {
    let array = [];
    for (let i = 0; i < rows; i++) {
        let row = [];
        for (let j = 0; j < cols; j++) {
            let value = prompt(`Enter the value for element [${i}, ${j}]`);
            row.push(value);
        }
        array.push(row);
    }
    return array;
};

let resultArray = createArray(numberRows, numberCols);
console.log(resultArray);

// Функція для видалення символів із рядка
function removeCharacters(string, removalArray) {
    let result = '';
    for (let i = 0; i < string.length; i++) {
        let currentChar = string[i];
        if (!removalArray.includes(currentChar)) {
            result += currentChar;
        }
    }

    return result;
}

const str = 'hello junior';
const charsToRemove = ['l', 'r'];
const cleanedString = removeCharacters(str, charsToRemove);

console.log(cleanedString);

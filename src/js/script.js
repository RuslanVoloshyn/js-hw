'use strict';
// Вивести на сторінку в один рядок через кому числа від 10 до 20.
let result = '';
for (let i = 10; i <= 20; i++) {
    if (i < 20) {
        result += i + ', ';
    } else {
        result += i;
    }
}
document.write('Один рядок через кому: ' + result + '<br>');

// Вивести квадрати чисел від 10 до 20.
for (let i = 10; i <= 20; i++) {
    let square = i * i;
    console.log(`Result: ${square}`);
}

// Вивести таблицю множення на 7
for (let i = 1; i <= 10; i++) {
    console.log(`${i} * 7 = ${i * 7}`);
}

// Знайти суму всіх цілих чисел від 1 до 15.
let result1 = 0;
for (let i = 1; i <= 15; i++) {
    result1 += i;
}
console.log('Сума чисел від 1 до 15 дорівнює: ' + result1);
// Знайти добуток усіх цілих чисел від 15 до 35.
let result2 = 1;
for (let i = 15; i <= 35; i++) {
    result2 *= i;
}
console.log('Добуток усіх цілих чисел від 15 до 35:  ' + result2);

// Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
let suma = 1;
let count = 500;
for (let i = 1; i <= count; i++) {
    suma += i;
}
let result3 = suma / count;
console.log(
    'Середнє арифметичне всіх цілих чисел від 1 до 500 дорівнює: ' + result3
);
// Вивести суму лише парних чисел в діапазоні від 30 до 80.
let sum = 0;

for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
        sum += i;
    }
}
console.log('Сума парних чисел від 30 до 80 дорівнює: ' + sum);

// Вивести всі числа в діапазоні від 100 до 200 кратні 3.
for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        console.log('Число кратне 3:  ' + i);
    }
}
// Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
let number = 32;
for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
        document.write('Дільники на натуральне число: ' + i + ' <br> ');
    }
}

// Визначити кількість його парних дільників.
let number1 = 12;
let evenDivisorsCount = 0;

for (let i = 1; i <= number1; i++) {
    if (number1 % i === 0 && i % 2 === 0) {
        evenDivisorsCount++;
    }
}

console.log('Кількість парних дільників: ' + evenDivisorsCount);

// Знайти суму його парних дільників.
let number2 = 22;
let sumEvenDivisors = 0;

for (let i = 1; i <= number2; i++) {
    if (number2 % i === 0 && i % 2 === 0) {
        sumEvenDivisors += i;
    }
}

console.log('Сума парних дільників: ' + sumEvenDivisors);
// Надрукувати повну таблицю множення від 1 до 10.
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        document.write(i + ' * ' + j + ' = ' + i * j + '<br>');
    }
    document.write('<br>');
}

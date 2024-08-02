'use strict';

const operandOne = prompt('Ввдіть перше число');
const operandTwo = prompt('Ввдіть друге число');
// Оскільки prompt() повертає уведені дані рядком потрібно перетворити на числа
const numberOne = Number(operandOne);
const numberTwo = Number(operandTwo);

//Додавання:
console.log(`${numberOne} + ${numberTwo} = ${numberOne + numberTwo}`);
//Віднімання:
console.log(`${numberOne} - ${numberTwo} = ${numberOne - numberTwo}`);
//Множення:
console.log(`${numberOne} * ${numberTwo} = ${numberOne * numberTwo}`);
//Ділення:
console.log(`${numberOne} / ${numberTwo} = ${numberOne / numberTwo}`);

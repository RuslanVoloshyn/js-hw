'use strict';

function exponentiation(base, power) {
    const result = base ** power;
    alert(`Результат: ${base}**${power} = ${result}`);
}

function mainFunction(callback) {
    const base = parseFloat(prompt('Введіть число (база):'));
    const power = parseFloat(prompt('Введіть степінь:'));
    callback(base, power);
}

mainFunction(exponentiation);

function multiplication(base, power) {
    const result = base * power;
    alert(`Результат: ${base}*${power} = ${result}`);
}

function mainFunction1(callback) {
    const base = parseFloat(prompt('Введіть число (база):'));
    const power = parseFloat(prompt('Введіть число на яке бажаєте поділити:'));
    callback(base, power);
}

mainFunction2(multiplication);

function division(base, power) {
    const result = base / power;
    alert(`Результат: ${base}/${power} = ${result}`);
}

function mainFunction2(callback) {
    const base = parseFloat(prompt('Введіть число (база):'));
    const power = parseFloat(prompt('Введіть число на яке бажаєте поможити:'));
    callback(base, power);
}

mainFunction1(division);

function modulo(base, power) {
    const result = base % power;
    alert(`Результат: ${base}%${power} = ${result}`);
}

function mainFunction3(callback) {
    const base = parseFloat(prompt('Введіть число (база):'));
    const power = parseFloat(
        prompt('Введіть число на від якого бажаєте побачити залишок : ')
    );
    callback(base, power);
}

mainFunction3(modulo);

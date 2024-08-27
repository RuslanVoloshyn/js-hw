'use strict';

let padString = function (string, length, char = ' ', isLeft = false) {
    if (typeof string !== 'string') {
        return 'Error: first argument must be a string';
    }

    if (typeof length !== 'number' || Number.isNaN(length)) {
        return 'Error: second argument must be a valid number';
    }

    if (typeof char !== 'string' || char.length !== 1) {
        return 'Error: third argument must be a single character string';
    }

    if (typeof isLeft !== 'boolean') {
        return 'Error: fourth argument must be a boolean';
    }

    if (string.length >= length) {
        return string.substring(0, length);
    }

    while (string.length < length) {
        if (isLeft) {
            string = char + string;
        } else {
            string += char;
        }
    }
    return string;
};
console.log(padString('hello', 8, '*'));
console.log(padString('hello', 6, '*', true));
console.log(padString('hello', 2));

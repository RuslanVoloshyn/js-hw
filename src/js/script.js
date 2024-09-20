'use strict';

function InsertWordInto(str) {
    const words = str.split(' ');
    let position = 0;

    return function (wordToInsert) {
        let result = '';

        if (position === 0) {
            result = `${words[0]} ${wordToInsert} ${words[1]}`;
        } else if (position === 1) {
            result = `${wordToInsert} ${words.join(' ')}`;
        } else if (position === 2) {
            result = `${words.join(' ')} ${wordToInsert}`;
        }

        position = (position + 1) % 3;

        return result;
    };
}

const insert = InsertWordInto('hello world');

console.log(insert('Odesa'));
console.log(insert('Odesa'));
console.log(insert('Odesa'));
console.log(insert('Odesa'));

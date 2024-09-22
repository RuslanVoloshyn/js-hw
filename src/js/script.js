'use strict';

const insertWordInto = (str) => {
    const words = str.split(' ');
    let position = 0;

    return function (wordToInsert) {
        let result = '';

        if (position === 0) {
            const middleIndex = Math.floor(words.length / 2);
            result = [
                ...words.slice(0, middleIndex),
                wordToInsert,
                ...words.slice(middleIndex),
            ].join(' ');
        } else if (position === 1) {
            result = `${wordToInsert} ${words.join(' ')}`;
        } else if (position === 2) {
            result = `${words.join(' ')} ${wordToInsert}`;
        }

        position = (position + 1) % 3;

        return result;
    };
};

const insert = insertWordInto('hello world this is a test');

console.log(insert('Odesa'));
console.log(insert('Odesa'));
console.log(insert('Odesa'));
console.log(insert('Odesa'));

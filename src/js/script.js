'use strict';

function InsertWordInto(str) {
    let lastIndex = 0;
    const words = str.split(' ');

    return function (wordToInsert) {
        if (lastIndex === 0) {
            words.unshift(wordToInsert);
        } else if (lastIndex === words.length) {
            words.push(wordToInsert);
        } else {
            words.splice(lastIndex, 0, wordToInsert);
        }
        lastIndex++;

        if (lastIndex > words.length) lastIndex = 0;

        return words.join(' ');
    };
}

const insert = InsertWordInto('hello world');
console.log(insert('Odesa'));
console.log(insert('Odesa'));
console.log(insert('Odesa'));

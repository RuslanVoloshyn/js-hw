'use strict';

let generateKey = function (length, characters) {
    let key = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        key += characters[randomIndex];
    }
    return key;
};

const characters = 'SHHSSDhwhwhrwhre35343467';
const key = generateKey(21, characters);
console.log(key);

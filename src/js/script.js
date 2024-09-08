'use strict';

let lengthArray = +prompt('Введіть довжину масиву');

let usersArray = [];

for (let i = 0; i < lengthArray; i++) {
    let item = prompt(`Введіть елемент для індексу ${i}:`);
    usersArray.push(item);
}

console.log(`Масив після уведення даних користувачем ${usersArray}`);

usersArray.sort((a, b) => {
    return a - b;
});

console.log(`Масиви після сортоввання: ${usersArray}`);

usersArray.splice(2, 3);
console.log(`Масив після видалення з 2 по 4 елементи: ${usersArray}`);

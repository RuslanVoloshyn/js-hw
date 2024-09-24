'use strict';

const calcFunction = () => {
    let result = 0;
    return function (num) {
        result += num;
        console.log(result);
    };
};

const sum = calcFunction();
console.log(sum(3));
console.log(sum(5));
console.log(sum(20));

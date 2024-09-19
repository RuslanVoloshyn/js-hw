'use strict';
//Task #1
const getFactorial = (number) => {
    if (number === 1) {
        return 1;
    }

    return number * getFactorial(number - 1);
};
console.log(getFactorial(3));

//Task #2
const pow = (num, degree) => {
    if (degree === 0) {
        return 1;
    }

    return num * pow(num, degree - 1);
};
console.log(pow(2, 3));

//Task #3
const addSum = (a, b) => {
    if (b === 0) {
        return a;
    }
    return addSum(a + 1, b - 1);
};
console.log(addSum(3, 5));

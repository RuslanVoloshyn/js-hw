'use strict';

const complexArray = [
    [1, 2, [3.1, 3.2, [3.21, 3.22]], 4],
    [5, [6, [7, [8, 9]]]],
    [[10, 11], 12, 13],
];

const flatArguments = function (arr) {
    if (arguments.length > 1) {
        throw new Error(
            'Function accepts only 1 argument, too much arguments provided'
        );
    }

    const flat = (arr, result = []) => {
        for (const item of arr) {
            if (Array.isArray(item)) {
                flat(item, result);
            } else {
                result.push(item);
            }
        }
        return result;
    };

    return flat(arr);
};

console.log(flatArguments(complexArray));

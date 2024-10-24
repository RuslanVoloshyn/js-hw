'use strict';

function deepFreeze(obj) {
    Object.freeze(obj);

    Object.keys(obj).forEach((key) => {
        const value = obj[key];

        if (
            typeof value === 'object' &&
            value !== null &&
            !Object.isFrozen(value)
        ) {
            deepFreeze(value);
        }
    });

    return obj;
}

let user = {
    data: {
        a: 1,
        b: 2,
        c: 3,
        d: {
            a1: 1,
            b1: 2,
            c1: 3,
            d1: {
                a2: 3,
                b2: 3,
                c2: 3,
            },
        },
    },
};

deepFreeze(user);

user.data.a = 100;
console.log(user.data.a);

'use strict';

Function.prototype.myBind = function (context, ...args) {
    const fn = this;

    return function (...newArgs) {
        context.fn = fn;
        const result = context.fn(...args, ...newArgs);
        delete context.fn;
        return result;
    };
};

const pets = [
    {
        name: 'Sharik',
        age: 2,
        title: 'Dog',
    },
    {
        name: 'Murchik',
        age: 3,
        title: 'Cat',
    },
    {
        name: 'Jon',
        age: 1,
        title: 'Bird',
    },
];

const getPetInfo = function (str) {
    console.log(str);
    console.log(this.name + ' is ' + this.age + ' year(s) old ' + this.title);
    console.log('----');
};

for (const pet of pets) {
    const f = getPetInfo.myBind(pet, 'Hello my dear ' + pet.title);
    f();
}

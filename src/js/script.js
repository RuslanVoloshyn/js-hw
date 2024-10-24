'use strict';

const user = {
    _name: '',
    _age: 0,

    get name() {
        return this._name;
    },

    set name(value) {
        this._name = value;
    },

    get age() {
        return this._age;
    },

    set age(value) {
        if (typeof value === 'number' && value >= 0 && value <= 120) {
            this._age = value;
        } else {
            console.log('Помилка: вік має бути числом від 0 до 120');
        }
    },
};

user.name = 'John';
console.log(user.name);

user.age = 25;
console.log(user.age);

user.age = 125;
console.log(user.age);

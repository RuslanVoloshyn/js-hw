'use strict';

const product = {
    _name: '',
    _price: 0,
    quantity: 10,
};

Object.defineProperty(product, 'name', {
    get() {
        return this._name;
    },
    set(value) {
        if (typeof value === 'string' && value.trim() !== '') {
            this._name = value;
        } else {
            console.error("Помилка: Ім'я має бути непорожнім рядком.");
        }
    },
    enumerable: true,
    configurable: true,
});

Object.defineProperty(product, 'price', {
    get() {
        return this._price;
    },
    set(value) {
        if (typeof value === 'number' && value > 0) {
            this._price = value;
        } else {
            console.error('Помилка: Ціна має бути числом більше 0.');
        }
    },
    enumerable: true,
    configurable: true,
});

Object.defineProperty(product, 'totalValue', {
    get() {
        return this._price * this.quantity;
    },
    enumerable: true,
    configurable: true,
});

product.name = 'Laptop';
console.log(product.name);

product.price = 1000;
console.log(product.price);

console.log(product.totalValue);

product.name = '';
console.log(product.name);

product.price = -500;
console.log(product.price);

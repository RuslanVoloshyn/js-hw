'use strict';

function variableScopeDemo() {
    for (var i = 0; i < 3; i++) {
        var varVariable = 'Я оголошений через var';
        let letVariable = 'Я оголошений через let';
        const constVariable = 'Я оголошений через const';

        console.log(`Всередині циклу (ітерація ${i}):`);
        console.log(`var: ${varVariable}`);
        console.log(`let: ${letVariable}`);
        console.log(`const: ${constVariable}`);
    }
    console.log(`Поза циклом:`);
    console.log(`var поза циклом: ${varVariable}`);
}
variableScopeDemo();

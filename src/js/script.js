'use strict';

const names = document.getElementById('myName');
const info = document.getElementById('focus');

names.addEventListener('focus', () => {
    info.style.display = 'block';
});

names.addEventListener('blur', () => {
    info.style.display = 'none';
});

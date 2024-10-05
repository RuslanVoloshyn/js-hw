'use strict';

const generateElement = (text) => {
    const infoDiv = document.createElement('div');
    infoDiv.id = 'focus-info';
    infoDiv.textContent = text;
    return infoDiv;
};

const insertElementToPage = (element, containerId) => {
    const container = document.getElementById(containerId);
    container.append(element);
};

const infoDiv = generateElement('This is an info div shown on focus.');

const inputField = document.getElementById('myName');

inputField.addEventListener('focus', () => {
    infoDiv.style.display = 'block';
    insertElementToPage(infoDiv, 'dynamic-content');
});

inputField.addEventListener('blur', () => {
    infoDiv.style.display = 'none';
});

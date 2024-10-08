'use strict';

const logListItems = () => {
    const listItems = document.querySelectorAll('#ulId li');
    listItems.forEach((item) => console.log(item.textContent));
};

const logAttributesValues = () => {
    const ulElement = document.querySelector('#ulId');
    const attributesArray = [];
    for (let i = 0; i < ulElement.attributes.length; i++) {
        attributesArray.push(
            ulElement.getAttribute(ulElement.attributes[i].name)
        );
    }
    console.log(attributesArray);
};

const logAttributeNames = () => {
    const ulElement = document.querySelector('#ulId');
    const attributeNamesArray = [];
    for (let i = 0; i < ulElement.attributes.length; i++) {
        attributeNamesArray.push(ulElement.attributes[i].name);
    }
    console.log(attributeNamesArray);
};

const changeLastItemText = (name) => {
    const lastItem = document.querySelector('#ulId li:last-child');
    lastItem.textContent = `Привіт, мене звуть ${name}`;
};

const addAttributeToFirstItem = (name) => {
    const firstItem = document.querySelector('#ulId li:first-child');
    firstItem.setAttribute('data-my-name', name);
};

const removeDogTailAttribute = () => {
    const ulElement = document.querySelector('#ulId');
    if (ulElement.hasAttribute('data-dog-tail')) {
        ulElement.removeAttribute('data-dog-tail');
        console.log('Атрибут data-dog-tail видалено');
    } else {
        console.log('Атрибут data-dog-tail відсутній');
    }
};

logListItems();
logAttributesValues();
logAttributeNames();
changeLastItemText('Ruslan');
addAttributeToFirstItem('Ruslan');
removeDogTailAttribute();

'use strict';

const LIST_TYPE = {
    Ul: 'ul',
    Ol: 'ol',
    Menu: 'menu',
};

const appendElement = (parentElement, elementToAppend) => {
    if (!parentElement || !elementToAppend) return;
    parentElement.appendChild(elementToAppend);
};

const generateList = (listItems, listType = LIST_TYPE.Ul) => {
    if (!Array.isArray(listItems)) {
        throw new Error('List items should be an array');
    }
    if (!listItems.length) {
        throw new Error('List items array is empty');
    }

    const listElement = document.createElement(listType);

    listItems.forEach((item) => {
        const listItemElement = document.createElement('li');

        if (Array.isArray(item)) {
            const nestedList = generateList(item, listType);
            appendElement(listItemElement, nestedList);
        } else {
            listItemElement.textContent = item;
        }

        appendElement(listElement, listItemElement);
    });

    return listElement;
};

const listData = [1, 2, [1.1, 1.2, 1.3], 3];

const result = generateList(listData, LIST_TYPE.Ul);
appendElement(document.body, result);

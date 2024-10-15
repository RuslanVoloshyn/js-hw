'use strict';

const form = document.querySelector('[data-todo-form]');
const titleInput = form.querySelector('input[name="title"]');
const descriptionInput = form.querySelector('textarea[name="description"]');
const createButton = form.querySelector('button');
const taskList = document.createElement('ul'); // Список для завдань

document.body.append(taskList);

const addTask = () => {
    const title = titleInput.value.trim();
    const description = descriptionInput.value.trim();

    if (title === '' || description === '') {
        alert('Please fill in both fields.');
        return;
    }

    const taskItem = document.createElement('li');
    taskItem.innerHTML = `<strong>${title}</strong>: ${description}`;

    taskList.appendChild(taskItem);

    titleInput.value = '';
    descriptionInput.value = '';
};

createButton.addEventListener('click', addTask);

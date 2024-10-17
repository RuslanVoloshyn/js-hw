/* global bootstrap */
'use strict';

const storageKey = 'todoListItems';
let editingTaskIndex = null;

const createTodoItem = ({ title, description }, index) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'col-4 mb-3';

    wrapper.innerHTML = `
        <div class="taskWrapper card">
            <div class="card-body">
                <h5 class="card-title taskHeading">${title}</h5>
                <p class="card-text taskDescription">${description}</p>
                <button class="btn btn-warning edit-btn">Edit</button>
                <button class="btn btn-danger delete-btn">Delete</button>
            </div>
        </div>`;

    wrapper.querySelector('.edit-btn').addEventListener('click', () => {
        openEditModal(index, title, description);
    });

    wrapper.querySelector('.delete-btn').addEventListener('click', () => {
        deleteTodoItem(index);
    });

    return wrapper;
};

const saveData = (data) => {
    const savedData = JSON.parse(localStorage.getItem(storageKey)) || [];
    savedData.unshift(data);
    localStorage.setItem(storageKey, JSON.stringify(savedData));
    return data;
};

const deleteTodoItem = (index) => {
    const savedData = JSON.parse(localStorage.getItem(storageKey));
    savedData.splice(index, 1);
    localStorage.setItem(storageKey, JSON.stringify(savedData));
    renderTodoItems();
};

const openEditModal = (index, title, description) => {
    const editTitleInput = document.getElementById('editTitle');
    const editDescriptionInput = document.getElementById('editDescription');

    editTitleInput.value = title;
    editDescriptionInput.value = description;
    editingTaskIndex = index;

    const editModal = new bootstrap.Modal(document.getElementById('editModal'));
    editModal.show();
};

document.getElementById('saveChanges').addEventListener('click', () => {
    const editTitleInput = document.getElementById('editTitle');
    const editDescriptionInput = document.getElementById('editDescription');

    const savedData = JSON.parse(localStorage.getItem(storageKey));
    savedData[editingTaskIndex] = {
        title: editTitleInput.value,
        description: editDescriptionInput.value,
    };
    localStorage.setItem(storageKey, JSON.stringify(savedData));

    renderTodoItems();

    const editModalInstance = bootstrap.Modal.getInstance(
        document.getElementById('editModal')
    );
    editModalInstance.hide = function () {};
    if (editModalInstance) {
        editModalInstance.hide();
    }
});

const renderTodoItems = () => {
    const todoItemsContainer = document.getElementById('todoItems');
    todoItemsContainer.innerHTML = '';

    const savedData = JSON.parse(localStorage.getItem(storageKey)) || [];
    savedData.forEach((todoItem, index) => {
        const todoItemElement = createTodoItem(todoItem, index);
        todoItemsContainer.appendChild(todoItemElement);
    });
};

const getFormHandlers = (form, handleFormData) => {
    let isFormSubmitDisabled = true;
    const fields = {};

    const init = () => {
        form.querySelectorAll('input, textarea').forEach(({ name }) => {
            fields[name] = false;
        });
    };
    init();

    const submitHandler = (event) => {
        event.preventDefault();
        if (isFormSubmitDisabled) return;

        const inputs = event.target.querySelectorAll('input, textarea');

        const data = Array.from(inputs).reduce((acc, input) => {
            const { name, value } = input;
            acc[name] = value;
            return acc;
        }, {});

        handleFormData({ data, event });
    };

    const inputHandler = ({ target }) => {
        const formSubmitBtn = form.querySelector('button[type=submit]');

        if (target.value.trim().length) {
            if (!fields[target.name]) fields[target.name] = true;
        } else {
            if (fields[target.name]) fields[target.name] = false;
        }

        isFormSubmitDisabled = !Object.values(fields).every((field) => field);

        if (!isFormSubmitDisabled) {
            formSubmitBtn.removeAttribute('disabled');
        } else {
            formSubmitBtn.setAttribute('disabled', '');
        }
    };

    return {
        submitHandler,
        inputHandler,
    };
};

(function () {
    const form = document.querySelector('[data-todo-form]');

    const handleFormData = ({ data, event }) => {
        event.target.reset();
        saveData(data);
        renderTodoItems();
    };

    const { submitHandler, inputHandler } = getFormHandlers(
        form,
        handleFormData
    );

    form.addEventListener('submit', submitHandler);
    form.addEventListener('input', inputHandler);

    document.addEventListener('DOMContentLoaded', renderTodoItems);
})();

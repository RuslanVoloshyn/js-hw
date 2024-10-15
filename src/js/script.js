'use strict';

(function () {
    const form = document.querySelector('[data-todo-form]');
    const todoItemsContainer = document.querySelector('#todoItems');

    const createTodoItem = ({ title, description }) => {
        const wrapper = document.createElement('div');
        wrapper.className = 'col-4';

        wrapper.innerHTML = `
            <div class="taskWrapper">
                <div class="taskHeading">${title}</div>
                <div class="taskDescription">${description}</div>
                <button class="btn btn-sm btn-warning edit-btn">Edit</button>
                <button class="btn btn-sm btn-danger delete-btn">Delete</button>
            </div>`;

        wrapper.querySelector('.edit-btn').addEventListener('click', () => {
            editTodoItem(wrapper, title, description);
        });

        wrapper.querySelector('.delete-btn').addEventListener('click', () => {
            deleteTodoItem(wrapper);
        });

        return wrapper;
    };

    const editTodoItem = (wrapper, title, description) => {
        const titleInput = form.querySelector('input[name="title"]');
        const descriptionInput = form.querySelector(
            'textarea[name="description"]'
        );

        titleInput.value = title;
        descriptionInput.value = description;

        deleteTodoItem(wrapper);
    };

    const deleteTodoItem = (wrapper) => {
        wrapper.remove();
    };

    const getFormHandlers = (form) => {
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

            const data = Array.from(inputs).reduce((acc, { name, value }) => {
                acc[name] = value;
                return acc;
            }, {});

            const todoItemElement = createTodoItem(data);
            todoItemsContainer.prepend(todoItemElement);

            event.target.reset();
        };

        const inputHandler = ({ target }) => {
            const formSubmitBtn = form.querySelector('button[type=submit]');

            if (target.value.trim().length) {
                fields[target.name] = true;
            } else {
                fields[target.name] = false;
            }

            isFormSubmitDisabled = !Object.values(fields).every(Boolean);

            if (!isFormSubmitDisabled) {
                formSubmitBtn.removeAttribute('disabled');
            } else {
                formSubmitBtn.setAttribute('disabled', '');
            }
        };

        return {
            inputHandler,
            submitHandler,
        };
    };

    const { submitHandler, inputHandler } = getFormHandlers(form);

    form.addEventListener('submit', submitHandler);
    form.addEventListener('input', inputHandler);
})();

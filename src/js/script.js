'use strict';

(function () {
    const form = document.querySelector('[data-todo-form]');
    const todoItemsContainer = document.querySelector('#todoItems');

    // Функція для створення елементу завдання
    const createTodoItem = (data) => {
        const { title, description } = data; // Витягаємо title і description з об'єкта data
        const wrapper = document.createElement('div');
        wrapper.className = 'col-4';

        wrapper.innerHTML = `
            <div class="taskWrapper">
                <div class="taskHeading">${title}</div>
                <div class="taskDescription">${description}</div>
            </div>`;

        return wrapper;
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

            const data = Array.from(inputs).reduce((acc, input) => {
                const { name, value } = input;
                acc[name] = value;
                return acc;
            }, {});

            const todoItemElement = createTodoItem(data); // Передаємо об'єкт даних
            todoItemsContainer.prepend(todoItemElement);
            event.target.reset();

            // Скидаємо стани полів після сабміту
            Object.keys(fields).forEach((key) => (fields[key] = false));
            form.querySelector('button[type=submit]').setAttribute(
                'disabled',
                ''
            );
        };

        const inputHandler = ({ target }) => {
            const formSubmitBtn = form.querySelector('button[type=submit]');

            fields[target.name] = target.value.trim().length > 0;

            // Перевіряємо стан кнопки
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

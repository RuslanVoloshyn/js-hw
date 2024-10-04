'use strict';

const handleFocusBlur = (inputId, infoText) => {
    const inputField = document.getElementById('myName');
    const info = document.createElement('div');

    info.id = 'focus-info';

    info.style.display = 'none';

    info.innerHTML = infoText;

    document.body.appendChild(info);

    inputField.addEventListener('focus', () => {
        info.style.display = 'block';
    });

    inputField.addEventListener('blur', () => {
        info.style.display = 'none';
    });
};

handleFocusBlur('myName', 'This is some information');

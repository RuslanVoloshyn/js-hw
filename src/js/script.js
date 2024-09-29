'use strict';

const IMF_FOLDER = './../images/';
const IMG_EXT = '.jpg';

const appendHTNLElement = (parentEl = null, elementToAppend = null) => {
    if (!parentEl || !elementToAppend) return;
    parentEl.append(elementToAppend);
};

const getRandomNumbers = () => {
    const num = Math.floor(Math.random() * 10);
    if (num === 0) return 1;
    return num;
};

const generateImages = (imagesName) => {
    const img = document.createElement('img');
    img.src = `${IMF_FOLDER}${imagesName + IMG_EXT}`;
    img.alt = `${IMF_FOLDER}${imagesName + IMG_EXT}`;
    img.title = `${IMF_FOLDER}${imagesName + IMG_EXT}`;
    return img;
};

const imagesToAppend = generateImages(getRandomNumbers());

appendHTNLElement(document.body, imagesToAppend);

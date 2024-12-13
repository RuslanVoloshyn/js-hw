'use strict';

const cityInput = document.getElementById('cityInput');
const getWeatherBtn = document.getElementById('getWeatherBtn');
const weatherContainer = document.getElementById('weatherContainer');

const fetchWeather = (city) => {
    const apiKey = '5d066958a60d315387d9492393935c19';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`;

    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = () => {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            renderWeather(data);
        } else {
            weatherContainer.innerHTML = `
                <div class="alert alert-danger">
                    Не вдалося отримати дані для міста "${city}". Перевірте правильність назви.
                </div>`;
        }
    };

    xhr.onerror = () => {
        weatherContainer.innerHTML = `
            <div class="alert alert-danger">
                Виникла помилка під час завантаження даних.
            </div>`;
    };

    xhr.send();
};

const renderWeather = (data) => {
    const { name, main, weather, wind } = data;
    const { temp, pressure, humidity } = main;
    const { description, icon } = weather[0];
    const { speed, deg } = wind;

    weatherContainer.innerHTML = `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Погода у місті: ${name}</h5>
                <p class="card-text"><strong>Температура:</strong> ${temp}°C</p>
                <p class="card-text"><strong>Тиск:</strong> ${pressure} hPa</p>
                <p class="card-text"><strong>Вологість:</strong> ${humidity}%</p>
                <p class="card-text"><strong>Опис:</strong> ${description}</p>
                <p class="card-text"><strong>Швидкість вітру:</strong> ${speed} м/с</p>
                <p class="card-text"><strong>Напрям вітру:</strong> ${deg}°</p>
                <img src="http://openweathermap.org/img/w/${icon}.png" alt="Піктограма погоди">
            </div>
        </div>
    `;
};

getWeatherBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (!city) {
        weatherContainer.innerHTML = `
            <div class="alert alert-warning">
                Введіть назву міста.
            </div>`;
        return;
    }
    fetchWeather(city);
});

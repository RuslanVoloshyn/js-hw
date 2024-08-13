"use strict";

// Запитуємо у користувача рік народження
const birthYear = prompt("Введіть ваш рік народження:");
if (!birthYear) {
	alert("Шкода, що Ви не захотіли ввести свою дату народження.");
} else {
	// Запитуємо у користувача місто проживання
	const city = prompt("В якому місті ви живете?");
	if (!city) {
		alert("Шкода, що Ви не захотіли ввести своє місто.");
	} else {
		// Запитуємо у користувача улюблений вид спорту
		const sport = prompt("Який ваш улюблений вид спорту?");
		if (!sport) {
			alert("Шкода, що Ви не захотіли ввести свій улюблений вид спорту.");
		} else {
			// Розрахунок віку користувача
			const currentYear = new Date().getFullYear();
			const age = currentYear - birthYear;

			// Визначення повідомлення про місто
			let cityMessage;
			switch (city.toLowerCase()) {
				case "київ":
					cityMessage = "Ти живеш у столиці України.";
					break;
				case "вашингтон":
					cityMessage = "Ти живеш у столиці США.";
					break;
				case "лондон":
					cityMessage = "Ти живеш у столиці Великобританії.";
					break;
				case "варшава":
					cityMessage = "Ти живеш у столиці Польщі.";
					break;
				default:
					cityMessage = `Ти живеш у місті ${city}.`;
			}

			// Визначення повідомлення про спорт
			let sportMessage;
			switch (sport.toLowerCase()) {
				case "бокс":
					sportMessage = "Круто! Хочеш стати, як Олександр Усик?";
					break;
				case "футбол":
					sportMessage = "Круто! Хочеш стати, як Ліонель Мессі?";
					break;
				case "баскетбол":
					sportMessage = "Круто! Хочеш стати, як Майкл Джордан?";
					break;
				case "теніс":
					sportMessage = "Круто! Хочеш стати, як Роджер Федерер?";
					break;
				default:
					sportMessage = `Цікавий вибір спорту: ${sport}.`;
			}

			// Показуємо результат
			alert(`Вам ${age} років.\n${cityMessage}\n${sportMessage}`);
		}
	}
}

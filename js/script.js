'use strict';

const hours = prompt('Enter the number of hours');
console.log(hours);


if (isNaN(hours)) {
	alert('Please enter a valid number');
} else {
	let numberHours = Number(hours);

	if (numberHours < 0) {
		alert(`you entered a negative number ${numberHours}`);
	} else {
		alert(`you entered a positive number ${numberHours}`);
	}
}

let secondInAMinutes = 60;
console.log(`${secondInAMinutes} second in minutes`);

let minutesInAnHour = 60;
console.log(`${minutesInAnHour} minutes in hours`);

let secondsInAnHour = secondInAMinutes * minutesInAnHour;
console.log(`${secondsInAnHour} seconds in one hour`);

let result = hours * secondsInAnHour;
alert(`${result} seconds in that number of hours`);

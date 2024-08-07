'use strict';
const number1 = prompt('Enter a number one')
const number2 = prompt('Enter a number two')
const number3 = prompt('Enter a number three')

if (isNaN(number1, number2, number3)) {
	alert('Please enter a number')
} else {
	let resultPrompt1 = Number(number1);
	let resultPrompt2 = Number(number2);
	let resultPrompt3 = Number(number3);

	const result = (resultPrompt1 + resultPrompt2 + resultPrompt3) / 3
	alert(`${result} the arithmetic mean of these numbers`)
}

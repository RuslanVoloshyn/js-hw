'use strict';

const myTable = document.getElementById('myTable');
const tbody = document.createElement('tbody');

myTable.append(tbody);

let count = 1;

for (let i = 0; i < 10; i++) {
    const row = document.createElement('tr');

    for (let j = 0; j < 10; j++) {
        const cell = document.createElement('td');
        cell.innerHTML = count;

        count++;

        row.append(cell);
    }

    tbody.append(row);
}

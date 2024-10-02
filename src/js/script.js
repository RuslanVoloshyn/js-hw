'use strict';

const createRow = (cellsInRow) => {
    const row = document.createElement('tr');
    for (let i = 0; i < cellsInRow.length; i++) {
        row.append(cellsInRow[i]);
    }
    return row;
};

const createCell = (content) => {
    const cell = document.createElement('td');
    cell.innerHTML = content;
    return cell;
};

const generateTable = (rows, cols) => {
    const myTable = document.getElementById('myTable');
    const tbody = document.createElement('tbody');
    myTable.append(tbody);

    let count = 1;

    for (let i = 0; i < rows; i++) {
        const cells = [];
        for (let j = 0; j < cols; j++) {
            cells.push(createCell(count));
            count++;
        }
        tbody.append(createRow(cells));
    }
};

generateTable(10, 10);

'use strict';
const removeSymbols = (str, symbolsToRemove = []) => {
    if (typeof str !== 'string') throw new Error('str should be a stying');

    const result = [];

    for (let i = 0; i < str.length; i++) {
        if (symbolsToRemove.includes(str[i])) continue;
        result.push(str[i]);
    }

    return result.join('');
};

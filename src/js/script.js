'use strict';

const MIN_BALANCE = 2000;

// @param arr = array of object with balance and phone numbers
// @param minBalance = number
// @param keys = {balance: 'balance field key', phone: 'balance field key'}
const findPhoneNumbersByMinBalance = (
    arr,
    minBalance = 0,
    keys = {
        balance: 'balance',
        phone: 'phone',
    }
) => {
    if (!Array.isArray(arr)) return [];
    if (typeof minBalance !== 'number') return [];
    const results = [];

    arr.forEach((item) => {
        if (minBalance <= 0) {
            results.push(item[keys.phone]);
            return;
        }

        const normalizedBalance = Number(
            removeSymbols(item[keys.balance], ['$', ','])
        );
        if (normalizedBalance > minBalance) results.push(item[keys.phone]);
    });

    return results;
};

const usersNumber = findPhoneNumbersByMinBalance(users, MIN_BALANCE);
console.log(usersNumber);

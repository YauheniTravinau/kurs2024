const giveMeRightNumbers = (value1, value2, maximum) => {
    if (typeof value1 === 'undefined' || typeof value2 === 'undefined' || typeof maximum === 'undefined') {
        return 'Something wrong!';
    }

    if (value1 === value2 || value1 <= maximum) {
        return 'Success!';
    } else {
        return 'Something wrong!';
    }
};

const result = giveMeRightNumbers(200, 100, 100);
console.log(result);
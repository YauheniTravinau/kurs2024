const giveMeRightNumbers = (value1, value2, maximum) => {
    if (value1 === value2 || value1 <= maximum) {
        return 'Success!';
    } else {
        return 'Something wrong!';
    }
}

const result = giveMeRightNumbers(200, 100, 150);
console.log(result);

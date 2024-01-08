const giveMeRightNumbers = (value1, value2, maximum) => {
    if (value1 === value2 || value1 <= maximum) {
        console.log('Success!');
        return 'Success!';
    } else {
        console.log('Something wrong!');
        return 'Something wrong!';
    }
}
giveMeRightNumbers(200, 100, 100);
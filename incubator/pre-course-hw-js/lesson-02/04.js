const giveMeRightCondition = (value1, value2, maximum) => {
    if (value1 === value2 && value1 <= maximum) {
        console.log('Success!');
        return 'Success!';
    } else {
        console.log('Something wrong!');
        return 'Something wrong!';
    }
}

giveMeRightCondition(100, 200, 100);

const giveMeRightNumbers = (value1, value2, maximum) => {
    if (value1 === value2 || value1 <= maximum) {
        console.log('Something wrong!');
    } else {
        console.log('Success!');
    }
}
giveMeRightNumbers(100, 100, 200)

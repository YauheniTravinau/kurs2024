const numbers = [
    [1, 2, 3, 4, 5],
    [10, 20, 30, 40, 50],
    [100, 200, 300, 400, 500],
];

// Вывод каждой строки массива
numbers.map(row => console.log(row));

// Вывод каждого числа в массиве
numbers.map(row => {
    row.map(number => console.log(number));
});

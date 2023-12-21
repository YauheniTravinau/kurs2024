function isInRange(number) {
    return (number >= 10 && number <= 20) || number === 0 || number === 100;
}

// Пример использования
console.log(isInRange(15)); // Вернет true
console.log(isInRange(5));  // Вернет false
console.log(isInRange(0));  // Вернет true
console.log(isInRange(100)); // Вернет true
console.log(isInRange(25));  // Вернет false

let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};

// Создаем глубокую копию объекта passportMarried
let passportMarried2 = { ...passportMarried, married: true, address: { ...passportMarried.address } };

console.log(passportMarried);
console.log(passportMarried2);

let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

// Создаем глубокую копию объекта passportWithAddress
let newPassportWithAddress = JSON.parse(JSON.stringify(passportWithAddress));

// Меняем значение 'LA' на 'Bobryisk' в city новой копии
newPassportWithAddress.address.city = 'Bobryisk';

// Выводим исходный объект passportWithAddress
console.log(passportWithAddress);

// Выводим измененную глубокую копию newPassportWithAddress
console.log(newPassportWithAddress);

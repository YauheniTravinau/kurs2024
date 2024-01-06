let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

// Создаем глубокую копию объекта passportWithAddress
let newPassport = JSON.parse(JSON.stringify(passportWithAddress));

// Меняем значение в глубокой копии
newPassport.address.city = "Bobryisk";

// Выводим результат в консоль
console.log("Оригинальный паспорт с адресом:", passportWithAddress);
console.log("Новый паспорт с измененным городом:", newPassport);

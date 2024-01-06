let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};

// Создаем глубокую копию объекта passportMarried и добавляем новый ключ
let passportMarried2 = {
    ...passportMarried,
    married: true,
    address: { ...passportMarried.address }
};

// Изменяем значение married в новой копии
passportMarried2.married = true;

// Выводим результат в консоль
console.log("Оригинальный паспорт семейного состояния:", passportMarried);
console.log("Новый паспорт семейного состояния:", passportMarried2);

let passport = {
    name: "Petr",
    surname: "Petrov",
};

// Создаем копию объекта passport
let newPassport = Object.assign({}, passport);

// Меняем имя в новой копии
newPassport.name = "Ivan";

// Выводим результат в консоль
console.log("Оригинальный паспорт:", passport);
console.log("Новый паспорт:", newPassport);

let passport = {
    name: "Petr",
    surname: "Petrov",
};

// Создаем копию объекта passport
let newPassport = Object.assign({}, passport);

// Меняем имя в копии объекта
newPassport.name = "Ivan";

// Выводим исходный объект passport
console.log(passport);

// Выводим измененную копию newPassport
console.log(newPassport);

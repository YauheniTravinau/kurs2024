let passport = {
    name: "Petr",
    surname: "Petrov",
};


let newPassport = { ...passport };
newPassport.name = "Ivan";
console.log("Исходный объект passport:", passport);
console.log("Новый объект newPassport:", newPassport);

let passport = {
    name: "Petr",
    surname: "Petrov",
};

let newPassport = Object.assign({}, passport);
newPassport.name = "Ivan";
console.log(passport);
console.log(newPassport);

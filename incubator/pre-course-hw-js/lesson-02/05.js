let passport = {
    name: "Petr",
    surname: "Petrov",
};

let newPassport = { ...passport };
newPassport.name = "Ivan";
console.log(passport.name);
console.log(newPassport.name);

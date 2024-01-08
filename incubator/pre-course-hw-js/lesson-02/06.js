
function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
}


let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};


let copiedPassport = deepCopy(passportWithAddress);


copiedPassport.address.city = 'Bobryisk';


console.log(passportWithAddress);
console.log(copiedPassport);

let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};
let copiedPassportWithAddress = JSON.parse(JSON.stringify(passportWithAddress));
copiedPassportWithAddress.address.city = 'Bobryisk';
console.log('Исходный объект passportWithAddress:', passportWithAddress);
console.log('Измененный объект copiedPassportWithAddress:', copiedPassportWithAddress);

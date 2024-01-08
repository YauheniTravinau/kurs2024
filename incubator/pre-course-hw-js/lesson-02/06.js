
let copiedPassport = JSON.parse(JSON.stringify(passportWithAddress));

copiedPassport.address.city = 'Bobryisk';
console.log(passportWithAddress);
console.log(copiedPassport);

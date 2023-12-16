for (let i = 1; i <= 10; i++) {
    console.log(i);
}
// Этот код выводит числа от 1 до 10 включительно. Используется цикл for с инициализацией let i = 1;, условием продолжения i <= 10; и инкрементом

let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i]
    console.log(number);
}
// Этот код выводит элементы массива numbers. Цикл начинается с индекса 0 и продолжается до numbers.length - 1.

let objects = [{name: 'Alice'}, {name: 'Bob'}, {name: 'Charlie'}];
for (let i = 0; i < objects.length; i++) {
    const object = objects[i]
    console.log(object.name);
}
// Этот код выводит имена объектов из массива objects. Цикл проходит по каждому объекту в массиве и выводит значение свойства name.
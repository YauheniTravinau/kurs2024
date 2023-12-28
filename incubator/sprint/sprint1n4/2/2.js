document.addEventListener('DOMContentLoaded', () => {

    // Task 1: Get elements by various methods
    let elemById = document.getElementById('elementById');
    console.log(elemById);

    let elemByClass = document.getElementsByClassName('elementByClass');
    console.log(elemByClass);

    let elemByTag = document.getElementsByTagName('div');
    console.log(elemByTag);

    let elemBySelectorId = document.querySelector('#elementById');
    console.log(elemBySelectorId);

    let elemBySelectorClass = document.querySelector('.elementByClass');
    console.log(elemBySelectorClass);

    let elemBySelectorAllStar = document.querySelectorAll('*');
    console.log(elemBySelectorAllStar);

    let elemBySelectorAll = document.querySelectorAll('#elementById, .elementByClass');
    console.log(elemBySelectorAll);

    // Task 2: Buttons
    const button = document.querySelector('button');
    button.addEventListener('click', () => {
        console.log('Кнопка нажата!');
    });

    const button2 = document.querySelector('#button2');
    button2.addEventListener('click', () => {
        console.log('Кнопка 2 нажата!');
    });

    // Task 3: Display Message on Button Click
    const button3 = document.querySelector('#button3');
    const outputButton3 = document.querySelector('#output');

    button3.addEventListener('click', () => {
        const message = document.createElement('p');
        message.textContent = 'Кнопка 3 нажата!';
        outputButton3.appendChild(message);
    });

    // Task 4: Random Number on Button Click
    const button4 = document.querySelector('#button4');
    const outputRandom = document.querySelector('#output-random');

    button4.addEventListener('click', () => {
        const randomNumber = Math.floor(Math.random() * 10) + 1;
        const message = document.createElement('p');
        message.textContent = `Случайное число: ${randomNumber}`;
        outputRandom.appendChild(message);
    });

    // Task 5: Input + Button + Container
    const input = document.getElementById("myInput");
    const addButton = document.getElementById("myButton");
    const container = document.getElementById("container");

    addButton.addEventListener("click", function () {
        const text = input.value;
        const newElement = document.createElement("p");
        newElement.textContent = text;
        container.appendChild(newElement);
        input.value = "";
    });

    // Task 6: Open link in new tab
    const openLinkButton = document.getElementById("openLinkButton");
    openLinkButton.addEventListener('click', function () {
        window.open('https://it-incubator.io/', '_blank');
    });

});

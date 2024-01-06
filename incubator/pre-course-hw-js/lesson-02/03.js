console.log('Something wrong!');
const giveMeRightNumbers = (value1, value2, maximum) => {
    if (value1 === value2 || value1 >= maximum) {
        console.log('Success!');
    } else {
        console.log('Something wrong!');
    }
}

// Замените числа на фактические значения
giveMeRightNumbers(5, 5, 10);

// Ваш тестовый код для проверки вывода в консоль
local_cypress_1.cy.stub(console, 'log').as('consoleLog');
new Function(this.studentCode)();
local_cypress_1.cy.get('@consoleLog').should('be.calledOnce');

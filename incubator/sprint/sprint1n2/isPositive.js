const isPositive = (number) => {
    return number > 0;
}

// Пример использования
console.log(isPositive(5)); // Вернет true
console.log(isPositive(-3)); // Вернет false

const giveMeResult = (dayOfWeek) => {
    if (dayOfWeek === "Saturday" || dayOfWeek === "Sunday") {
        dayOfWeek = "dayOff";
    } else {
        dayOfWeek = "weekday";
    }

    switch (dayOfWeek) {
        case "weekday":
            console.log("Будний день");
            break;

        case "dayOff":
            console.log("Выходной день");
            break;

        default:
            console.log("Некорректное значение дня недели");
    }
}

// Пример использования
giveMeResult("Monday"); // Выведет "Будний день"
giveMeResult("Sunday"); // Выведет "Выходной день"
giveMeResult("InvalidDay"); // Выведет "Некорректное значение дня недели"

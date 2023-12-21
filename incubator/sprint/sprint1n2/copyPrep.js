let prep = {
    name: "Igor",
    sizes: {
        height: 177,
        weight: 80
    }
};

function copyPrep(originalObj) {
    // Создаем новый объект с помощью spread оператора
    const copiedObj = { ...originalObj };

    // Создаем глубокую копию для вложенного объекта sizes
    copiedObj.sizes = { ...originalObj.sizes };

    // Добавляем новое свойство IsMarried: true
    copiedObj.IsMarried = true;

    return copiedObj;
}

// Пример использования
let newPrep = copyPrep(prep);

// Проверка результатов
console.log(prep);
console.log(newPrep);

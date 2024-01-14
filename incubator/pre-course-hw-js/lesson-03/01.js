const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

function createColorString() {
    const germanColors = colors.filter(color => color === "черный" || color === "красный" || color === "желтый");
    return germanColors.join('-');
}

console.log(createColorString());

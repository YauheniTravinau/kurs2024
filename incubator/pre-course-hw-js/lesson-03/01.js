const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

function createColorString() {
    const germanFlagColors = colors.filter(color => color === "черный" || color === "красный" || color === "желтый");
    return germanFlagColors.join('-');
}

console.log(createColorString());

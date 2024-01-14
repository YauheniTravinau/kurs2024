const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

function createColorsString(colors) {
    return (colors.filter(color => color === "черный" || color === "красный" || color === "желтый")).join("-");
}

console.log(createColorsString(colors));

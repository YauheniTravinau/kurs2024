const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

function createColorString() {
    const germanyColors = ["черный", "красный", "желтый"];
    return colors.filter(color => germanyColors.includes(color)).join('-');
}

console.log(createColorString());

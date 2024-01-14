const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

function createColorString() {
    return colors.filter(color => ["черный", "красный", "желтый"].includes(color)).join("-");
}

console.log(createColorString());

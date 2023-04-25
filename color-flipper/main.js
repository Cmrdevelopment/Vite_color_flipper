import './style.css'

const color_Palette = {
  '#28262C': 'Raisin Black',
  '#998FC7': 'Blue Bell',
  '#D4C2FC': 'Lavender Blue',
  '#F9F5FF': 'Magnolia',
  '#14248A': 'Resolution Blue'
}

Object.keys(color_Palette).forEach(color => {
  const option = document.createElement("option");
  option.value = color;
  option.innerText = color_Palette[color];
});

const addOptionsToColorPicker = () => { 
  const colorPicketSelect = document.querySelector("#color-picker");

  Object.keys(color_Palette).forEach((color) => {
    const option = document.createElement("option");
    option.value = color;
    option.innerText = color_Palette[color];

    colorPicketSelect.append(option);
})
}

const addEventListenerToColorPicker = () => {
  const colorPickerSelect = document.querySelector("#color-picker")
  const colorName = document.querySelector("#color-name");
  colorPickerSelect.addEventListener("change", (event) => {
    
    const newColor = event.target.value;

    document.body.style.background = newColor
    colorName.innerText = color_Palette[newColor];
    const colorNameText = `${color_Palette[newColor]} | ${newColor}` 
    colorName.innerText = color_Palette[newColor] ? colorNameText : "¿Quieres cambiar de color?";
  })
}

addOptionsToColorPicker();
addEventListenerToColorPicker();

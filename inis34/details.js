const detailShirt = shirts[sessionStorage.getItem('shirtId')];
const { name, description, price, colors } = detailShirt;
const colorList = Object.keys(detailShirt.colors);

const shirtName = document.getElementById('shirt-name');
const shirtDescription = document.getElementById('shirt-description');
const shirtPrice = document.getElementById('shirt-price');
const shirtImageFront = document.getElementById('shirt-image');
const shirtImageBack = document.getElementById('shirt-image-back');
const colorSelect = document.getElementById('shirt-colors');

shirtName.textContent = name;
shirtDescription.textContent = description;
shirtPrice.textContent = price;
shirtImageFront.src = colors.white.front;
shirtImageBack.src = colors.white.back;

colorList.forEach((color) => {
    const option = document.createElement("input");
    option.type = "radio";
    option.name = "color";
    option.value = color;
    colorSelect.appendChild(option);

    const label = document.createElement("label");
    label.innerHTML = color;
    colorSelect.appendChild(label);

    colorSelect.appendChild(document.createElement("br"));
});;

colorSelect.addEventListener('change', (event) => {
    const selectedColor = event.target.value;
    shirtImageFront.src = detailShirt.colors[selectedColor].front;
    shirtImageBack.src = detailShirt.colors[selectedColor].back;
});

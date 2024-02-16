const generateColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}
// console.log(generateColor());


const updateColor = () => {
    const color = generateColor();
    const colorBox =document.getElementById('colorbox');
    const colorName =document.getElementById('colorCode');

    colorBox.style.backgroundColor = color;
    colorName.innerText=color;
   
}
const copyColorCode = () => {
    const colorCode = document.getElementById('colorCode');
    const inputTag = document.createComment('input');
    document.body.appendChild(inputTag);
    inputTag.value = colorCode.innerText;
    inputTag.select();
    document.execCommand("copy");
    document.body.removeChild(inputTag);

}
document.getElementById('copyButton')

updateColor();

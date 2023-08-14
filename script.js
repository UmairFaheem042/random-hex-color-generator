const generateBtn = document.getElementById('generateBtn');
const colorCode = document.querySelector('.color-code .text');
const colorContainer = document.querySelector('.color-container');
const copyIcon = document.querySelector('.icon')

colorCode.innerText = '#FFFFFF'
colorContainer.style.backgroundColor = '#FFFFFF';

generateBtn.addEventListener('click',()=>{
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    colorCode.innerText = `#${randomColor}`;
    colorContainer.style.backgroundColor = `#${randomColor}`
})

// Copy Color Code
copyIcon.addEventListener('click', ()=>{
        navigator.clipboard.writeText(colorCode.innerText);
})
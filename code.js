import { allColors,darkColors,lightColors} from "./color.js"

console.log('hello')
let Btn = document.querySelector(".Btn")
let color = document.querySelector(".color")
let body = document.querySelector("body")
let dark = document.querySelector(".darkBtn")
let light = document.querySelector(".lightBtn")
let reset = document.querySelector(".resetBtn")
let sBtn = document.querySelector('.sBtn')
let searchInput = document.querySelector('.search input')
// search colors
sBtn.addEventListener("click",()=>{
    let inputVal = searchInput.value;
    color.textContent = rgbColor(inputVal)
    body.style.backgroundColor = color.textContent
})
 

const mathRandom = (n)=>{
    return Math.floor(Math.random()*n);
}
// For Random COlors

Btn.addEventListener("click",()=>{
    let n = allColors.length 
    let ranNum = (mathRandom(n))
    body.style.backgroundColor = allColors[ranNum];
    color.textContent = allColors[ranNum];
})

// for dark cOlors

dark.addEventListener("click",()=>{
    let n = darkColors.length
    let ranNum  = (mathRandom(n))
    body.style.color="white";
    body.style.backgroundColor = darkColors[ranNum]
    color.textContent = darkColors[ranNum];
})
light.addEventListener("click",()=>{
    let n = lightColors.length
    let ranNum  = (mathRandom(n))
    body.style.backgroundColor = lightColors[ranNum]
    body.style.color = "black"
    color.textContent = lightColors[ranNum];
})

reset.addEventListener("click",()=>{
    body.style.backgroundColor = "#1f1f1f"
    if(color.textContent != "something coming soon !") color.textContent = "something coming soon !";
})


//parse color name to rgb
function rgbColor(colorName){
    let cl  = document.createElement('div');
    cl.style.color = colorName
    body.appendChild(cl)
    let rgb = window.getComputedStyle(cl).color;
    body.removeChild(cl)
    return rgb;
}

let btnClick = document.querySelector(".calc-btn");
let btnClear = document.querySelector(".clear");
let ench = document.querySelector(".deatils");
let resultHead = document.querySelector(".result");
let meterToEnch = document.querySelector(".meter-to-ench");
function calc() {
    let calcEnch = ench.value * 0.0254;
    resultHead.textContent = calcEnch; 
}
btnClick.onclick = calc;

function clear() {
    ench.value = "" 
    resultHead.textContent = "0";
}
btnClear.onclick = clear;
// 39.37007874
function toMeter() {
    
}
meterToEnch.onclick = toMeter
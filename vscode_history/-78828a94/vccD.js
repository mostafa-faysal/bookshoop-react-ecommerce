
let btnClick = document.querySelector(".calc-btn");
let btnClear = document.querySelector(".clear");
let ench = document.querySelector(".deatils");
let resultHead = document.querySelector(".result");
let meterToEnch = document.querySelector(".meter-to-ench");
let calcEnch = ench.value * 0.0254;
function calc() {
    // resultHead.textContent = calcEnch; 
    let mode = "toMeter"
    if (mode === "toEnch") {
        resultHead.textContent = calcEnch; 
    }else if( mode === "toMeter")
}
btnClick.onclick = calc;

function clear() {
    ench.value = "" 
    resultHead.textContent = "0";
}
btnClear.onclick = clear;
// 39.37007874
function toMeter() {
calcEnch = ench.value * 39.37007874;
}
meterToEnch.onclick = toMeter
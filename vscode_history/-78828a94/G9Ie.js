
let btnClick = document.querySelector(".calc-btn");
let btnClear = document.querySelector(".clear");
let ench = document.querySelector(".deatils");
let resultHead = document.querySelector(".result");
let meterToEnch = document.querySelector(".meter-to-ench");
let mode = "toEnch"
function calc() {
    // resultHead.textContent = calcEnch; 
    let calcEnch = ench.value * 0.0254;
    let calcMeter = ench.value * 39.37007874 ;
    if (mode === "toEnch") {
        resultHead.textContent = calcEnch + " Meter"; 
    } else if (mode === "toMeter") {
                resultHead.textContent = calcMeter + " inch";
    }
}
function toMeter() {
    if (mode === "toMeter") {
        mode = "toEnch"
        meterToEnch.textContent = "meter to ench";
    } else if (mode === "toEnch") {
        mode = "toMeter"
        meterToEnch.textContent = "ench to meter";
    }
}
function clear() {
    ench.value = "" 
    resultHead.textContent = "0";
}
btnClick.onclick = calc;
meterToEnch.onclick = toMeter
btnClear.onclick = clear;
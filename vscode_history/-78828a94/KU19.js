
let btnClick = document.querySelector(".calc-btn");
let btnClear = document.querySelector(".clear");
let ench = document.querySelector(".deatils");
let resultHead = document.querySelector(".result");
let meterToEnch = document.querySelector(".meter-to-ench");
let mode = "toMeter"
function calc() {
    // resultHead.textContent = calcEnch; 
    let calcEnch = ench.value * 0.0254;
    calcMeter = ench.value * 39.37007874;
    if (mode === "toEnch") {
        resultHead.textContent = calcEnch; 
    } else if (mode === "toMeter") {
                resultHead.textContent = calcMeter;
    }
}

btnClick.onclick = calc;
function clear() {
    ench.value = "" 
    resultHead.textContent = "0";
}
btnClear.onclick = clear;
function toMeter() {
    if (mode === "toMeter") {
        mode = "toEnch"
                mode = "toMeter";
                meterToEnch.textContent = "meter to ench";
    } else if (mode === "toEnch") {
        mode = "toMeter"
        meterToEnch.textContent = "meter to ench"
    }
}
// 39.37007874
meterToEnch.onclick = toMeter
const theme = document.getElementById("theme");
const themeOptions = document.querySelectorAll("input[name='theme-option'");
const display = document.getElementById("display");
const btn0 = document.getElementById("number-0");
const btn1 = document.getElementById("number-1");
const btn2 = document.getElementById("number-2");
const btn3 = document.getElementById("number-3");
const btn4 = document.getElementById("number-4");
const btn5 = document.getElementById("number-5");
const btn6 = document.getElementById("number-6");
const btn7 = document.getElementById("number-7");
const btn8 = document.getElementById("number-8");
const btn9 = document.getElementById("number-9");
const btnDot = document.getElementById("btn-dot");
const btnCross = document.getElementById("btn-cross");
const btnPlus = document.getElementById("btn-plus");
const btnMinor = document.getElementById("btn-minor");
const btnEqual = document.getElementById("btn-equal");
const btnDel = document.getElementById("btn-del");
const btnDivide = document.getElementById("btn-divide");
const btnReset = document.getElementById("btn-reset");

var isOperation = false;
var operation = "";
var firstNumber = 0;
var secondNumber = 0;


themeOptions.forEach((themeOption) => {
    themeOption.addEventListener("change", (ev) => {
        if (!themeOption.checked) {
            return;
        }

        if (themeOption.value === "theme-1") {
            theme.setAttribute("href", "assets/css/theme-1.css");
            localStorage.setItem("theme", "theme1");
        }
        else if (themeOption.value === "theme-2") {
            theme.setAttribute("href", "assets/css/theme-2.css");
            localStorage.setItem("theme", "theme2");
        }
        else if (themeOption.value === "theme-3") {
            theme.setAttribute("href", "assets/css/theme-3.css");
            localStorage.setItem("theme", "theme3");
        }

    });
});
window.addEventListener("load", () => {
    const themValue = localStorage.getItem("theme");
    if (themValue === null) {
        theme.setAttribute("href", "assets/css/theme-1.css");
        document.getElementById("theme-1").checked = true;
        return;
    }

    if (themValue === "theme1") {
        theme.setAttribute("href", "assets/css/theme-1.css");
        document.getElementById("theme-1").checked = true;
    }
    else if (themValue === "theme2") {
        theme.setAttribute("href", "assets/css/theme-2.css");
        document.getElementById("theme-2").checked = true;
    }
    else {
        theme.setAttribute("href", "assets/css/theme-3.css");
        document.getElementById("theme-3").checked = true;
    }
});

const handleNumber0 = (ev) => {
    if (display.value.trim() === "0") {
        return;
    }
    else if (isOperation) {
        display.value = "0";
        isOperation = false;
    }
    else {
        display.value = display.value + "0";
    }

}
const handleNumber1 = (ev) => {
    if (display.value.trim() === "0") {
        display.value = "1";
        return;
    }
    else if (isOperation) {
        display.value = "1";
        isOperation = false;
    }
    else {
        display.value = display.value + "1";
    }
}

const handleNumber2 = (ev) => {
    if (display.value.trim() === "0") {
        display.value = "2";
        return;
    } else if (isOperation) {
        display.value = "2";
        isOperation = false;
    }
    else {
        display.value = display.value + "2";
    }
}

const handleNumber3 = (ev) => {
    if (display.value.trim() === "0") {
        display.value = "3";
        return;
    }
    else if (isOperation) {
        display.value = "3";
        isOperation = false;
    }
    else {
        display.value = display.value + "3";
    }
}
const handleNumber4 = (ev) => {
    if (display.value.trim() === "0") {
        display.value = "4";
        return;
    }
    else if (isOperation) {
        display.value = "4";
        isOperation = false;
    }
    else {
        display.value = display.value + "4";
    }
}
const handleNumber5 = (ev) => {
    if (display.value.trim() === "0") {
        display.value = "5";
        return;
    }
    else if (isOperation) {
        display.value = "5";
        isOperation = false;
    }
    else {
        display.value = display.value + "5";
    }
}
const handleNumber6 = (ev) => {
    if (display.value.trim() === "0") {
        display.value = "6";
        return;
    }
    else if (isOperation) {
        display.value = "6";
        isOperation = false;
    }
    else {
        display.value = display.value + "6";
    }
}
const handleNumber7 = (ev) => {
    if (display.value.trim() === "0") {
        display.value = "7";
        return;
    }
    else if (isOperation) {
        display.value = "7";
        isOperation = false;
    }
    else {
        display.value = display.value + "7";
    }
}
const handleNumber8 = (ev) => {
    if (display.value.trim() === "0") {
        display.value = "8";
        return;
    }
    else if (isOperation) {
        display.value = "8";
        isOperation = false;
    }
    else {
        display.value = display.value + "8";
    }
}
const handleNumber9 = (ev) => {
    if (display.value.trim() === "0") {
        display.value = "9";
        return;
    }
    else if (isOperation) {
        display.value = "9";
        isOperation = false;
    }
    else {
        display.value = display.value + "9";
    }
}

const handleBtnDot = (ev) => {
    if (display.value.includes(".")) {
        return;
    }
    display.value = display.value + ".";
}

const handleBtnDivide = (ev) => {
    isOperation = true;
    operation = "/";

    if (display.value.includes(".")) {
        firstNumber = parseFloat(display.value);
    }
    else {
        firstNumber = parseInt(display.value);
    }
}

const handleBtnCross = (ev) => {
    isOperation = true;
    operation = "x"
    if (display.value.includes(".")) {
        firstNumber = parseFloat(display.value);
    }
    else {
        firstNumber = parseInt(display.value);
    }
}

const handleBtnMinor = (ev) => {
    isOperation = true;
    operation = "-";
    if (display.value.includes(".")) {
        firstNumber = parseFloat(display.value);
    }
    else {
        firstNumber = parseInt(display.value);
    }
}
const handleBtnPlus = (ev) => {
    isOperation = true;
    operation = "+";
    if (display.value.includes(".")) {
        firstNumber = parseFloat(display.value);
    }
    else {
        firstNumber = parseInt(display.value);
    }
}

const handleBtnDel = (ev) => {
    display.value = display.value.slice(0, -1);
    if (display.value.trim() === "") {
        display.value = "0";
    }
}

const handleBtnEqual = (ev) => {
    if (display.value.includes(".")) {
        secondNumber = parseFloat(display.value);
    }
    else {
        secondNumber = parseInt(display.value);
    }

    console.log(`fn ${firstNumber} ${operation} ${secondNumber}`);

    if (firstNumber === secondNumber) {
        isOperation = false;
        operation = "";
        firstNumber = 0;
        secondNumber = 0;
        return;
    }

    let result;
    switch (operation) {
        case "-":
            result = firstNumber - secondNumber;
            break;
        case "+":
            result = firstNumber + secondNumber;
            break;
        case "x":
            result = firstNumber * secondNumber;
            break;
        case "/":
            if (secondNumber === 0) {
                display.value = "Divid by zero error";
                return;
            }
            result = firstNumber / secondNumber;
            break;
    }
    const formattedResult = result.toLocaleString(undefined, {
        maximumFractionDigits: 4
    })
    display.value = formattedResult;
    firstNumber = 0;
    secondNumber = 0;

    isOperation = false;
}

const handleBtnReset = (ev) => {
    isOperation = false;
}


btn0.addEventListener('click', handleNumber0);
btn1.addEventListener('click', handleNumber1);
btn2.addEventListener('click', handleNumber2);
btn3.addEventListener('click', handleNumber3);
btn4.addEventListener('click', handleNumber4);
btn5.addEventListener('click', handleNumber5);
btn6.addEventListener('click', handleNumber6);
btn7.addEventListener('click', handleNumber7);
btn8.addEventListener('click', handleNumber8);
btn9.addEventListener('click', handleNumber9);
btnDot.addEventListener('click', handleBtnDot);
btnDivide.addEventListener('click', handleBtnDivide);
btnCross.addEventListener('click', handleBtnCross);
btnEqual.addEventListener('click', handleBtnEqual);
btnMinor.addEventListener('click', handleBtnMinor);
btnPlus.addEventListener('click', handleBtnPlus);
btnReset.addEventListener('click', handleBtnReset);
btnDel.addEventListener('click', handleBtnDel);

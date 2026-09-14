let num1 = 8
let num2 = 2

document.getElementById("num1").textContent = num1
document.getElementById("num2").textContent = num2


function add() {
    let result = document.getElementById("result")
    let sum = num1 + num2
    result.textContent = "Result: " + sum
}


function subtract() {
    let result = document.getElementById("result")
    let subtraction = num1 - num2
    result.textContent = "Result: " + subtraction
}

function divide() {
    let result = document.getElementById("result")
    let division = num1 / num2
    result.textContent = "Result: " + division
}

function multiply() {
    let result = document.getElementById("result")
    let multiplication = num1 * num2
    result.textContent = "Result: " + multiplication
}
const inputValue = document.getElementById("input-field")
const convertBtn = document.getElementById("convert-btn")
let lengthField = document.querySelector('#result-1')
let volumeField = document.querySelector('#result-2')
let massField = document.querySelector('#result-3')

convertBtn.addEventListener("click", function () {
    const currentInput = Number(inputValue.value)
    let feetValue = (currentInput * 3.281).toFixed(3)
    let metreValue = (currentInput / 3.281).toFixed(3)
    let gallonsValue = (currentInput * 0.264).toFixed(3)
    let litresValue = (currentInput * 3.787).toFixed(3)
    let poundsValue = (currentInput * 2.204).toFixed(3)
    let kilosValue = (currentInput / 2.204).toFixed(3)

    lengthField.textContent += `${currentInput} meters = ${feetValue} feet | ${currentInput} feet = ${metreValue} meters`
    volumeField.textContent += `${currentInput} litres = ${gallonsValue} gallons | ${currentInput} gallons = ${litresValue} litres`
    massField.textContent += `${currentInput} kilos = ${poundsValue} pounds | ${currentInput} pounds = ${kilosValue} kilos`

})
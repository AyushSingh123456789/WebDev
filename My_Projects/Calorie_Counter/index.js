const weightInput = document.getElementById("input-1-value")
const heightInput = document.getElementById("input-2-value")
const ageInput = document.getElementById("input-3-value")
const bulkBtn = document.getElementById("bulk-btn")
const cutBtn = document.getElementById("cut-btn")
const lifeStyle1 = document.getElementById("exercise-quant-1")
const lifeStyle2 = document.getElementById("exercise-quant-2")
const lifeStyle3 = document.getElementById("exercise-quant-3")
const lifeStyle4 = document.getElementById("exercise-quant-4")
const lifeStyle5 = document.getElementById("exercise-quant-5")
const resultField = document.querySelector('.result')
const maleBtn = document.getElementById("male-btn")
const femaleBtn = document.getElementById("female-btn")

let gender = ""
maleBtn.addEventListener("click", function () {
    gender = "male"
})

femaleBtn.addEventListener("click", function () {
    gender = "female"
})

let weeklyActivityFactor = ""
lifeStyle1.addEventListener("click", function () {
    if (gender == "male") {
        let BMR = (10 * Number(weightInput.value) + 6.25 * Number(heightInput.value) - 5 * Number(ageInput.value) + 5)
        weeklyActivityFactor = BMR * 1.2
    }
    else if (gender == "female") {
        BMR = (10 * Number(weightInput.value) + 6.25 * Number(heightInput.value) - 5 * Number(ageInput.value) - 161)
        weeklyActivityFactor = BMR * 1.2
    }
})
lifeStyle2.addEventListener("click", function () {
    if (gender == "male") {
        let BMR = (10 * Number(weightInput.value) + 6.25 * Number(heightInput.value) - 5 * Number(ageInput.value) + 5)
        weeklyActivityFactor = BMR * 1.375
    }
    else if (gender == "female") {
        BMR = (10 * Number(weightInput.value) + 6.25 * Number(heightInput.value) - 5 * Number(ageInput.value) - 161)
        weeklyActivityFactor = BMR * 1.375
    }
})
lifeStyle3.addEventListener("click", function () {
    if (gender == "male") {
        let BMR = (10 * Number(weightInput.value) + 6.25 * Number(heightInput.value) - 5 * Number(ageInput.value) + 5)
        weeklyActivityFactor = BMR * 1.55
    }
    else if (gender == "female") {
        BMR = (10 * Number(weightInput.value) + 6.25 * Number(heightInput.value) - 5 * Number(ageInput.value) - 161)
        weeklyActivityFactor = BMR * 1.55
    }
})
lifeStyle4.addEventListener("click", function () {
    if (gender == "male") {
        let BMR = (10 * Number(weightInput.value) + 6.25 * Number(heightInput.value) - 5 * Number(ageInput.value) + 5)
        weeklyActivityFactor = BMR * 1.725
    }
    else if (gender == "female") {
        BMR = (10 * Number(weightInput.value) + 6.25 * Number(heightInput.value) - 5 * Number(ageInput.value) - 161)
        weeklyActivityFactor = BMR * 1.725
    }
})
lifeStyle5.addEventListener("click", function () {
    if (gender == "male") {
        let BMR = (10 * Number(weightInput.value) + 6.25 * Number(heightInput.value) - 5 * Number(ageInput.value) + 5)
        weeklyActivityFactor = BMR * 1.9
    }
    else if (gender == "female") {
        BMR = (10 * Number(weightInput.value) + 6.25 * Number(heightInput.value) - 5 * Number(ageInput.value) - 161)
        weeklyActivityFactor = BMR * 1.9
    }
})

bulkBtn.addEventListener("click", function () {
    const resultantCalories1 = weeklyActivityFactor + 250
    const resulatantCalories2 = weeklyActivityFactor + 500
    resultField.textContent = `${resultantCalories1.toFixed(2)} - ${resulatantCalories2.toFixed(2)} Calories/Day`
})

cutBtn.addEventListener("click", function () {
    const resultantCalories1 = weeklyActivityFactor - 300
    const resultantCalories2 = weeklyActivityFactor - 500
    resultField.textContent = `${resultantCalories1.toFixed(2)} - ${resultantCalories2.toFixed(2)} Calories/Day`
})
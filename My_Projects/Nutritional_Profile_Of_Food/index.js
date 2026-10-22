const foodName = document.getElementById("food-item-name")
const foodQty = document.getElementById("food-item-qty")
const foodCal = document.getElementById("food-item-cal")
const foodMacros = document.getElementById("food-item-macros")
const foodListView = document.getElementById("whole-list-view")
const resultView = document.getElementById("result-view-area")
const userFoodNameInput = document.getElementById("name-input")
const userFoodQtyInput = document.getElementById("qty-input")
const nameSubmitButton = document.getElementById("name-submit")
const qtySubmitButton = document.getElementById("qty-submit")
const CalcButton = document.getElementById("calculate-btn")

resultView.style.textAlign = "Center"
resultView.style.fontWeight = "Bold"

foodName.textContent = `Name: `
foodQty.textContent = `Qty(g): `
foodCal.textContent = `Calories: `
foodMacros.textContent = `Macros: `

let chosenFoodItem = null
let chosenAmount = 0


const standardNutritionalProfile = ["Oats", "Greek Yogurt", "Peanut Butter", "Apple", "Banana", "Rice", "Roti", "Mushroom", "Paneer", "Soya Chunks", "Maggi Noodles", "Milk", "Black Chickpeas", "Yellow ChickPeas"]

const myNutritionalProfile = [
    {
        FoodItem: "Oats",
        Calories: 385,
        Protein: 13.5,
        Carbs: 68.7,
        Fats: 5.9
    },

    {
        FoodItem: "Greek Yogurt",
        Calories: 97,
        Protein: 9.0,
        Carbs: 4.0,
        Fats: 5.0
    },

    {
        FoodItem: "Peanut Butter",
        Calories: 588,
        Protein: 21.9,
        Carbs: 24.0,
        Fats: 49.5
    },

    {
        FoodItem: "Apple",
        Calories: 52,
        Protein: 0.3,
        Carbs: 13.8,
        Fats: 0.2
    },

    {
        FoodItem: "Banana",
        Calories: 89,
        Protein: 1.1,
        Carbs: 22.8,
        Fats: 0.3
    },

    {
        FoodItem: "Rice",
        Calories: 130,
        Protein: 2.8,
        Carbs: 80.0,
        Fats: 0.6
    },

    {
        FoodItem: "Roti",
        Calories: 264,
        Protein: 8.0,
        Carbs: 55.0,
        Fats: 1.5
    },

    {
        FoodItem: "Mushroom",
        Calories: 24,
        Protein: 3.1,
        Carbs: 3.3,
        Fats: 0.3
    },

    {
        FoodItem: "Paneer",
        Calories: 275,
        Protein: 18,
        Carbs: 1.2,
        Fats: 20
    },
    {
        FoodItem: "Soya Chunks",
        Calories: 345,
        Protein: 52,
        Carbs: 33,
        Fats: 0.5
    },

    {
        FoodItem: "Maggi Noodles",
        Calories: 427,
        Protein: 8,
        Carbs: 63.5,
        Fats: 15.5
    },

    {
        FoodItem: "Milk",
        Calories: 62,
        Protein: 3.2,
        Carbs: 4.8,
        Fats: 3.5
    },

    {
        FoodItem: "Black Chickpeas",
        Calories: 164,
        Protein: 8.9,
        Carbs: 27.0,
        Fats: 2.6
    },
    {
        FoodItem: "Yellow Chickpeas",
        Calories: 369,
        Protein: 22.5,
        Carbs: 58.0,
        Fats: 5
    }

]

function renderCalculation(foodItemName, amount) {
    const calPerUserInput = amount * (foodItemName.Calories / 100)
    const proteinPerUserInput = amount * (foodItemName.Protein / 100)
    const carbsPerUserInput = amount * (foodItemName.Carbs / 100)
    const fatPerUserInput = amount * (foodItemName.Fats / 100)

    foodCal.textContent = `Calories: ${calPerUserInput.toFixed(1)}`
    foodMacros.textContent = `Macros: ${proteinPerUserInput.toFixed(1)}P, ${carbsPerUserInput.toFixed(1)}C, ${fatPerUserInput.toFixed(1)}F`
}

foodListView.addEventListener("click", function () {
    resultView.textContent = standardNutritionalProfile.join(", ")
})

nameSubmitButton.addEventListener("click", function () {
    const userInput = userFoodNameInput.value.trim()
    chosenFoodItem = myNutritionalProfile.find(item => item.FoodItem.toLowerCase() === userInput.toLowerCase())

    if (!chosenFoodItem) {
        resultView.textContent = "Sorry, this item is not in the list."
    }
    else {
        resultView.textContent = ""
    }
})

qtySubmitButton.addEventListener("click", function () {
    chosenAmount = Number(userFoodQtyInput.value)
})

CalcButton.addEventListener("click", function () {
    if (chosenFoodItem && chosenAmount > 0) {
        renderCalculation(chosenFoodItem, chosenAmount)
    }
    else {
        resultView.textContent = `Please submit both, valid food Name and valid food quantity.`
    }
})
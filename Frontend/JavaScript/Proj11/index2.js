import { onStockUpdate } from "./fakeStockAPI.js"

const stockName = document.getElementById("field-name")
const stockSymbol = document.getElementById("field-symbol")
const stockPrice = document.getElementById("field-price")
const stockTime = document.getElementById("field-time")

onStockUpdate((freshData) => {
    stockName.textContent = `Name:  ${freshData.name}`
    stockSymbol.textContent = `Symbol: ${freshData.sym}`
    stockPrice.textContent = `Price: ${freshData.price}`
    stockTime.textContent = `Time: ${freshData.time}`
})
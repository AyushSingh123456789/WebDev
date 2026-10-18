import { getStockData } from "./stockData.js";

setInterval(function () {
    const stockData = getStockData()
    renderStock(stockData)
}, 1500)

let updatedStockValue = null
function renderStock(stockData) {
    const stockName = document.getElementById("name")
    const stockSymbol = document.getElementById("symbol")
    const stockPrice = document.getElementById("price")
    const stockPriceIcon = document.getElementById("price-icon")
    const stockTime = document.getElementById("time")

    const { name, sym, price, time } = stockData

    stockName.textContent = `Name: ${name}`
    stockSymbol.textContent = `Symbol: ${sym}`
    stockPrice.textContent = `Price: ${price}`
    stockTime.textContent = `Time: ${time}`

    const img = document.createElement("img")
    const icon = price > updatedStockValue ? "pause-large-line.png" : updatedStockValue > price ? "thumb-up-fill.png" : "play-large-fill.png"
    img.src = icon
    img.alt = "Icon based on the stock situation every 1.5 seconds"

    updatedStockValue = price
    stockPriceIcon.textContent = ''
    stockPriceIcon.appendChild(img)
}
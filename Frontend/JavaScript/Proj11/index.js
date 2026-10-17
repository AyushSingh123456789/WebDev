import { getStockData } from "/fakeStockAPI.js"

setInterval(function () {
    const stockData = getStockData()
    renderStockData(stockData)
}, 1500)

let prevPrice = null

function renderStockData(stockData) {
    const stockDisplayName = document.getElementById("field-name")
    const stockDisplaySymbol = document.getElementById("field-symbol")
    const stockDisplayPrice = document.getElementById("field-price")
    const stockDisplayPriceIcon = document.getElementById("price-icon")
    const stockDisplayTime = document.getElementById("field-time")

    const { name, sym, price, time } = stockData

    const priceDirectionIcon = price > prevPrice ? 'thumb-up-fill.png' : price < prevPrice ? 'pause-large-line.png' : 'play-large-fill.png'
    const priceIconElement = document.createElement('img')
    priceIconElement.src = priceDirectionIcon
    priceIconElement.alt = 'Price Direction Icon'
    stockDisplayPriceIcon.innerHTML = ''
    stockDisplayPriceIcon.appendChild(priceIconElement)

    stockDisplayName.innerText = `Name:  ${name}`
    stockDisplaySymbol.innerText = `Symbol: ${sym}`
    stockDisplayPrice.innerText = `Price: ${price}`
    stockDisplayTime.innerText = `Time: ${time}`

    prevPrice = price
}
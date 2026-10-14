import { getStockData } from "./fakeStockAPI.js"


function stockCalc() {
    let stockData = {}
    const id1 = setInterval(() => {
        stockData = getStockData()
    }, 1500)
    return stockData
}

function stockCalc2() {
    let newStockData = {}
    const id2 = setInterval(() => {
        newStockData = getStockData()
    }, 1500)
    return newStockData
}


const stockDisplayName = document.getElementById("field-name")
const stockDisplaySymbol = document.getElementById("field-symbol")
const stockDisplayPrice = document.getElementById("field-price")
const stockDisplayTime = document.getElementById("field-time")

function renderStockTicker() {
    // const id = setInterval(() => {
    //     stockData = getStockData()
    // })
    // const id2 = setInterval(() => {
    //     newStockData = getStockData()
    // }, 1500)

    let data1 = {}
    data1 = stockCalc()
    let data2 = {}
    data2 = stockCalc2()

    if (data1.price > data2.price) {
        stockDisplayName.textContent += data1.name + ""
        stockDisplaySymbol.textContent += data1.sym + ""
        stockDisplayPrice.innerHTML += data1.price + `<img src="thumb-up-fill.png" id="img-2" alt="pause-btn" height="25px" width="50px">`
        stockDisplayTime.textContent += data1.time + ""
    }

    else if (data1.price < data2.price) {
        stockDisplayName.textContent += data2.name + ""
        stockDisplaySymbol.textContent += data2.sym + ""
        stockDisplayPrice.innerHTML += data2.price + `<img src="pause-large-line.png" id = "img-1" alt="play-btn" height="25px" width="50px">`
        stockDisplayTime.textContent += data2.time + ""
    }
    else {
        stockDisplayName.textContent += data2.name + ""
        stockDisplaySymbol.textContent += data2.sym + ""
        stockDisplayPrice.innerHTML += data2 + `<img src="play-large-fill.png" id="img-3" alt="go-btn" height="25px" width="50px">`
        stockDisplayTime.textContent += data2.time + ""
    }

}

// const idd = setInterval(() => {
//     renderStockTicker()
// }, 1500)
renderStockTicker()
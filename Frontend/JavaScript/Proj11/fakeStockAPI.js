let stockViewers = []

export function onStockUpdate(callback) {
    stockViewers.push(callback)
}

function getStockData() {
    const newData = {
        name: 'QtechAI',
        sym: 'QTA',
        price: (Math.random() * 3).toFixed(2),
        time: new Date().toTimeString().slice(0, 8)
    }
    stockViewers.forEach(callback => callback(newData))
}

const id = setInterval(getStockData, 1500)
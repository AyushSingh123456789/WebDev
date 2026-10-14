// const id = setInterval(() => {
//     getStockData()
//     clearInterval(id)
// }, 1500)


function getStockData() {
    return {
        name: 'QtechAI',
        sym: 'QTA',
        price: (Math.random() * 3).toFixed(2),
        time: new Date().toTimeString().slice(0, 8)
    }
}
export { getStockData } 
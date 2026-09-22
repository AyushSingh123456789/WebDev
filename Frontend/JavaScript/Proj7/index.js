let fighters = ["🐓", "🐣", "🦍", "🦁", "🐘", "🐯", "🦆", "🦅", "🦢", "🐸", "🐍"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function () {
    let itemIdx1 = Math.floor(Math.random() * fighters.length)
    let itemIdx2 = Math.floor(Math.random() * fighters.length)
    stageEl.textContent = fighters[itemIdx1] + " VS " + fighters[itemIdx2]
})
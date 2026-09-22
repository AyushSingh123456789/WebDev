let player = {
    Name: "Ayush",
    Chips: 145
}

let sum = 0
let cards = []
let hasBlackJack = false
let isAlive = false
let message = ""
let Value = document.getElementById("value-1-2")
let Sum = document.getElementById("sum")
let result = document.getElementById("title-2")
let playerEl = document.getElementById("player-name")

playerEl.textContent = player.Name + ": $" + player.Chips
playerEl.style.fontSize = "25px"
playerEl.style.color = "white"

Value.textContent = "Cards: "
Sum.textContent = "Sum: "
Value.style.color = Sum.style.color = "white"
Value.style.fontSize = Sum.style.fontSize = "25px"
Sum.style.marginTop = "0"

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    }
    else if (randomNumber === 1) {
        return 11
    }
    else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    Value.textContent = "Cards: " + cards.join(" ")

    Sum.textContent = "Sum: " + sum
    if (sum === 21) {
        message = "You've got blackjack 🥳"
        hasBlackJack = true
    }
    else if (sum <= 20) {
        message = "Do you want to draw a new card? 😐"
    }
    else {
        message = "You're out of the game 😭"
        isAlive = false
    }
    result.textContent = message
}

function newCard() {
    if (isAlive && !hasBlackJack) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}

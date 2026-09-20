let firstCard = Math.floor(Math.random() * 11) + 2
let secondCard = Math.floor(Math.random() * 11) + 2
let sum = firstCard + secondCard
let cards = [firstCard, secondCard]

let Value = document.getElementById("value-1-2")
Value.style.color = "white"
Value.style.fontSize = "28px"
Value.style.marginTop = "0px"
Value.style.marginBottom = "0px"
Value.textContent = "Cards: " + cards[0] + " " + cards[1]

let Sum = document.getElementById("sum")
Sum.style.color = "white"
Sum.style.fontSize = "28px"
Sum.textContent = "Sum: " + sum

let result = document.getElementById("title-2")
result.style.color = "red"
result.style.fontSize = "30px"
result.style.fontStyle = "italic"
function gameStart() {
    if (sum === 21) {
        result.textContent = "You've got blackjack 🥳"
    }
    else if (sum < 21) {
        result.textContent = "Do you want to draw a new card? 😐"
    }
    else {
        result.textContent = "You're out of the game 😭"
    }
}

function newCard() {
    let first = Math.floor(Math.random() * 11) + 2
    let second = Math.floor(Math.random() * 11) + 2
    Value.textContent = "Cards: " + first + " " + second
    sum = first + second
    Sum.textContent = "Sum: " + sum
}
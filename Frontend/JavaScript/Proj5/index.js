let box1 = document.getElementById("sq-box1")

function add1() {
    let plusOne = +(box1.textContent) + 1
    box1.textContent = plusOne
}

let box2 = document.getElementById("sq-box2")

function addOne() {
    let plusOne = +(box2.textContent) + 1
    box2.textContent = plusOne
}

function add2() {
    let plusTwo = +(box1.textContent) + 2
    box1.textContent = plusTwo
}

function addTwo() {
    let plusTwo = +(box2.textContent) + 2
    box2.textContent = plusTwo
}

function add3() {
    let plusThree = +(box1.textContent) + 3
    box1.textContent = plusThree
}

function addThree() {
    let plusThree = +(box2.textContent) + 3
    box2.textContent = plusThree
}

function reset() {
    box1.textContent = 0
    box2.textContent = 0
}

let Winners = document.getElementById("current_winners")
function winning_now() {
    if (+(box1.textContent) > +(box2.textContent)) {
        let difference = +box1.textContent - (+(box2.textContent))
        Winners.textContent = "HOME team leading by " + difference + " points... "
    }
    else if (+(box1.textContent) < +(box2.textContent)) {
        let difference = +box2.textContent - (+(box1.textContent))
        Winners.textContent = "GUEST team leading by " + difference + " points..."
    }
    else {
        Winners.textContent = "Scores are tied between HOME team and GUEST team right now..."
    }
}
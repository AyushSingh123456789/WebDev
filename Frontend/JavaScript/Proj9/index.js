const characters = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "|", ";", ":", "'", ",", ".", "<", ">", "?", "/", "~"
];

let password1 = document.getElementById("pw-1")
let password2 = document.getElementById("pw-2")
let randomPassword1 = Math.floor(Math.random() * characters.length)
let randomPassword2 = Math.floor(Math.random() * characters.length)

password1.style.color = "#78cb9e"
password1.style.width = "300px"
password1.style.borderRadius = "5px"
password1.style.textAlign = "center"
password1.style.fontSize = "25px"
password1.style.fontWeight = "bold"
password1.style.padding = "6px 12px"

password2.style.color = "#78cb9e"
password2.style.width = "300px"
password2.style.borderRadius = "5px"
password2.style.textAlign = "center"
password2.style.fontSize = "25px"
password2.style.fontWeight = "bold"
password2.style.padding = "6px 12px"


function passwordCreate() {
    if (password1.textContent.length < 15 && password2.textContent.length < 15) {
        passwordGeneration()
    }
    else {
        password1.textContent = " "
        password2.textContent = " "

        passwordGeneration()
    }
}

function passwordGeneration() {
    for (let i = 0; i < 15; i++) {
        password1.textContent += characters[Math.floor(Math.random() * characters.length)]
    }
    for (let i = 0; i < 15; i++) {
        password2.textContent += characters[Math.floor(Math.random() * characters.length)]
    }
}
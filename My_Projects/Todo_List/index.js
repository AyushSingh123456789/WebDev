let Name
let priority
let dueDate
// let list = {}
list = {
    "Name": "",
    "Priority": "",
    "DueDate": ""
}

const addBtn = document.getElementById("add-btn")
const priorityBtn1 = document.getElementById("priority-btn-1")
const priorityBtn2 = document.getElementById("priority-btn-2")
const dueDateBtn = document.getElementById("due-date-btn")
const submitBtn = document.getElementById("submit-btn")
const resultDisplay = document.getElementById("result-area")
const clearBtn = document.getElementById("clear-btn")

resultDisplay.style.marginTop = "20px"
resultDisplay.style.display = "flex"
resultDisplay.style.justifyContent = "center"
resultDisplay.style.alignItems = "center"
resultDisplay.style.fontSize = "18px"
resultDisplay.style.textAlign = "center"
resultDisplay.style.fontWeight = "bold"

addBtn.addEventListener("click", function () {
    Name = document.getElementById("task-name").value
    list.Name = Name
})

priorityBtn1.addEventListener("click", function () {
    priority = "High"
    list.Priority = priority
})

priorityBtn2.addEventListener("click", function () {
    priority = "Low"
    list.Priority = priority
})

dueDateBtn.addEventListener("click", function () {
    dueDate = document.getElementById("due-date").value
    list.DueDate = dueDate
})


submitBtn.addEventListener("click", function () {
    localStorage.setItem('todoList', JSON.stringify(list))
    const listContent = localStorage.getItem('todoList')
    const parsedListContent = JSON.parse(listContent)
    resultDisplay.textContent += JSON.stringify(parsedListContent) + ""
})

clearBtn.addEventListener("click", function () {
    list = {}
    localStorage.clear()
    resultDisplay.textContent = ""
})
let Name
let priority
let dueDate
let list = {}

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
    const taskInput = document.getElementById("task-name")
    Name = taskInput.value
    list.Name = Name
    taskInput.value = ""
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
    const dueDateInput = document.getElementById("due-date")
    dueDate = dueDateInput.value
    list.DueDate = dueDate
    dueDateInput.value = ""
})


submitBtn.addEventListener("click", function () {
    let existingContent = JSON.parse(localStorage.getItem('todoList')) || []
    let newContent = {
        Name: Name,
        Priority: priority,
        DueDate: dueDate
    }
    existingContent.push(newContent)
    localStorage.setItem('todoList', JSON.stringify(existingContent))
    resultDisplay.textContent = JSON.stringify(existingContent) + ""
})

clearBtn.addEventListener("click", function () {
    list = {}
    localStorage.clear()
    resultDisplay.textContent = ""
})
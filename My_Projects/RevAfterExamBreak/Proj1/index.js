const addBtn = document.getElementById("add-btn-1")
const deleteAllBtn = document.getElementById("delete-all")
const viewAllBtn = document.getElementById("view-all")
const viewHighPBtn = document.getElementById("view-highP")
const viewLowPBtn = document.getElementById("view-lowP")
const title1 = document.getElementById("title-1")
const priority1 = document.getElementById("priority-1")
const dueDate1 = document.getElementById("due-date-1")
const db = document.querySelector(".local-storage-view")

let details = []
let Task = {}

addBtn.addEventListener("click", function () {
    Task.title = title1.value
    Task.priority = priority1.value
    Task.dueDate = dueDate1.value
    details.push(Task)
    Task = {}
    localStorage.setItem("details", JSON.stringify(details))
    window.alert("Data Saved Successfully!")
})

viewAllBtn.addEventListener("click", function () {
    const storedDetails = localStorage.getItem("details")
    const parsedDetails = JSON.parse(storedDetails)
    // console.log(parsedDetails)
    db.textContent = ""
    for (let i = 0; i < parsedDetails.length; i++) {
        let currentTitle = parsedDetails[i].title
        let currentPriority = parsedDetails[i].priority
        let currentDueDate = parsedDetails[i].dueDate
        let divContent = document.createElement("div")
        divContent.textContent = `Title: ${currentTitle}, Priority: ${currentPriority}, DueDate: ${currentDueDate}`
        db.appendChild(divContent)
    }

})

viewHighPBtn.addEventListener("click", function () {
    const storedDetails2 = localStorage.getItem("details")
    const parsedDetails2 = JSON.parse(storedDetails2)
    db.textContent = ""
    let availability = false
    for (let i = 0; i < parsedDetails2.length; i++) {
        if (parsedDetails2[i].priority == "High") {
            availability = true
            let currentTitle2 = parsedDetails2[i].title
            let currentPriority2 = parsedDetails2[i].priority
            let currentDueDate2 = parsedDetails2[i].dueDate
            let divContent2 = document.createElement("div")
            divContent2.textContent = `Title: ${currentTitle2}, Priority: ${currentPriority2}, DueDate: ${currentDueDate2}`
            db.appendChild(divContent2)
        }
        else {
            availability = false
        }
    }
    if (availability === false) {
        window.alert("No Task with high priority is present in the storage.")
    }
})

viewLowPBtn.addEventListener("click", function () {
    const storedDetails3 = localStorage.getItem("details")
    const parsedDetails3 = JSON.parse(storedDetails3)
    db.textContent = ""
    let availability2 = false
    for (let i = 0; i < parsedDetails3.length; i++) {
        if (parsedDetails3[i].priority == "Low") {
            availability2 = true
            let currentTitle3 = parsedDetails3[i].title
            let currentPriority3 = parsedDetails3[i].priority
            let currentDueDate3 = parsedDetails3[i].dueDate
            let divContent3 = document.createElement("div")
            divContent3.textContent = `Title: ${currentTitle3}, Priority: ${currentPriority3}, DueDate: ${currentDueDate3}`
            db.appendChild(divContent3)
        }
        else {
            availability2 = false
        }
    }
    if (availability2 === false && db.textContent === "") {
        window.alert("No Task with low priority is present in the storage.")
    }
})

deleteAllBtn.addEventListener("click", function () {
    db.textContent = ""
    localStorage.clear()
})
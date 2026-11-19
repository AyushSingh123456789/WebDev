const timer = document.getElementById("timer")
const timerTitle = document.getElementById("timer-title")
const habitTracker = document.getElementById("habit-tracker")

let time = 10
let count = 1
timer.addEventListener("click", function () {
    const countdown = setInterval(() => {
        if (time > 0) {
            timerTitle.textContent = `Timer: ${time--}`
        }
        else {
            timerTitle.textContent = "Timer: "
            habitTracker.textContent = ""
            habitTracker.textContent = `Total Count: ${count}`
            count++
            time = 10
            clearInterval(countdown)
        }
    }, 1000)
})
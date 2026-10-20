import { getCricketScore } from "./liveCricketData.js"

const initialCricketData = getCricketScore()
renderCricketInfo(initialCricketData)

setInterval(() => {
    const cricketData = getCricketScore()
    renderCricketInfo(cricketData)
}, 5000)

function renderCricketInfo(cricketData) {
    const inningsDetail = document.getElementById("innings-detail")
    const inningsDetail2 = document.getElementById("innings-detail2")
    const cricketScore = document.getElementById("score")
    const cricketOver = document.getElementById("overs")
    const cricketWickets = document.getElementById("wickets")
    const cricketScore2 = document.getElementById("score2")
    const cricketOver2 = document.getElementById("overs2")
    const cricketWickets2 = document.getElementById("wickets2")

    const { Innings1, Score1, Overs1, Wickets1, Innings2, Score2, Overs2, Wickets2 } = cricketData

    inningsDetail.textContent = `Innings: ${Innings1} (IN)`
    inningsDetail2.textContent = `Innings: ${Innings2} (NZ)`
    cricketScore.textContent = `Score: ${Score1}`
    cricketScore2.textContent = `Score: ${Score2}`
    cricketOver.textContent = `Over: ${Overs1}`
    cricketOver2.textContent = `Over: ${Overs2}`
    cricketWickets.textContent = `Wickets: ${Wickets1}`
    cricketWickets2.textContent = `Wickets: ${Wickets2}`

}
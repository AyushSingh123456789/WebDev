export function getCricketScore() {
    let over = null
    let score = null
    let wickets = null
    const innings = Math.floor(Math.random() * 2) + 1
    const innings2 = innings == 1 ? 2 : 1
    let over2 = null
    let score2 = null
    let wickets2 = null

    if (innings == 1) {
        over = Math.floor(Math.random() * 20)
        score = over >= 1 && over <= 10 ? Math.floor(Math.random() * 120) : over >= 11 && over <= 15 ? Math.floor(Math.random() * 200) : Math.floor(Math.random() * 300)
        wickets = over > 0 && over <= 10 ? Math.floor(Math.random() * 3) : over >= 11 && over <= 15 ? Math.floor(Math.random() * 6) : Math.floor(Math.random() * 10)

        over2 = 0
        score2 = 0
        wickets2 = 0
    }
    else if (innings2 == 1) {
        over = 0
        score = 0
        wickets = 0

        over2 = over == 20 ? Math.floor(Math.random() * 20) : innings2 == 1 ? Math.floor(Math.random() * 20) : "Waiting for 1st innings to complete"
        score2 = (innings2 == 1 || over == 20) && over2 >= 1 && over2 <= 10 ? Math.floor(Math.random() * 120) : (innings2 == 1 || over == 20) && over2 >= 11 && over2 <= 15 ? Math.floor(Math.random() * 200) : Math.floor(Math.random() * 300)
        wickets2 = (innings2 == 1 || over == 20) && over2 > 0 && over2 <= 10 ? Math.floor(Math.random() * 3) : (innings2 == 1 || over == 20) && over2 >= 11 && over2 <= 15 ? Math.floor(Math.random() * 6) : Math.floor(Math.random() * 10)
    }

    return {
        "Innings1": innings,
        "Overs1": over,
        "Score1": score,
        "Wickets1": wickets,
        "Innings2": innings2,
        "Overs2": over2,
        "Score2": score2,
        "Wickets2": wickets2
    }

}
let solveRunning = false;
let solve = 0
let i = 0
let timeDisplay = document.getElementById("time")
let avgPara = document.getElementById("avgParaText")
const begin = new Audio("../audio/sfx/begin.mp3")
begin.volume = 1.0
let solves = []
let worst;
let best;
let simulatorRunning = true;

let startTime = null;

function beginTimer() {
    solveRunning = true;
    startTime = performance.now();
}

function endTimer() {
    if (startTime === null) {
        console.error("Timer was never started.");
        return;
     } else {
        solveRunning = false
        solve++
        const elapsedMs = performance.now() - startTime;
        const elapsedSec = (elapsedMs / 1000).toFixed(2);
        solves = [...solves, parseFloat(elapsedSec)]
        const elapsedSeconds = elapsedSec.split(".")[0]
        const elapsedMilliseconds = elapsedSec.split(".")[1]
        timeDisplay.textContent = `${elapsedSeconds}:${elapsedMilliseconds}`
        timeDisplay.style.color = "blueviolet"
        startTime = null;
     }
}

function up(e) {
    if (e.code === "Space") {
            if (solveRunning) {
                endTimer()
            } else {
                setTimeout(() => {
                    begin.play().catch(err => {
                        console.error("Playback failed: ", err)
                    })
                    beginTimer()
                }, 15000)
            }
        } else {
            if (solveRunning) {
                endTimer()
            }
        }
}

function DOMLoaded(e) {
    document.addEventListener("keyup", up)
}

function calculateAvg() {
    worst = Math.max(...solves)
    best = Math.min(...solves)
    filteredOne = solves.filter(time => time !== worst)
    filtered = solves.filter(time => time !== best)
    let temp = filtered[0] + filtered[1] + filtered[2]
    let avg = (temp/3).toFixed(2)
    return avg
}



function terminateSimulator() {
    if (solve >= 5) {
        document.removeEventListener("DOMContentLoaded", DOMLoaded)
        document.removeEventListener("keyup", up)
        avgPara.textContent = calculateAvg()
        avgPara.style.fontSize = "50px"
        document.title = `${calculateAvg()} Average of 5 - WCA Simulator`
        simulatorRunning = false
    }
    if (simulatorRunning) {
        requestAnimationFrame(terminateSimulator)
    }
}

document.addEventListener("DOMContentLoaded", DOMLoaded)

terminateSimulator()
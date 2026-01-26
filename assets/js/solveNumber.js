let solveCount = 1;
let keyPressCount = 0;

function incrementTitle() {
    if (solveCount === 5) {
        document.title = "Solve 5 - WCA Simulator";
        document.removeEventListener("keyup", handleSolveNumberKey);
    } else {
        solveCount++;
        document.title = `Solve ${solveCount} - WCA Simulator`;
    }
}

function handleSolveNumberKey() {
    keyPressCount++;
    if (keyPressCount >= 2) {
        keyPressCount = 0;
        incrementTitle();
    }
}

document.addEventListener("keyup", handleSolveNumberKey);

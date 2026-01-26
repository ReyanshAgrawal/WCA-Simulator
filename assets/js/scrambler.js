const numToNotation = {1: "R", 2: "R'", 3: "L", 4: "L'", 5: "U", 5: "U'", 6: "B", 7: "B'", 8: "F", 9: "F'", 10: "D", 11: "D'"}

function rng(A, B) {
    const min = Math.min(A, B);
    const max = Math.max(A, B);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let scramble = []

for(i=0;i<16;i++) {
    let num = rng(1, 11)
    scramble.push(numToNotation[num])
}

document.addEventListener("DOMContentLoaded", (e) => {
    p = document.querySelector("#scramble")
    p.textContent = `${scramble[1]} ${scramble[2]} ${scramble[3]} ${scramble[4]} ${scramble[5]} ${scramble[6]} ${scramble[7]} ${scramble[8]} ${scramble[9]} ${scramble[10]} ${scramble[11]} ${scramble[12]} ${scramble[13]} ${scramble[14]} ${scramble[15]}`
})
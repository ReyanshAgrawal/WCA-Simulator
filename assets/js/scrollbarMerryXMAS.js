function getDate() {
    let today = new Date();
    let options = { day: "numeric", month: "long" };
    let formatted = today.toLocaleDateString("en-IN", options);
    return formatted;
}

function startCheck() {
    if (
        getDate() == "18 December" || getDate() == "19 December" ||
        getDate() == "20 December" || getDate() == "21 December" ||
        getDate() == "22 December" || getDate() == "23 December" ||
        getDate() == "24 December" || getDate() == "25 December" ||
        getDate() == "26 December"
    ) {
        document.getElementById("tooltip").style.display = "inline-block";
        document.head.querySelector("style").textContent = `
        ::-webkit-scrollbar {
            width: 10px;
            background-color: red;
        }

        ::-webkit-scrollbar-thumb {
                background-color: green;
                border-radius: 10px;
        }
        `
    } else {
        document.getElementById("tooltip").style.display = "none";
        document.head.querySelector("style").textContent = `
        ::-webkit-scrollbar {
            width: 10px;
            background-color: red;
        }

        ::-webkit-scrollbar-thumb {
                background-color: green;
                border-radius: 10px;
        }
        `
    }
    requestAnimationFrame(startCheck())
}
startCheck();
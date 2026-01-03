const display = document.getElementById("display");

/* NUMS */
const numbers = [
    "zero","one","two","three","four",
    "five","six","seven","eight","nine"
];

numbers.forEach((id, index) => {
    document.getElementById(id).addEventListener("click", () => {
        display.value += index;
    });
});

/* OPERATORS */
document.getElementById("add").addEventListener("click", () => addOperator("+"));
document.getElementById("sub").addEventListener("click", () => addOperator("-"));
document.getElementById("multiply").addEventListener("click", () => addOperator("*"));
document.getElementById("divide").addEventListener("click", () => addOperator("/"));

function addOperator(op) {
    if (display.value === "") return;
    const lastChar = display.value.slice(-1);
    if ("+-*/".includes(lastChar)) return;
    display.value += op;
}

/* EQUAL */
document.getElementById("equal").addEventListener("click", () => {
    if (display.value === "") return;
    
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
});

/* CLEAR */
document.getElementById("clear").addEventListener("click", () => {
    display.value = "";
});

/* BACKSPACE */
document.getElementById("backspace").addEventListener("click", () => {
    display.value = display.value.slice(0, -1);
});

/* DOT */
document.getElementById("dot").addEventListener("click", () => {
    if (!display.value.endsWith(".")) {
        display.value += ".";
    }
});

/* % */
document.getElementById("percent").addEventListener("click", () => {
    if (display.value !== "") {
        display.value = display.value / 100;
    }
});

/* BRACKETS */
let openBracket = true;
document.getElementById("bracket").addEventListener("click", () => {
    display.value += openBracket ? "(" : ")";
    openBracket = !openBracket;
});

/* +/- */
document.getElementById("negative").addEventListener("click", () => {
    if (display.value === "") return;
    display.value = display.value.startsWith("-")
        ? display.value.slice(1)
        : "-" + display.value;
});

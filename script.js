let num1 = parseInt(prompt("Number 1"));
let parameter = prompt("Paramètre de calcul ?");
let num2 = parseInt(prompt("Number 2"));

// IF SECTION

// if (parameter === "+") {
//     let result = num1 + num2;
//     document.getElementById("fonction-display").innerHTML = result;
// } else if (parameter === "-") {
//     result = num1 - num2;
//     document.getElementById("fonction-display").innerHTML = result;
// } else if (parameter === "*") {
//     result = num1 * num2;
//     document.getElementById("fonction-display").innerHTML = result;
// } else {
//     result = num1 / num2;
//     document.getElementById("fonction-display").innerHTML = result;
// }

// IF SECTION


// SWITCH SECTION

let result;
switch (parameter) {
    case "+" :
        result = num1 + num2;
        break;
    case "-" :
        result = num1 - num2;
        break;
    case "*" :
        result = num1 * num2;
        break;
    case "/" :
        result = num1 / num2;
        break;
}

document.getElementById("fonction-display").innerHTML = result;

// SWITCH SECTION
// Task 10

alert("task 10");

let num3 = Number(prompt("enter a number"));
let num4 = Number(prompt("enter another number"));

let operator = prompt("enter an operator (+, -, *, /)");

if (operator === "+") {
    alert(num3 + num4);
} else if (operator === "-") {
    alert(num3 - num4);
} else if (operator === "*") {
    alert(num3 * num4);
} else if (operator === "/" && num4 !== 0) {
    alert(num3 / num4);
} else if (operator === "/" && num4 === 0) {
    alert("undefined");
}

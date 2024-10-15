// Task 5

alert("task 5");

let length = Number(prompt("length"));
let width = Number(prompt("width"));

alert("area: " + length * width);

let update = prompt("update length or width(type 1 or 2)");

if (update === "1") {
    length = Number(prompt("new length"));
} else if (update === "2") {
    width = Number(prompt("new width"));
}

alert("area: " + length * width);
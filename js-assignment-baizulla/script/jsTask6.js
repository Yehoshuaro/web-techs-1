// Task 6

let counter = Number(prompt("how many colors would you like to input? "));
let colors = [];

for (let i = 0; i < counter; i++) {
    colors.push(prompt("enter a color: "));
}

alert("first color: " + colors[0] + "\n" +
    "last color: " + colors[colors.length - 1]);
// Task 2

alert("task 2");

let age = prompt("how old are you?");

function isDriving(age) {
    if (age >= 18) {
        return `age: ${age}\ndriver licensed: Yes \n`;
    } else {
        return `age: ${age}\ndriver licensed: No \n`;
    }
}

alert(isDriving(age));
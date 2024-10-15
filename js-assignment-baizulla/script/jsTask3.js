// Task 3

alert("task 3");

let num1 = prompt("enter a number");

function numAnalysis(num1) {
    let isEven = false, isOdd = false, is5Div = false, isGreaterThan10 = false;
    if (num1 % 2 === 0) {
        isEven = true;
    } else {
        isOdd = true;
    }
    if (num1 % 5 === 0 || num1 > 10) {
        is5Div = true;
        isGreaterThan10 = true;
    } else if (num1 % 5 !== 0 || num1 > 10) {
        isGreaterThan10 = true;
    } else if (num1 % 5 === 0 || num1 < 10) {
        isGreaterThan10 = true;
    }
    return `you entered: ${num1}\n` +
        `is the number even? ${isEven}\n` +
        `is the number odd? ${isOdd}\n` +
        `is the number a multiple of 5? ${is5Div}\n` +
        `is the number greater than 10? ${isGreaterThan10}\n` +
        `the number is special!!!`;
}

alert(numAnalysis(num1));
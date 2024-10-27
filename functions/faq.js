// let firstName = prompt("Enter your first name")
// let lastName = prompt("Enter your last name")
// let age = prompt("Enter your age")
//
// console.log(firstName)
// console.log(lastName)
// console.log(age)
//
//
//
// let Age = prompt("Enter your age:")
// if(Age < 18) {
//     console.log("Drive's License: no")
// }
// else {
//     console.log("Drive's License: yes")
// }
//
//
//
// let number = prompt("Enter a number")
// if(number % 2 == 1) console.log("Is the number even? false\n" +
//     "Is the number odd? true\n")
// else console.log("Is the number even? true\n" +
//     "Is the number odd? false\n")
//
// if(number % 5 == 0) console.log("Is the number a multiple of 5? true")
// else console.log("Is the number a multiple of 5? false")
//
// if(number > 10) console.log("Is the number greater than 10? true")
// else console.log("Is the number greater than 10? false")
// console.log("The number is special!\n")
//
//
//
//
// let numberInput = prompt("Number Input: ");
// console.log("Type of number input:", typeof Number(numberInput));
//
// let stringInput = prompt("String Input: ");
// console.log("Type of string input:", typeof stringInput);
//
// let booleanInput = prompt("Boolean Input (true/false): ");
// console.log("Type of boolean input:", typeof (booleanInput.toLowerCase() === 'true'));
//
//
//
// let width = Number(prompt());
// let length = Number(prompt());
// let update = prompt("");
// console.log(length * width);
// if (update === "length"){
//     length = Number(prompt());
// }
// if (update === "width"){
//     width = Number(prompt());
// }
// console.log(length * width);
//
//
//
//
// let colorNumber = Number(prompt(""));
// let colors = [];
//
// for (let i = 0; i < colorNumber; i++) {
//     colors.push(prompt("Enter a color: "));
// }
// console.log("First color:", colors[0]);
// console.log("Last color:", colors[colorNumber - 1]);
//
//
//
//
// let name = prompt("Please enter your name:");
// let age = prompt("Please enter your age:");
// let hobby = prompt("Please enter your favorite hobby:");
//
// const userDetails = {
//     name: name,
//     age: age,
//     hobby: hobby
// };
//
// console.log(userDetails);
//
//
//
//
// let firstNumber = Number(prompt(""));
// let secondNumber = Number(prompt(""));
//
// console.log("Equal:", firstNumber === secondNumber);
// console.log("First is more than second", firstNumber > secondNumber);
// console.log("Second is more than first", firstNumber < secondNumber);
//
//
//
//
// let numberFruits = Number(prompt("How many fruits?"));
// let fruits =[];
// for(let i = 0; i < numberFruits; i++) {
//     let fruit = prompt("Enter fruit");
//     fruits.push(fruit);
// }
// fruits.pop();
// let newFruit = prompt("Add new fruit:");
// fruits.unshift(newFruit);
// console.log(fruits);
//
//
//
//
// const firstNumber = Number(prompt("Enter the first number:"));
// const secondNumber = Number(prompt("Enter the second number:"));
// const operation = prompt("Enter operation (add, subtract, multiply, divide):");
//
// let result;
//
// if (operation === "add") {
//     result = firstNumber + secondNumber;
// } else if (operation === "subtract") {
//     result = firstNumber - secondNumber;
// } else if (operation === "multiply") {
//     result = firstNumber * secondNumber;
// } else if (operation === "divide") {
//     if (secondNumber === 0) {
//         console.log("Error: Cannot divide by zero.");
//     }
//     result = firstNumber / secondNumber;
// } else {
//     console.log("Error: Invalid operation.");
// }
//
// console.log(`Result:`, result);


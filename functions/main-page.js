
let username = prompt("What is Your name?");
let lastName = prompt("What is your surname?");
let age = prompt("What is your age?");

console.log("First Name: ", username);
console.log("Last Name: ", lastName);
console.log("Age: ", age);


/* 2nd Task
let age = prompt("Enter Your age: ");
let availability = prompt("Do You have a licence? Write with Yes or No: ");
if (availability === "Yes" && age >= 18) {
    console.log("He/She is eligible to drive");
}
else if (availability === "No" || age <= 18) {
    console.log("He/She is not eligible to drive");
}
else{
    console.log("He/She is not eligible to drive");
}
 */

/* 3rd Task
let num = Number(prompt("Enter a number:"));
let evenOrOdd;
let five;
let tenPlus;
if (num % 2 === 0) {
    evenOrOdd = true;
} else {
    evenOrOdd = false;
}
if (num % 5 === 0) {
    five = true;
} else {
    five = false;
}
if (num > 10) {
    tenPlus = true;
} else {
    tenPlus = false;
}
console.log("You entered: " + num);
console.log("Is the number even? " + evenOrOdd);
console.log("Is the number odd? " + !evenOrOdd);
console.log("Is the number a multiple of 5? " + five);
console.log("Is the number greater than 10? " + tenPlus);
console.log("The number is special!");
 */

/* 4th Task
let num = Number("");
let str = prompt("");
let bool = prompt("");

console.log(typeof num);
console.log(typeof str);
console.log(typeof (bool === "true"));
 */

/* 5th Task
let length = Number(prompt());
let width = Number(prompt());
let update = prompt("");
if (update === "length"){
    length = Number(prompt());
}
if (update === "width"){
    width = Number(prompt());
}
console.log(length * width);
 */

/* 6th Task
let colorCount = Number(prompt("How many colors would you like to input? "));
let colors = [];

for (let i = 0; i < colorCount; i++) {
    colors.push(prompt("Enter a color: "));
}
console.log(colors[0]);
console.log(colors[colors.length - 1]);
 */

/* 7th Task
let name = prompt("What is your name? ");
let age = prompt("What is your age? ");
let hobby = prompt("What is your hobby? ");

let object = {
    name: name,
    age: age,
    hobby: hobby
}
console.log(object);
 */

/* 8th Task
let first = Number(prompt(""));
let second = Number(prompt(""));

console.log(first === second);
console.log(first > second);
console.log(first < second);
*/

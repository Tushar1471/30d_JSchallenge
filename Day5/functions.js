// >>>>>>>>>>>>>>>>>>> DAY 5 STARTS HERE <<<<<<<<<<<<<<<<<<<<<

//  *** Tasks and Activities & Feature Request Included *** \\

// *** Activity 1: Function Declaration *** \\

// Task 1: Write a function to check if a number is odd or even and log the result to the console.

function checkNumber(num) {
    if (num % 2 == 0) console.log(num, "is a even number");
    else console.log(num, "is a odd number");
}

checkNumber(14); // 14 is a even number.

// Task 2: Write a function to calculate the square of a number and return the result.

function square(n) {
    return n * n;
}
console.log(square(100)); // 10000

// *** Activity 2: Function Expression *** \\

// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.

const findMax = function(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

let max_Value = findMax(9, 29);
console.log(max_Value); // 29

// Task 4: Write a function expression to concatenate two strings and return the result.

const concatStr = function(str1, str2) {
    return str1 + str2;
}

let newString = concatStr("sea", "food");
console.log(newString); // seafood

// *** Activity 3: Arrow Functions *** \\

// Task 5: Write a function to calculate the sum of two numbers and return the result.

const sum = (num1, num2) => num1 + num2;
console.log(sum(5, 6)); // 11

// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.

const checkString = (str, char) => str.indexOf(char) !== -1 ? true : false;
console.log(checkString("Hello World", "l")); // true

// Task 7: Write a function that takes two parameters and return their product. Provide a default value for the second parameter.

function product(num1, num2 = 1) {
    return num1 * num2;
}

console.log(product(5, 6)); // 30
console.log(product(10)); // 10

// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

function greet(name, age = "Unknown") {
    return `Good Morning ${name}! Your age is ${age}.`;
}

console.log(greet("Tushar Malhotra", 26));

// *** Activity 5: High Order Functions *** \\

// Task 9: Write a higher order function that takes a function and a number, and calls the function that many times.

function greet(val) {
    console.log("The value of PI is", val);
}

// High Order Function that takes another function as an argument or return that function we can call this a callback function.

function showMessage(fn, val) {
    fn(val);
}
showMessage(greet, 3.14);

// Task 10: Write a higher order functions that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

const addOne = (x) => x + 1;
const squareIt = (x) => x * x;

const composedFunction = (fn1, fn2, val) => {
    console.log(fn1(val));
    console.log(fn2(val));
}

composedFunction(addOne, squareIt, 25);


// >>>>>>>>>>>>>>>>>>> DAY 5 ENDS HERE <<<<<<<<<<<<<<<<<<<<<
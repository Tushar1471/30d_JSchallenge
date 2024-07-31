// >>>>>>>>>>>>>> DAY 1 STARTS HERE <<<<<<<<<<<<<<<<<<

//  *** Tasks and Activities & Feature Request Included *** \\

// *** Activity 1: Variable Declaration *** \\

// Task 1: Declare a variable using var, assign it a number, and log the value to the console.

var num = 7;
console.log(num); // 7

// Task 2: Declare a variable using let, assign it to a string, and log the value to the console.

let sentence = "Hello! I am JavaScript.";
console.log(sentence); // Hello! I am JavaScript.

// *** Activity 2: Constant Declaration *** \\

// Task 3: Declare a variable using const,assign it to a boolean value,and log the value to the console.

const isNotReassign = true;
console.log(isNotReassign); // true

// *** Activity 3: Data Types *** \\

// Task 4: Create variables of different datatypes(number,string,boolean,object,array) and log each variable's type using the typeof operator.

let number = 7;

let str = "Hello! I am JavaScript";

let is_DynamicLan = true;

let ready_ToStart = null;

let yo_exp = 2 * "years of experience";

let your_Name;

let arr = ["Number", "String", "Boolean", "Null", "Nan", "undefined", "Array", "Objects", "Symbol"];

let obj = {
    nameOfLan: "JavaScript",
    is_DynamicLan,
}

let symbol = Symbol();

console.log(typeof number); // Number
console.log(typeof str); //String
console.log(typeof is_DynamicLan); // Boolean      
console.log(typeof ready_ToStart); // Object
console.log(typeof yo_exp); // Number
console.log(typeof your_Name); // Undefined
console.log(typeof arr); // Object
console.log(typeof obj); // Object
console.log(typeof symbol); // symbol

// *** Activity 4: Reassigning Variables *** \\

// Task 5: Declare a variable using let, assign it an intial value, reassign a new value, and log both values to the console.

let nameOfPerson = "XYZ";

console.log(nameOfPerson); // XYZ

// >> Can be reassign and let variable has to be changed <<
nameOfPerson = "ABC";

console.log(nameOfPerson); // ABC

// *** Activity 5: Understanding const *** \\

// Task 6: Try reassigning a variable declared with const and observe the error.

const PI = 3.14;

console.log(PI);

PI = 3.27; // >> TypeError: This gives us error, const varibles once assigned can't be reassign.<<


// >>>>>>>>>>>>>>>>>>> DAY 1 ENDS HERE <<<<<<<<<<<<<<<<<<<<<
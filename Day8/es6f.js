// >>>>>>>>>>>>>>>>>>> DAY 8 STARTS HERE <<<<<<<<<<<<<<<<<<<<<

//  *** Tasks and Activities & Feature Request Included *** \\

// *** Activity 1: Template Literals *** \\

const person = {
    name: "William",
    age: 26,
    getData: function() {
        return `Hello! My name is ${this.name} and I am ${this.age} years old.`
    },
}

console.log(person.getData());

// Task 2: Create a multiline string using template literals and log it to the console.

const str =
    `My name is William.
I am 26 years old.`;
console.log(str);

// *** Activity 2: Destructuring *** \\

// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.

const arr = [1, 2, 3, 4, 5];
const [first, second] = arr;
console.log(first); // 1
console.log(second); // 2

// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.

const book = {
    title: "To kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
}

const { title, author } = book;
console.log(title);
console.log(author);

// *** Activity 3: Spread and Rest Operators *** \\

// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

const newArr = [...arr, 6, 7, 8];
console.log(newArr); // [1,2,3,4,5,6,7,8]

// Use the rest operator in a function to accept an arbitrary number of arguments,sum them and return the result.

function sum(...args) {
    let sum = 0;
    console.log(args);
    for (let arg of args) {
        sum += arg;
    }
    return sum;
}

console.log(sum(1, 2, 3, 4, 5, 6)); // 21

// *** Activity 4: Default Parameters *** \\

// Task 7: Write a function that takes two parameters and return their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second paramter.

function product(num1, num2 = 1) {
    return num1 * num2;
}
console.log(product(5, 6)); // 30
console.log(product(5)); // 5

// *** Activity 5: Enhanced Object Literals *** \\

// Task 8: Use enhanced object literals to create an object with methods and properties, and log object to the console.

const bioData = {
    name: "Tushar Malhotra",
    age: 23,
    gender: "Male",
    greet: function() {
        return `Hello! ${this.name}. Nice to meet you.`
    }
};

console.log(bioData);

// Task 9: Create an object with computed property names based on variables and log the object to the console.

const occupation = "Software Developer";
bioData.getOccupation = function() {
    return this.occupation = occupation;
}

console.log(bioData);
console.log(bioData.getOccupation());

// >>>>>>>>>>>>>>>>>>> DAY 8 ENDS HERE <<<<<<<<<<<<<<<<<<<<<
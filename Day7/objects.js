// >>>>>>>>>>>>>>>>>>> DAY 7 STARTS HERE <<<<<<<<<<<<<<<<<<<<<

//  *** Tasks and Activities & Feature Request Included *** \\

// *** Activity 1: Object Creation and Access *** \\

// Task 1: Create an object representing a book with properties like title,author,and year, and log the object to the console.

const book = {
    title: "To kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
}

console.log(book);

// Task 2: Access and log the title and author properties of the book object.

console.log(book.title);
console.log(book["author"]);

// *** Activity 2: Object Methods *** \\

// Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.

book.showMessage = function() {
    return `${this.title} was published in ${this.year} by author named ${this.author}.`
}

console.log(book.showMessage());

// Task 4: Add a method to the book object that takes a parameter (year) and updates the book'year property, then log the updated object.

book.updateYear = function(year) {
    return this.year = year;
}

console.log(book.updateYear(2015));
console.log(book); // Update the year value.

// *** Activity 3: Nested Objects *** \\

// Task 5: Create a nested object representing a library with properties like name and log the library object to the console.

const library = {
    name: "Tushar Malhotra",
    books: ["RDBMS", "CyberSecurity", "EcmaScript6"],
}

console.log(library);


// Task 6: Access and log the name of the library and the title of all books in the library.

library.books.forEach(title => console.log(title));

// *** Activity 4: The this keyword *** \\

// Task 7: Add a method to the book object that uses the this keyword to return a new string with the book title and year,and log the result of calling this method.

book.showDescription = function() {
    this.year = 1960;
    return `The book named ${this.title} was published in ${this.year} `;
}

console.log(book.showDescription());

// *** Activity 5: Object Iteration *** \\

// Task 8: Use a for..in loop to iterarte over the properties of the book object and log the each properties and its value. 

for (let obj in book) {
    console.log(obj, ":", book[obj]);
}

// Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.

console.log(Object.keys(book));
console.log(Object.values(book));

// >>>>>>>>>>>>>>>>>>> DAY 7 ENDS HERE <<<<<<<<<<<<<<<<<<<<<
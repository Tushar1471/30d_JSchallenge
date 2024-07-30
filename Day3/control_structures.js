// >>>>>>>>>>>>>>> DAY 3 STARTS HERE <<<<<<<<<<<<<<<<<<<

//  *** Tasks and Activities & Feature Request Included *** \\

// *** Activity 1: If else statements *** \\

// Task 1: Write a program to check if a number is positive,negative, or zero, and log the result to the console.

let inputNum = -5;

if (inputNum > 0) {
    console.log(inputNum, "is a Positive Integer.");
} else if (inputNum == 0) {
    console.log(inputNum, "is a whole number");
} else {
    console.log(inputNum, "is a negative integer"); // ✅   
}

// Task 2: Write a program to check if a person is eligible to vote (age>= 18) and log the result to the console.

let personAge = 23;

if (personAge >= 18) {
    console.log("You have right to vote because you are 18+");
} else {
    console.log("Age restricted");
}

// *** Activity 2: Nested If else statements *** \\

// Task 3: Write a program to find the largest of three numbers using nested if else statments.

function largestNumber(num1, num2, num3) {
    if (num1 >= num2) {
        if (num1 >= num3) {
            return num1;
        } else {
            return num3;
        }
    } else {
        if (num2 >= num3) {
            return num2;
        } else {
            return num3;
        }
    }
}

console.log(largestNumber(10, 2, 15));

// *** Activity 3: Switch Case *** \\

// Task 4: Write a program that uses a switch case to detemine the day of the week based on (1-7) and log the name to the console. 

let day;

switch ((new Date().getDay()) + 1) {
    case 1:
        day = "Sunday";
        break;
    case 2:
        day = "Monday";
        break;
    case 3:
        day = "Tuesday";
        break;
    case 4:
        day = "Wednesday";
        break;
    case 5:
        day = "Thurday";
        break;
    case 6:
        day = "Friday";
        break;
    case 7:
        day = "Saturday";
        break;
    default:
        day = "Enter incorrect day";
}

console.log(day);

// Task 5: Write a program thar uses a switch case to assign a grade ('A','B','C','D','F') based on score and log the grade to the console.

let score = Math.floor((Math.random() * 100) + 1);
let grade;
switch (true) {
    case score >= 90:
        grade = "You scored A grade";
        break;
    case score >= 80:
        grade = "You scored B grade";
        break;
    case score >= 70:
        grade = "You scored C grade";
        break;
    case score >= 60:
        grade = "You scored D grade";
        break;
    case score >= 50:
        grade = "You scored F grade";
        break;
    default:
        grade = "Improve Yourself";
}

console.log(grade);


// *** Activity 4: Conditional Operator(Ternary Operator) *** \\

// Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

let num = 4;
let result = num % 2 == 0 ? `${num} is an even number` : `${num} is an odd number`;
console.log(result);

// *** Activity 5: Combining Conditions *** \\

// Task 7: Write a program to check if a year is a leap year using mutiple conditions(divided by 4, but not 100 unless also divisible by 400) and log the result to the console.

let getYear = new Date().getFullYear();
let isYear;
if (getYear % 4 == 0) {
    if (getYear % 100 !== 0) {
        if (getYear % 400 == 0) {
            isYear = `${getYear} is a Leap year`;
        } else {
            isYear = `${getYear} is not a Leap Year`;
        }
    }
} else {
    isYear = `${getYear} is not a Leap Year`;
}

console.log(isYear);

// >>>>>>>>>>>>>>>>>>> DAY 3 ENDS HERE <<<<<<<<<<<<<<<<<<<<<
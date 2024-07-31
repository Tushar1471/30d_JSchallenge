// >>>>>>>>>>>>>>>>>>> DAY 4 STARTS HERE <<<<<<<<<<<<<<<<<<<<<

//  *** Tasks and Activities & Feature Request Included *** \\

// *** Activity 1: For Loop *** \\

// Task 1: Write a program to print numbers from 1 to 10 using a for loop.

for (let num = 1; num <= 10; num++) {
    console.log(num);
}

// Task 2: Write a program the multiplication table of 5 using for loop.

let table = 5;

for (let i = 1; i <= 10; i++) {

    console.log(`${table} * ${i} = ${table * i}`);
}

// *** Activity 2: While Loop *** \\

// Task 1: Write a program to calculate the sum of numbers from 1 to 10 using while loop.

let sum = 0;
let i = 1;
while (i <= 10) {
    sum += i
    i++;
}

console.log(sum);

// Task 4: Write a program to print numbers from 10 to 1 using a while loop.

let p = 10;

while (p >= 1) {
    console.log(p);
    p--;
}

// *** Activity 3: Do... While Loop *** \\

// Task 5: Write a program to print numbers from 1 to 5 using a do... while loop.

let dPrint = 1;

do {
    console.log(dPrint);
    dPrint++;
} while (dPrint <= 5)

// Task 6: Write a program to calculate the factorial of a number using a do.. while loop.

let sp_Value = 5;
let factorial = 1;

do {
    factorial *= sp_Value;
    sp_Value--;
} while (sp_Value >= 1)

console.log(factorial);

// *** Activity 4: Nested Loops *** \\

// Task 7: Write a program to print a pattern using nested for loops.

for (let i = 1; i <= 5; i++) { // *
    let starPattern = "";
    for (let j = 1; j <= i; j++) {
        starPattern += "*";
    }
    console.log(starPattern);
}

// *** Activity 5: Loop Control Statements *** \\

// Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.

for (let i = 1; i <= 10; i++) {
    if (i == 5) continue;
    console.log(i);
}

// Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.

for (let i = 1; i <= 10; i++) {
    console.log(i);
    if (i == 7) break;
}


// >>>>>>>>>>>>>>>>>>> DAY 4 ENDS HERE <<<<<<<<<<<<<<<<<<<<<
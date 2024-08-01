// >>>>>>>>>>>>>>>>>>> DAY 6 STARTS HERE <<<<<<<<<<<<<<<<<<<<<

//  *** Tasks and Activities & Feature Request Included *** \\

// *** Activity 1: Array Creation and Access *** \\

const arr = [1, 2, 3, 4, 5];

// Task 1: Create an array of numbers from 1 to 5 and log the array to the console.

console.log(arr); // [1,2,3,4,5]

// Task 2: Access the first and last elements of the array and log them to the console.

console.log(arr[0]);
console.log(arr[arr.length - 1]);

// *** Activity 2: Array Methods (Basic) *** \\

// Task 3: Use the push method to add a new number to the end of the array and log the result to the console.

arr.push(6);
console.log(arr); // [1,2,3,4,5,6]

// Task 4: Use the pop method to remove the last element from the array and log the updated array.

arr.pop();
console.log(arr); // [1,2,3,4,5]

// Task 5: Use the shift method to remove the first element from the array and log the updated array.

arr.shift();
console.log(arr); // [2,3,4,5]

// Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.

arr.unshift(1);
console.log(arr); // [1,2,3,4,5]

// *** Activity 3: Array methods (Intermediate) *** \\

// Task 7: Use the map method to create a new array where every number is doubled and log the new array.

const doubledArr = arr.map(el => el * 2); // Don't mutate the original array, create a new array.
console.log(doubledArr); // [2,4,6,8,10]

// Task 8: Use the filter method to create a new array with only even numbers and log the result to the new array.

const filterArr = arr.filter(el => el % 2 == 0);
console.log(filterArr); // [2,4]

// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.

const calculate_Sum = arr.reduce((acc, next) => acc + next, 0);

console.log(calculate_Sum); // 15

// *** Activity 4: Array iteration *** \\

// Task 10: Use for loop to iterate over the array and log each element to the console.

for (let i = 0; i <= arr.length - 1; i++) {
    console.log(arr[i]);
} // 1 /n 2 /n 3 /n 4 /n 5

// Task 11: Use the forEach method to iterate over the array and log each element to the console.

arr.forEach(el => console.log(el));
//  // 1 /n 2 /n 3 /n 4 /n 5

// *** Activity 5: Multi-Dimensional Arrays *** \\

// Task 12: Create a two-dimensional array(matrix) and log the entire array to the console.
const newArr = [
    [1, 2],
    [2, 3],
    [3, 4],
]
console.log(newArr); // [[1,2],[2,3][3,4],];

// Task 13: Access and log a specific element from the two-dimensional array.

console.log(newArr[0][1]); // 2
console.log(newArr[2][0]); // 3


// >>>>>>>>>>>>>>>>>>> DAY 6 ENDS HERE <<<<<<<<<<<<<<<<<<<<<
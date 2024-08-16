"use strict";
// 100 Days Of Coding Challenge!
/** Question 55:
Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.*/
//----------------------------------------------------------------------------------------------------------------------------------------
// Function to double the numbers in an array
function doubleNumbers(arr) {
    // Use the map method to create a new array with each number doubled
    return arr.map((num) => num * 2);
}
// Example usage
const numbers = [2, 4, 6, 8, 10];
const doubledNumbers = doubleNumbers(numbers);
console.log("Doubled Numbers in an Array", doubledNumbers); // Output: Doubled Numbers in an Array [4, 8, 12, 16, 20]

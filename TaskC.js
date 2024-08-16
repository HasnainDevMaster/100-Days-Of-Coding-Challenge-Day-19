"use strict";
// 100 Days Of Coding Challenge!
/** Question 57:
Find the Average Grade: Given a list of grades, calculate the average grade.*/
//-----------------------------------------------------------------------------
// Function to calculate the average grade
function calculateAverageGrade(grades) {
    // Use the reduce method to sum all the grades
    const total = grades.reduce((sum, grade) => sum + grade, 0);
    // Calculate the average by dividing the total by the number of grades
    return total / grades.length;
}
// Example usage
const grades = [87, 79, 97, 89, 95];
const averageGrade = calculateAverageGrade(grades);
console.log(`The average grade is: ${averageGrade}`); // Output: The average grade is: 90.6

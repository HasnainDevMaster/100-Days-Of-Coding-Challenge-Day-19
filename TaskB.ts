// 100 Days Of Coding Challenge!

/** Question 56:
Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.*/

//-----------------------------------------------------------------------------------------------------

// Function to filter only strings from an array
function filterStrings(arr: any[]): string[] {
  // Use the filter method to create a new array with only string elements
  return arr.filter((item) => typeof item === "string");
}

// Example usage
const mixedArray = [1, "I am", true, "Learning", 42, "TypeScript"];
const stringArray = filterStrings(mixedArray);

console.log("Only Strings List", stringArray); // Output: Only Strings List [ 'I am', 'Learning', 'TypeScript' ]

let str = "Geeks Gor Geeks"; // Get the string
let index = 6; // Get the index
let ch = 'F'; // Get the character

console.log("Original String = " + str); // Print the original string

// Modify the string
str = str.substr(0, index) + ch + str.substr(index + 1);

console.log("Modified String = " + str); // Print the modified string

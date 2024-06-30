// JavaScript equivalent of the given Java code

// Function to demonstrate insert
function insertDemo(str, ch, k) {
    // Inserts ch at kth index of str
    let modifiedString = str.slice(0, k) + ch + str.slice(k);
    console.log("Modified String: " + modifiedString);
}

// Main function
function main() {
    let str = "GeeksGeeks ";
    let ch = "for";
    let k = 5;

    console.log("Original String: " + str);
    insertDemo(str, ch, k);
}

// Call the main function
main();

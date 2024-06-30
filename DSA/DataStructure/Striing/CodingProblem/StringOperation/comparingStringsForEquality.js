// Function to compare two strings
function stringCompare(str1, str2) {
    const l1 = str1.length;
    const l2 = str2.length;
    const lmin = Math.min(l1, l2);

    // Iterate over the strings and compare characters
    for (let i = 0; i < lmin; i++) {
        const str1_ch = str1.charCodeAt(i);
        const str2_ch = str2.charCodeAt(i);

        if (str1_ch !== str2_ch) {
            return 0; // If characters don't match, return 0
        }
    }

    // If lengths are not equal, return 0
    if (l1 !== l2) {
        return 0;
    } else {
        return 1; // Otherwise, return 1
    }
}

const string1 = "Bangladesh";
const string2 = "Practice";
const string3 = "Bangla";
const string4 = "bangla";

console.log("Comparing", string1, "and", 
             string2, ":", stringCompare(string1, string2));
console.log("Comparing", string3, "and", 
             string4, ":", stringCompare(string3, string4));
console.log("Comparing", string1, "and", 
             string4, ":", stringCompare(string1, string4));
// This code is contributed by Utkarsh.

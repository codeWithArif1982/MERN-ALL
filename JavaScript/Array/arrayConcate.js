let arr = [1, 2, 3, 4, 5];
let arr1 = [6];

console.log("arr = ",arr);
console.log("arr1 ",arr1);
let arr2 = arr.concat(arr1);
console.log("arr2 =  ",arr2);


// Array Form : convert a string into array

let fullName  = "Arif Chowdhuary 1";
let fullNameArray = Array.from(fullName.split(" "));
console.log(fullNameArray);


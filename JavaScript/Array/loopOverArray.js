let categories = ["A", "B", "C"];
console.log("Using Traditional for loop over array");
for (let i = 0; i < categories.length; i++) {
    console.log(categories[i]);
}

console.log("Using for in loop over array");
for (const category in categories) {
    console.log(categories[category]);
}

console.log("Using for of loop over array");
for (const category of categories) {
    console.log(category);
}
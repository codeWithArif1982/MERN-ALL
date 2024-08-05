const persons = {
    fName: "Arif",
    lName: "Chowdhuary",
    age: 30,
    address : "600 SW 67th Terrace",
    city : "Pembroke Pines",
    zipCode: "33023",
    state: "FL"
}

for (const person in persons) {
    console.log(persons[person])
}
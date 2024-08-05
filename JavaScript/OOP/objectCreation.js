// Object creation by object literal (Key Value pair)
let person = {
    fistName : "Arif",
    lastName : "Chowdhuary",
    age : 42,
    city : "Pembroke Pines",
    getName:()=>{
        console.log(`My full name is ${person.fistName} ${person.lastName}`);
    }
}

// Object creation by instance of Object
let persons = new Object();
persons.fistNames = "Sumon";
persons.lastNames= "Chowdhuary";
persons.ages = 43;
persons.cities = "Pembroke Pines";
persons.getNames = ()=>{
    console.log(`My full name is ${person.fistNames} ${person.lastNames}`);
}
// Object creation by object constructor

function person1() {
        this.fistNam = "A",
        this.lastNam = "Chowdhuary",
        this.age1 = 42,
        this.citys = "Pembroke Pines",
        this.getNam= ()=>{
        console.log(`My full name is ${this.fistNam} ${this.lastNam}`);
    }
}

let personInstance = new person1();
console.log(personInstance.fistNam)
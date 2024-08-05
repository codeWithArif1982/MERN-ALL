let array1 =[11,2,3,4,5,6,7,8,9,10];

let arrayFind = array1.find(function(item){
    return item == 11
});
let arrayFindIndex = array1.findIndex(function(item){
    return item ==1
});
console.log(arrayFind);
console.log(arrayFindIndex);
// 1. Comment
// Single Line Comment
/* Multi Line Comment */
"use strict";

// 2. Fruits Sorted

let inpArray = ['Apple', 'Strawberry', 'Mango', 'Orange', 'Banana'];
document.getElementById("inputdata2").innerHTML = `Fruit Items : ${inpArray}`;
// Fruit Sort
function fruitSort() {
    let sortArray = inpArray.sort((a, b) => b.localeCompare(a));
    document.getElementById("outputdata2").innerHTML = `Descending Order Fruit Items : ${sortArray}`
}

// 3. For/In Loop 

let course = ['Html', 'Css', 'Js', 'React.js', 'Node.js', 'Mongodb', 'Express'];
function looping() {
    for (let data in course) {
        console.log(course[data]);
    }
}

// 4. Create an object "person" with properties firstname and lastname. Display these properties using 2 different ways of accessing.

let obj = {firstname:"Ramya",lastname:"M"};
// Acessing Element : Dot Notation, Bracket Notation
// Dot Notation
document.getElementById("output4").innerHTML = `Firstname : ${obj.firstname}, Lastname : ${obj.lastname}`;
// Bracket Notation
document.getElementById("output5").innerHTML = `Firstname : ${obj["firstname"]}, Lastname : ${obj["lastname"]}`;

//5. Write a program with variable hoisting(initialization first then declaration).
// Intialization
a = 1611;
// Declarartion
var a;
// Print
document.getElementById("output6").innerHTML = `Value is : ${a}`;

//6. Use strict mode in your program and understand why variable not declared causes error.
var c=9876;
document.getElementById("output7").innerHTML = `Strict Mode : By using Var : ${c}`;
b = 98;
console.log(b)









// console.log("ES6 file is running");
// /* VAR, LET, CONST DEFINATIONS */
// var nameVar = "Jen";
// nameVar = "John";   // Allowed
// var nameVar = "Robert"; // Allowed
// console.log("nameVar", nameVar);

// let nameLet = "Jenny";
// nameLet = 'Peter';
// // let nameLet = "Roman";  // Not Allowed
// console.log('nameLet', nameLet);

// const nameConst = 'Sam';
// // nameConst = "Steve";
// // const nameConst = "Jef";
// console.log("nameConst", nameConst);

// /* VAR, LET, CONST FUNCTION-SCOPE */

// function getPetName() {     // Scope is limited to the function
//     var petName = "Cherry";
//     // let petName = "Cherry";
//     // const petName = "Cherry";
//     return petName;
// }
// console.log(getPetName());

/* VAR, LET, CONST BLOCK-SCOPE */

var fullName = "Andrew Mead";

// if (fullName) {     // VAR can access outside the bock
//     var firstName = fullName.split(" ")[0];
//     console.log(firstName);
// }
// console.log(firstName);  // Allowd

let firstName;  // Solution

if (fullName) {     // LET & CONST can't access outside the bock
    firstName = fullName.split(" ")[0]; // Problem 
    console.log(firstName);
}
console.log(firstName); // Not Allowd








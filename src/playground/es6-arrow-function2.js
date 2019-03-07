console.log("Arrow Function Part 2 is running");

// arguments object - no longer bound with arrow functiions

// const add = function (a, b) {
//     // console.log(arguments);
//     return a + b;
// };

// console.log(add(5, 4, 1000));


// this keyword - no longer bound

// const user = {
//     name: "Andrew",
//     cities: ['New York', "USA", 'London'],
//     printPlacesLives() {
//         return this.cities.map((city) => this.name + " has lived in " + city)
//     }
// };

// console.log(user.printPlacesLives());

const multiplier = {
    numbers: [2, 3, 4],
    multiplyBy: 10,
    multiply() {
        return this.numbers.map((number) => this.multiplyBy * number);
    }
};

console.log(multiplier.multiply());
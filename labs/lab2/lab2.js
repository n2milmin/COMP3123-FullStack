/*************************************************************************
 * 
 * Nicole Milmine 
 * 101462077
 * 
 * Lab 2
 * COMP3123
 * 
 *************************************************************************/

// Exercise 1
// Re-write the following code block using ES6 syntax, ie. const, let, 
//      arrow function, template literals, for..of
const greeter = (myArr) => {
    for (const index of myArr){
        console.log("Hello " + index);
    }
}

greeter(['Randy Savage', 'Ric Flair', "Hulk Hogan"]);


// Exercise 2
// Using destructuring asignment syntax and the spread operator, write
//      a function that will capitalize the first letter of a string
function capitalize(s) { return s[0].toUpperCase() + s.slice(1); }

console.log(capitalize('fooBar'));
console.log(capitalize('nodeJS'));


// Exercise 3
// Using array.proto.map create function to use the capitalize method
//      in Exercise 2 to upper case the first char of each Colour
const colours = ['red', 'green', 'blue'];
const capitalizedColours = colours.map(c => capitalize(c));

console.log(capitalizedColours);


// Exercise 4
// Using array.protp.filter create afunction that will filter out all
//      the values of the array that are less than 20
var values = [1,60,34,30,20,5];
const filterLessThan20 = values.filter(value => value < 20);

console.log(filterLessThan20);


// Exercise 5
// Using array.proto.reduce create calculate the sum and product of a
//      given array 
var array = [1,2,3,4];

const calculateSum = array.reduce((acc, curr) => acc + curr);
const calculateProduct = array.reduce((acc, curr) => acc * curr);

console.log(calculateSum);
console.log(calculateProduct);


// Exercise 6
/* Using ES6 syntax or class and subclass using extends to create a Sedan
      subclass which derives from Car Class. The parameters for the Car
      class is the model and year. The parameters for the subclass is the
      model, year and balance.
   Use the super key word in the Sedan class to set the model and name in 
      base Car constructor. */
class Car {
    constructor(model, year){
        this.model = model;
        this.year = year;
    }

    setModel(m) {this.model = m;}
    getModel() {return this.model;}

    setYear(y) {this.year = y;}
    getYear() {return this.year; }

    details(){
        return "Model: " + this.model + " Engine " + this.year;
    }
}

class Sedan extends Car{
    constructor(model, year, balance){
        super(model, year);
        this.balance = balance;
    }

    setBalance(b) {this.balance = b; }
    getBalance() { return this.balance; }

    info(){
        return (this.model + " has a balance of $" + this.balance);
    }
}


const car2 = new Car('Pontiac Firebird', 1976);
console.log(car2.details());

const sedan = new Sedan('Volvo, SD', 2018, 30000);
console.log(sedan.info());
// npm install prompt-sync
//const prompt=require("prompt-sync")({sigint:true})

/***************************************************** 
// Variable Substitution
let fN = "John";
let lN = "Smith";
let fullName = `Welcome ${fN}, ${lN}!`;
console.log(fullName);
/***************************************************** */


/***************************************************** */
// Arrow Functions - normal functions
function myFun(){ console.log("Hello"); }
myFun();

function myFun2(a) {return a+2;}
var v=myFun2(3);
console.log(v);

// asign function to variable
var hello = function () { console.log("1. Hellpp World!"); }
hello();

hello = function() { return "2. Hellow World!"; }
console.log(hello());

// we can't use arror function non-returnable function bc the value of the var will be undefined
var hello = () => { console.log("temp: Hello World!"); }
hello();
//console.log(hello());

hello = () => { return "3. Hello World!"; }
console.log(hello());

// arrow functions with return value: there is no need return statment 
hello = () => "4. Hello World!";
console.log(hello());

// with parameter 
hello = (val) => "Hello " + val;
console.log(hello("Ali"));

// parenthesis could also be removed when there is only one parameter
hello = val => "Hello " + val;
console.log(hello("Ali"));

// Two parameters
function add(a,b) { return a+b; }
console.log("Using normal function ", add(2,3));

const addArrow = (a,b) => a + b;
console.log("Using arrow function: ", addArrow(2,3));

// use substitution
let currencu = n => `$${n}`
console.log(currencu(80))


/****************************************************** */
// Spread Operator 
// the JS spread operator (...) allows us to quickly copy all or part of an existing aray or obj into another 
const arrOne = [1,2,3];
const arrTwo = [4,5,6];
const arrComb = [...arrOne, ...arrTwo];
console.log(arrComb);

// the spread operator is oftuen used in combination with destructuring
const Num = [1,2,3,4,5,6];
const [v1, v2, ...remain] = Num;
console.log(v1, v2," - ", remain);

// Split string
var s = "Hello";
var arrS = s.split("");
console.log(arrS);

// join array
var s2 = arrS.join(",");
console.log(s2);

// Spread operator with functions 
var myArr = [1,8,5,7];
const addTwoToFirstItem = ([v1, ...rem]) => v1+2;
console.log("Adding to myArr: " + addTwoToFirstItem(myArr));

function capFC1(s) { return s[0].toUpperCase() + s.slice(1); }
console.log(capFC1("hello"));
const capFC2 = ([fl, ...rw]) => fl.toUpperCase() + rw.join("");
console.log(capFC2("hello"));


/****************************************************** */
// Array.prototype.map
// The map() method creates a new array by applying a given function to each element of the origoinal arr
var num = [1,4,9,4,16];
var newNum = num.map(n => Math.sqrt(n));
console.log(newNum);

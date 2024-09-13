console.log("Hello");

// npm install prompt-sync
var prompt = require("prompt-sync")({sigint:true});

/*var msg = prompt("Input your name: ");
console.log("Hi: ", msg);

**********************************************************************************

var x = 10;
let y = 12;

var z = x+y;
console.log(z);
console.log(y-x);
console.log(x*y);
console.log(x/y);
console.log(Math.pow(10,3));

*********************************************************************************

var m = prompt("input your mark: ");

if (m>=50 && m<=100)
{
    if (m>=75)
        console.log("Very good!");
    else if (m>=50)
        console.log("Pass");
    else
        console.log("Fail");
}
else
    console.log("Invalid");


m=parseInt(m);
switch(m){
    case 75:
        console.log("Very good!");
        break;
    case 50:
        console.log("Pass");
        break;
    default:
        console.log("Invalid");
        break;
}

*********************************************************************************

for (var i=1; i<=5; i++)
{
    console.log("i: ",i);
}

var j = 5;
while (j>=0){
    if (j==3)
        break;
    console.log("j: ",j);
    j--;
}


var myCars = ["BMW", "FORD", "MAZDA"];
//console.log(myCars);
for (var i=0; i<myCars.length; i++)
    console.log(myCars[i]);

*********************************************************************************

function myFun1(){
    console.log("Hello from myFun1");
}

myFun1();

function myFun2(){
    return "Hello from myFun2";
}

var ret = myFun2();
console.log(ret);

function myFun3(a,b){
    return a+b;
}

console.log(myFun3(4,5));

*********************************************************************************/

var name = "Moe";

console.log(name.length);
for (var i=0; i<name.length; i++){
    console.log(name.charAt(i));
}

var str = "How are you doing?";
var strArr = str.split(" ");
for (var i=0; i<strArr.length; i++){
    console.log(strArr[i]);
}

var part1 = str.substring(4);
console.log(part1);

var part1 = str.substr(4,3);
console.log(part1);

var str2 = str.toUpperCase();
console.log(str2);

var str3 = str.toLowerCase();
console.log(str3);

// let & var 

const pi =  3.14;
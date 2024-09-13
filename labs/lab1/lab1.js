/***********************************************************************
 * 
 *  COMP3123
 *  Lab 1 - Sept 8th
 * 
 *  Nicole Milmine
 *  101462077
 * 
************************************************************************/

// Exercise 1 - Write a JS program to capitalize the first letter of each word of a given string

function capFirstLetter(str){
    var strArr = str.split(" ");
    str = "";

    for (var x=0; x<strArr.length; x++){
        strArr[x] = strArr[x].charAt(0).toLocaleUpperCase() + strArr[x].substr(1, strArr[x].length);
        str += strArr[x] + " ";
    }

    return str;
}

console.log(capFirstLetter("the quick brown fox"));


// Exercise 2 -write a JS program to find the largest of 3 given integers

function max(a,b,c){
    let givenInt = [a,b,c];
    let largest = null;

    for (var x=1; x<3; x++){
        if (givenInt[x] > largest)
            largest = givenInt[x];
    }

    return "The largest number is: " + largest;
}

console.log(max(1,0,1));
console.log(max (0,-10,-20));
console.log(max (1000,510,440));


// Exercise 3 - write a JS program to move the last 3 characters to the strart of a string

function right(str){
    if (str.length < 3)
        return "String too short.";
    
    return str.substr(str.length-3, str.length) + str.substr(0, str.length-3);
}

console.log(right("Python"));
console.log(right("JavaScript"));
console.log(right("Hi"));


// Exercise 4 - write a JS program to find the types of a given angle 

function angle_Type(x){
    switch (x){
        case 181:
            return "Obtuse Angle";
        case 180:
            return "Straight Angle";
        case 90:
            return "Right Angle";
        default:
            return "Acute Angle";
    }
}

console.log(angle_Type(47));
console.log(angle_Type(90));
console.log(angle_Type(145));
console.log(angle_Type(180));


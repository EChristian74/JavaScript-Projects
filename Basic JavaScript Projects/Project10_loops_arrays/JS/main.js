function strlenFunction() {  //String length function
    var str = "supercalifragilisticexpialidocious!";  //Declares string variable to be analyzed
    var n = str.length;  //Declares string length variable
    document.getElementById("string").innerHTML = n;  //Call to execute string length operation
}

function Call_Loop() {  //While loop
    var clothing = ["Shirt", "Pants", "Shoes", "Belt"];  //Declares call loop array elements
    var text = "";  //Declares loop variable 1
    var i = 0;  //Declares loop variable  2
    while (i < clothing.length) {  
        text += clothing[i] + "<br>";
        i++;  //Declares loop to validate specific condition
        }
    document.getElementById("Loop").innerHTML = text;  //Call to execute call loop
}

function for_Loop() {  //For loop with constant array 
    const instruments = ["Hammer", "Hand Saw", "Plyers", "Straighthead Screwdriver", "Phillips Screwdriver", "Chisel", "Socket Set", "Tape Measure"];  //Declares array elements
    let text = "";  //Declares limited scope variable
    for (let i = 0; i < instruments.length; i++) {  //Statement to create a loop iterating over iterable objects
    text += instruments[i] + "<br>";  //Assignment of loop result + addition assignment operator ( += )
    }
    document.getElementById("List_of_Tools").innerHTML = text;  //Call to execute for loop
}

function array_Function() {  //Array function
    let arr = ["Gender: Male", "Age: 35", "Height: 6 feet 1 inch", "Weight: 185 lbs", "Hair Color: Blonde"];  //Declares array elements
    alert( arr[0]);  //Declares array element Gender
    alert( arr[1]);  //Declares array element Age
    alert( arr[2]);  //Declares array element Height
    alert( arr[3]);  //Declares array element Weight
    alert( arr[4]);  //Declares array element Hair Color
    document.getElementById("Array").innerHTML = arr;  //Call to execute array alerts
}

function constant_Function() { //Constant array + property change + proprty add
    const car = {type:"Fiat", model:"500", color:"white"}; //Declares const array elements
    car.color = "blue";  //Change const property color
    car.owner = "Jay Leno";  //Add const property owner
    document.getElementById("Constant").innerHTML = "That car on TV is a " + car.color + " " + car.type + " " + car.model +  " " + "and the owner is " + car.owner + ".";  //Call to execute const method 
}

var x = returnFunction(12, 5);  //Declares variable for return function

function returnFunction(a, b) {  //Return function
    return a * b;  //Declares return method
    }
    document.getElementById("Return").innerHTML = x;  //Call to execute return

let guitar = {  //Declares variable for let return
    make: "DW ",  //Creates property "make"
    model: "Collectors Series",  //Creates property "model"
    year: "2021 ",  //Creates property "2021"
    description : function() {  //Defines statement for let return
        return "The NAMM top drumkit of " + this.year + "is the " + this.make + this.model + ".";  //Defines return method
    }
};
document.getElementById("Drum Object").innerHTML = guitar.description();  //Call to display statement and execute return

function breakFunction() {  //Break function
    var text = "";  //Declares data type
    var i;  //Creates variable to analyze for loop
    for (i = 0; i < 10; i++) {  //Defines loop parameters
        if (i === 7) {  //Defines loop exit criteria
            break;  //Instruction to exit loop
        }
    text += "The number is " + i + "!" + "<br>";  //Defines loop statement
    }
    document.getElementById("Break").innerHTML = text;  //Call to display text and execute loop
}

function continueFunction() {  //Break function
    var text = "";  //Declares data type
    var i = 0;  //Declares variable for analysis
    while (i < 10) {  //Instruction to repeat loop unknown number of times until if condition is met
        i++;  //Declares value of i before increment  
        if (i === 7) {  //Defines variable to skip prior to continuing loop
            continue;  //Instruction to continue loop after skipping number 7
        }
    text += "<br> The number is " + i;  //Defines loop statement
    }
    document.getElementById("Continue").innerHTML = text;  //Call to display text and execute loop
}





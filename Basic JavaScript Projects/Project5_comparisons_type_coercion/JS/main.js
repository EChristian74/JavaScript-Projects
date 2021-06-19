
function typeof_Function() {   //Function to create index = 25;
    var index = 25;   //Variable to define index value
    var result = (typeof index === 'number');   //Variable to define result value
    alert(result);   // Output: true
    document.write(typeof "number");  //Method to output value
    document.getElementById("typeof").innerHTML = 25;  //Call to execute varable data type
}

document.write("<br>")  //Inserted a blank line

function coercion_Function() {   //Function to create coercion string to number conversion
    var w = 25 - '5';   // The string '5' is converted to number 5 in all cases implicitly 
    var x = 25 * '5';
    var y = 25 / '5';
    var z = 25 % '5';
    document.write(w);
    document.write("<br>")
    document.write(x);
    document.write("<br>")
    document.write(y);
    document.write("<br>")
    document.write(z);    
    document.getElementById("coer");  //Call to execute data type converstion
}

document.write("<br>")  //Inserted a blank line

function displayNaN_Function() {   //Function to display NaN = true
    var res = "";   //Parameter to define NaN variable container
    res = res + isNaN(NaN) + ": NaN<br>";   //Statement to define resolution method
    document.getElementById("NaN").innerHTML = res;  //Call to display NaN
}

function NaNtrue_Function() {   //Function to display NaN = true
    var res = "";   //Parameter to define Nan variable container
    res = res + isNaN('') + ": Not Number<br>";   //Statement to define resolution method
    document.getElementById("true").innerHTML = res;  //Call to display NaN = true
}

function NaNfalse_Function() {   //Function to display NaN = false
    var res = "";   //Parameter to define NaN variable container
    res = res + isNaN(20-13) + ": 20-13<br>";   //Statement to define resolution method
    document.getElementById("false").innerHTML = res;  //Call to display NaN = true
}

function infinity_Function() {   //Function to write number to display infinity
    var t1=1.7976931348623157E+10308;   //Define infinity variable 
    document.getElementById("positive").innerHTML = t1;    //Call to evaluate number for infinity
}   
    
function neginfinity_Function() {    //Function to write number to display -infinity
    var t2=-1.6802549634723589E+25622;  //Define -infinity variable
    document.getElementById("negative").innerHTML = t2;   //Call to evaluate number for -infinity
}       
    
function boolean1_Function() {    //Function to display greater than (true)
    let x = 25;  //Define variable to perform greater than operation
    document.getElementById("greater").innerHTML = (x > 18);   //Call to evaluate greater than operation
}   

function boolean2_Function() {    //Function to display lesser than (false)
    let y = 17;  //Define variable to perform lesser than operation
    document.getElementById("lesser").innerHTML = (y < 8);   //Call to evaluate lesser than operation
}  

function console_Function() {    //Function to display console.log math operation
    var x = 38;   //Define variable 1 for math operation
    var y = 13;   //Define variable 2 for math opertion
    var z = 38 - 13;   //Define variable 3 to execute math operation
    console.log (x - y);  //Method to execute console.log math operation
    document.getElementById("console").innerHTML = z;   //Call to evaluate lesser than operation
}  

function conbool_Function() {    //Function to display false using boolean in console.log
    var x = 48;   //Define variables 1 for boolean comparison
    var y = 23;   //Define variables 2 for boolean comparison
    var z = 48 < 23;    //Define variable 3 to execute comparison
    console.log (x - y);  //Method to execute console.log comparison
    document.getElementById("conbool").innerHTML = z;   //Call to evaluate lesser than operation
}  

function dbeqtrue_Function() {    //Function to display double equal true operation
    let x = 42;  //Define variable for double equal true operation
    document.getElementById("dbeqt").innerHTML = (x == 42);   //Call to execute operation
}  

function dbeqfalse_Function() {    //Function to display double equal false operation
    let y = 21;  //Define variable for double equal false operation
    document.getElementById("dbeqf").innerHTML = (y == 38);   //Call to execute operation
} 

function tripeq1_Function() {    //Function to return true for data type and value using triple equal
    var x = 12;   //Define value of variable 1
    var y = 12;   //Define value of variable 2
    document.getElementById("tpq1").innerHTML = (x === y);   //Call to execute operation
} 

function tripeq2_Function() {    //Function to return false by writing different data type and value using triple equal
    var x = 12;   //Define value of integer variable
    var y = "Four";   //Define value of text variable
    document.getElementById("tpq2").innerHTML = (x === y);   //Call to execute operation
} 

function tripeq3_Function() {    //Function to return false by writing different data type, but same value using triple equal
    var x = 12;   //Define value of integer variable
    var y = "Twelve";   //Define value of text variable
    document.getElementById("tpq3").innerHTML = (x == y);   //Call to execute operation
} 

function tripeq4_Function() {    //Function to return false by writing same data type, but different value using triple equal
    var x = 12;   //Define value of integer variable
    var y = 33;   //Define value of integer variable
    document.getElementById("tpq4").innerHTML = (x == y);   //Call to execute operation
} 

function andtrue_Function() {    //Function to return true utilizing AND operator
    var x = (12 >= 4);   //Define value of variable 1
    var y = (43 >= 9);   //Define value of variable 2
    document.getElementById("andtrue").innerHTML = (x && y);   //Call to execute operation
} 

function andfalse_Function() {    //Function to return false utilizing AND operator
    var x = (102 < 58);   //Define value of variable 1
    var y = (82 < 41);   //Define value of variable 2
    document.getElementById("andfal").innerHTML = (x && y);   //Call to execute operation
} 

function ortrue_Function() {    //Function to return true utilizing OR operator
    var z = (5 > 2 || 29 < 64);   //Defines variable for OR true comparison
    document.getElementById("ort").innerHTML = z;   //Call to execute operation
} 

function orfalse_Function() {    //Function to return false utilizing OR operator
    var z = (63 > 100 || 48 > 57);   //Defines variable for OR false comparison
    document.getElementById("orf").innerHTML = z;   //Call to execute operation
} 

function nottrue_Function() {    //Function to return true utilizing NOT operator
    var z = !(100 >= 120);   //Defines variable for NOT true operation
    document.getElementById("nott").innerHTML = z;   //Call to execute operation
} 

function notfalse_Function() {    //Function to return false utilizing NOT operator
    var z = !(22 > 13);   //Defines variable for NOT false operation
    document.getElementById("notf").innerHTML = z;   //Call to execute operation
} 



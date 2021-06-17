function addition_Function()    {   //Function to add
    var addition = 505 + 789;   //Variable to define values
    document.getElementById("math").innerHTML = "505 + 789 =" + addition;  //Call to execute operation
}

function subtraction_Function()    {    //Function to subtract
    var x = 652;    //Variable to define value 1
    var y = 882;    //Variable to define value 2
    var z = x - y;  //Variable to define value 3
    document.getElementById("subtract").innerHTML = z;  //Call to execute operation
}

function multiply_Function()    {   //Function to multiply
    var x = 25;     //Variable to define value 1
    var y = 33;     //Variable to define value 2
    var z = x * y;  //Variable to define value 3
    document.getElementById("multiply").innerHTML = z;  //Call to execute operation
}

function division_Function()    {   //Function to divide
    var x = 271;    //Variable to define value 1
    var y = 8;      //Variable to define value 2
    var z = x / y;  //Variable to define value 3
    document.getElementById("divide").innerHTML = z;    //Call to execute operation
}

function more_Function()    {   //Function to perform multiple mathematical operations
    var various_ops = (42 + 33) * 6 / 2 - 15;   //Variable to define values and multiple operations 
    document.getElementById("more").innerHTML = "42 + 33, multiplied by 6, divided in half and then subtracted by 15 equals " + various_ops;    //Call to execute operation
}

function mod_Function()    {    //Function to divide using the modulus operator
    var mod_Math = 81 % 12;     //Variable to devision values and problem
    document.getElementById("mod").innerHTML = "When you divide 81 by 12 you have a remainder of: " + mod_Math; //Call to execute operation
}

function negop_Function()    {  //Function to perform negation operation
    var n = 482;    //Variable to define value from which to generate opposite value
    document.getElementById("negop").innerHTML = -n;    //Call to execute operation
}

function incre_Function()    {  //Function to execute increment
    var i = 28;     //Variable to define increase by 1
    i++;            //Increment operation
    document.getElementById("inc").innerHTML = i;   //Call to execute operation
}

function decre_Function()    {  //Function to execute decrement
    var i = 47.62;  //Variable to define value to decrease by 1
    i--;    //Decrement operation
    document.getElementById("dec").innerHTML = i;   //Call to execute operation
}

function random_Function()    {  //Function to generate random number between 1 and 100
    var mr = (Math.random() * 100);  //Variable to define random operation
    document.getElementById("ran").innerHTML = mr;  //Call to execute operation
}

function mathob_Function()    {   //Function to calculate 8 to the second power
    var mb = (Math.pow(8, 2));    //Variable to define power operation
    document.getElementById("mob").innerHTML = mb;  //Call to execute operation
}
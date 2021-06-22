function concat_Function() {   //Function to concatenate 3 values
    var str1 = "Top of ";   //Defines variable 1
    var str2 = "the morning ";   //Defines variable 2
    var str3 = "to you!";   //Defines variable 3
    var res = str1.concat(str2, str3);  //Defines operation to join variables
    document.getElementById("concat").innerHTML = res;   //Calls join operation
}

function slice_Function() {   //Function to perform slice operation
    var chores = [" Buy Groceries", " Mow Lawn", " Wash Car", " Clean House", " Take Out Trash"];   //Defines chore list variables
    var toDo = chores.slice(1, 3);   //Defines operation to extract variables
    document.getElementById("slice").innerHTML = toDo;   //Calls extraction operation
}

function toUpperCase_Function() {   //Function to perform toUpperCase change
    var str = "Booyah!";   //Defines variable for case change
    var res = str.toUpperCase();   //Defines operation for case change
    document.getElementById("toUC").innerHTML = res;   //Calls case change operation
}

function search_Function() {   //Function to perform case in-sensitive search
    var str = "Somewhere over the rainbow.";   //Defines variable to locate in search
    var x = str.search(/rainbow/i);   //Defines operation for word search
    document.getElementById("srch").innerHTML = x;   //Calls case search operation
}

function numstring_Function() {   //Function to return a number in various base number system
    var num = 182;  //Defines number to convert to each base system
    var a = num.toString();     //Defines base 1 - same as original variable
    var b = num.toString(2);    //Defines base 2 - binary
    var c = num.toString(8);    //Defines base 3 - octal
    var d = num.toString(16);   //Defines base 4 - hexidecimal
    var n = a + "<br>" + b + "<br>" + c + "<br>" + d;   //Defines conversion operation
    document.getElementById("numstr").innerHTML = n;   //Calls conversion operation
}

function numstring_Function() {   //Function to return a number in various base number system
    var num = 182;  //Defines number to convert to each base system
    var a = num.toString();     //Defines base 1 - same as original variable
    var b = num.toString(2);    //Defines base 2 - binary
    var c = num.toString(8);    //Defines base 3 - octal
    var d = num.toString(16);   //Defines base 4 - hexidecimal
    var n = a + "<br>" + b + "<br>" + c + "<br>" + d;   //Defines conversion operation
    document.getElementById("numstr").innerHTML = n;   //Calls conversion operation
}

function numlength_Function() {   //Function to display only 9 of the first 18 digits of pi
    var num = 3.141592653589793238;   //Defines variable to be formatted (first 18 digits of pi)
    document.getElementById("numlen").innerHTML = num.toPrecision(9);   //Call to format number
}

function valueOf_Function() {   //Function display "primitive" value that is not an object and has no methods
    var str = "supercalifragilisticexpialidocious!";   //Defines variable to for primitive return
    var res = str.valueOf();   //Defines operation to "get" and "return" variable
    document.getElementById("valof").innerHTML = res;   //Call to display primitive value
}
    
    
    
   
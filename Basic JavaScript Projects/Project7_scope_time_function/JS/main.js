var X = 25;   //Define global variable for debugging exercise
function Add_numbers_1() {    //Function 1
    var A = 42;    //Define variable 
    document.getElementById("demo1").innerHTML = (A + X + "<br>");  //Call to execute operation 1
}
function Add_numbers_2() {   //Function 2
    var B = 102;   //Define variable
    document.getElementById("demo2").innerHTML = (C + 100);   //Call to execute operation 2 - intentionally inserted "C" value to cause error that I viewed in console.log() - replacing "C" with "B" corrects the error
} 

Add_numbers_1();
Add_numbers_2();
console.log(X)  //Debugging operation

function get_Register_Event() {  //Function on step 148 modeled after example on Step 147
    if (new Date() .getHours() > 12)    {   //Defines value and time condition
    document.getElementById("get").innerHTML = "You many now register for the conference event.";   //Call to execute operation
    }
}

function user_input_Function()   {  //Function for if statement
    var a=document.getElementById("text_a").value;     //Define unique identifier variable
    if (a=="true")   //Defines value of condition if meets criteria
    document.getElementById("answer").innerHTML="Correct!";   //Calls response to user input
}

function age_Discount () {  //Function for if and else statements
    var age = document.getElementById("myInput").value;    //Defines unique identifier variable + gathers uer input
    if (age >= 35)   {  //Defines value of condition if meets criteria
        document.getElementById("response").innerHTML="Qualifies for age discount.";    //Calls response to user input if meets criteria
    }
    else    {   //Define response if prior condition not met
        document.getElementById("response").innerHTML="Does not qualify for age discount.";    //Calls response to user input if does not meet prior criteria
    }
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0)  {   //Defines condition outside of afternoon and evening
    }
    else if (Time >= 12 == Time < 18)   {   //Defines value condition for afternoon
        Reply = "It is afteroon.";  //Defines reply response if meets criteria
    }
    else    {
        Reply = "It is evening time.";  //Defines reply if value condition not met
    }
    document.getElementById("Time_of_day").innerHTML = Reply;   //Calls response to user input 
}

         

function Ride_Function() {  //Function to determine if eligible to ride amusement park ride
    var Height, Can_ride;   //Define ride rule key
    Height = document.getElementById("Height").value;   //Link ride rule key to click button 
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";   //Define ride rule value
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";   //Call to execute rule
}

function Vote_Function() {  //Function to determine if eligible to vote 
    var Age, Can_vote;  //Define vote rule key
    Age = document.getElementById("Age").value;  //Link vote rue key to click button
    Can_vote = (Age < 18) ? "You are not old enough":"You can vote!";   //Define vote rule value
    document.getElementById("Vote").innerHTML = Can_vote;   //Call to execute rule
}

function Vehicle(Make, Model, Year, Color)  {   //Function to establish object constructor
    this.Vehicle_Make = Make;   //Creates object attribute Make
    this.Vehicle_Model = Model; //Creates object attribute Model
    this.Vehicle_Year = Year;   //Creates object attribute Year
    this.Vehicle_Color = Color; //Creates object attribute Color
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");  //Defines variable Jack + links to object
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black"); //Defines variable Emily + links to object
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard"); //Defines variable Erik + links to object
function myFunction() {   //Function that executes object construction based on user input
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;  //Returns a value statement per user input
}

function switchFunction() { //Function that creates switch statement to evaluate an expression created based on user input
    var text;
    var fruits = document.getElementById("myInput").value;  //Executes expression based on user input
  
    switch(fruits) {    //Defines expression variables
      case "Banana":
        text = "Banana is good!";
      break;
      case "Orange":
      text = "I am not a fan of orange.";
      break;
      case "Apple":
      text = "How you like them apples?";
      break;
      default:
      text = "I have never heard of that fruit...";
    }
    document.getElementById("switch").innerHTML = text;  //Returns a value statment per user input
}

function Drum(Make, Model, Year, Color)  {   //Function to establish object constructor
    this.Drum_Make = Make;   //Creates object attribute Make
    this.Drum_Model = Model; //Creates object attribute Model
    this.Drum_Year = Year;   //Creates object attribute Year
    this.Drum_Color = Color; //Creates object attribute Color
}
var Dave = new Drum("Yamaha", "PHX-Phoenix", 2021, "Sunburst");  //Defines variable Dave Weckl + links to object
var Buddy = new Drum("DW", "Collectors", 1985, "Ivory"); //Defines variable Buddy + links to object
var Vinnie  = new Drum("Ludwig", "980P Super Classic", 2020, "Burgundy"); //Defines variable Vinnie + links to object
function drumFunction() {   //Function that executes object construction based on user input
    document.getElementById("Keywords_and_Constructors_2").innerHTML = "Vinnie Colaiuta tours for Jeff Beck with a " + Vinnie.Drum_Color + "-colored " + Vinnie.Drum_Model + " drum kit manufactured in " + Vinnie.Drum_Year + ".";  //Returns a statment of concatenated variables
}

function sayHiBye(firstName, lastName) {    //Function to execute nested function operation
    var firstName = "Eric";     //Defines first variable for nested function
    var lastName = "Boland";    //Defines second variable for nested function    
    function getFullName() {    //Nested function to execute operation to "getFullName" 
        return firstName + " " + lastName;  
    }
    alert( "Hello, " + getFullName() );   //Defines first alert message
    alert( "Bye, " + getFullName() );     //Define second alert message  
    document.getElementById("Nested_Function").innerHTML = "";   //Executes operation that uses functions to "get" variables, joins, the generates alert messages
}






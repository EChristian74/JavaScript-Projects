function myFunction1() {  //Function to change text color via button
  var x = document.getElementById("demo");  //Variable defined to call function
  x.style.color = "red";  //Value assigned to variable
}

document.write("<br><br>")  //Inserted a blank line

function myFunction2()  { //Function to display concatenated sentence via button
  var sentence = "I am learning to";  //Variable defined to call function
  sentence += " become a software developer.";  //Value assigned to variable = concatenate
  document.getElementById("Concatenate") .innerHTML = sentence; //Call function
}

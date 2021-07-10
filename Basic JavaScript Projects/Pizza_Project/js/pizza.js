function getReceipt() {
    // This intializes our string so it cn get passed from
    // function to function, growing line by line into a full receipt
    var text1 = "<h3>You Ordered:</h3>";  // Creates Label that will highlight total cost once all selections are made
    var runningTotal = 0;  // Variable that will store a running total in memory as seletions are made
    var sizeTotal = 0;  // Variable that will call base pizza cost based checkbox selection
    var sizeArray = document.getElementsByClassName("size");  // 
    for (var i = 0; i < sizeArray.length; i++) {  // Establishes link between pizza sizes and booleans that will be used for pizza size selection
        if (sizeArray[i].checked) {  // Statement that iniates the following loop once a checkbox is selected for pizza size
            var selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"<br>";
        }
    }
    // Loop and array that defines cost (value) of pizza by size
    if (selectedSize === "Personal Pizza") {  // Assigns a value for Personal Pizza cost 
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {  // Assigns a value for Small Pizza cost
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {  // Assigns a value for Medium Pizza cost
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {  // Assigns a value for Large Pizza cost
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {  // Assigns a value for Extra Large Pizza cost
        sizeTotal = 16;
    } else if (selectedSize === "Humongo Large Pizza") {  // Assigns a value for Humongo Pizza cost
        sizeTotal = 24;
    }

    // Code that calls/prints on-screen printed details for pizza size selection
    runningTotal = sizeTotal;  // 
    console.log(selectedSize+" = $"+sizeTotal+".00"); 
    console.log("size text1: "+text1);
    console.log("subtotal: $"+runningTotal+".00");
    // These varibales will get passed on to each function
    getTopping(runningTotal,text1);
};

// This handles the work of defining, calling, and printing on-screen topping selections
function getTopping(runningTotal,text1) {
    var toppingTotal = 0;  // Variable that will serve to tally the number of toppings
    var selectedTopping = [];  // Variable that will be used to create an array of selected toppings
    var toppingArray = document.getElementsByClassName("toppings");  // Variable that will call topping array
    for (var j = 0; j < toppingArray.length; j++) {  // Defines operation that will add up toppings using increment operator and return a 
        if (toppingArray[j].checked) {  // Creates topping array
            selectedTopping.push(toppingArray[j].value); 
            console.log("selected topping item: ("+toppingArray[j].value+")");  // Code that calls/prints on-screen topping selections
            text1 = text1+toppingArray[j].value+"<br>";
        }
    }

    // Tallies the count of topping selections that will be used to perfoprm mathematical operation to generate final cost 
    var toppingCount = selectedTopping.length;
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1);
    } else {
        toppingTotal = 0;
    }

    // Code that calls/prints on-screen printed details once all pizza size and toppiong selections are made to generate total price
    runningTotal = (runningTotal + toppingTotal);
    console.log("total selected topping items: "+toppingCount);
    console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+".00");
    console.log("topping text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    document.getElementById("showText").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
};
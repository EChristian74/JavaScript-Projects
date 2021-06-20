function car_Function() {   //Function to create dictionary
    var Car =   {   //Variable to define dictionary
        Class:"Sports Car",   //Define KVP 1
        Make:"De Tomaso Automobili",    //Define KVP 2
        Model:"Pantera",    //Define KVP 3
        Body:"2-door coupe",    //Define KVP 4
        Engine:"Ford 302 V8",   //Define KVP 5 
        Transmission:"5-speed manual"   //Define KVP 7
    };       
    delete Car.Engine;  //Delete operation
    document.getElementById("Dictionary").innerHTML = Car.Make;   //Method to output value
}

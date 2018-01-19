//Variable tha valueDecrese fuction need

var carCost = 10000;
var carAge = 0;
var timeOfUse = 10;

var carValueAfterUsing;

//Variable that gasCosts function need

var monthlyDistance =;
var gasCost =;
var fuelConsumption =;

var monthlyGasCost =; 

//I declare valueDecrese function with three arguments. This arguments are variables that will be conected with proper input files. First argument is var timeOfUse(with number of years that user want to using his car), second argument is var carAge(with age of user car when he bought it), third argument is var carCocst(with user car price when he bought it). Function return var carValueAfterUsing. 

//1. I write loop that works from 0 to moment when i is equal var timeOfUse.
//2. In this loop we have conditions that are depend on var CarAge. 
//3. Next is code that calculate car value decrese. 
function valueDecrese(timeOfUse, carAge, carCost) {
    
    
    for (var i = 0; i < timeOfUse; i++) {
        if (carAge == 0) {
            if (i == 0) {
//                In first calculation in var carValueAfterUsing I need save var carCost * 0.7 result
                 carValueAfterUsing = carCost * "0.7" ;
            }
            else if (i == 1) {
//                Next, on the right site of =, i can use can use var carValueAfterUsing and multiply it by chosen number.
                 carValueAfterUsing =  carValueAfterUsing * "0.9" ;
            }
            else {
                 carValueAfterUsing =  carValueAfterUsing * "0.94" ;
            }
        }
        else if (carAge == 1) {
            if (i == 0) {
                carValueAfterUsing = carCost * "0.9" ;
            }
            else if (i == 1) {
                carValueAfterUsing = carValueAfterUsing * "0.9" ;
            }
            else {
                carValueAfterUsing = carValueAfterUsing * "0.94" ;
            }
        }
        else if (carAge == 2) {
            if (i == 0) {
                carValueAfterUsing = carCost * "0.9" ;
            }
            else {
                carValueAfterUsing = carValueAfterUsing * "0.94" ;
            }
        }
        else {
            if (i == 0) {
                carValueAfterUsing = carCost * "0.94" ;
            }
            else {
                carValueAfterUsing = carValueAfterUsing * "0.94" ;
            }
        }
    }
    return carValueAfterUsing;
}
//In here I declare var decrese that contain valueDecrese function with proper arguments in it. This line start valueDecrese function. 

//var decrese = valueDecrese(timeOfUse, carAge, carCost);

//Now I want create function that will be counting monthly cost of gas.





    
    
    


        
        
        
//    return carValueAfterUsing;

////////////////////////////////////////////////////////////////////////////////////////
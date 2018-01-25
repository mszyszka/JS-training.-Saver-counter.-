//What I have now is:

//- car monthly value decrese
//- monthly gas costs
//- monthly insurance gasCost
//- monthly gadgets cost

//What i need is: 

//-function for summer tires
//    I need whole distance that user will made using car and divide it by distance that you should drive on one tire set.
//-function for winter tires
//    Sam as above
//-function for oil 
//    Same as above

//-cost of repairing a car
//-breaking system 
//-fluids costs


var carWashCost;


//Variable tha valueDecrese fuction need

var carPrice = 10000;
var carAge = 10;
var timeOfUse = 1;

var carValueAfterUsing;
var monthlyCarValueDecrese;



//I declare valueDecrese function with three arguments. This arguments are variables that will be conected with proper input files. First argument is var timeOfUse(with number of years that user want to using his car), second argument is var carAge(with age of user car, when he bought it), third argument is var carCocst(with user car price, when he bought it). Function return var carValueAfterUsing. 

//1. I write loop that works from 0 to moment when i is equal var timeOfUse.
//2. In this loop we have conditions that are depend on var CarAge. 
//3. Next is code that calculate car value decrese. 
function valueDecrese(timeOfUse, carAge, carPrice) {
    
    
    for (var i = 0; i < timeOfUse; i++) {
        if (carAge == 0) {
            if (i == 0) {
//                In first calculation in var carValueAfterUsing I need save var carPrice * 0.7 result
                 carValueAfterUsing = carPrice * "0.7" ;
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
                carValueAfterUsing = carPrice * "0.9" ;
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
                carValueAfterUsing = carPrice * "0.9" ;
            }
            else {
                carValueAfterUsing = carValueAfterUsing * "0.94" ;
            }
        }
        else {
            if (i == 0) {
                carValueAfterUsing = carPrice * "0.94" ;
            }
            else {
                carValueAfterUsing = carValueAfterUsing * "0.94" ;
            }
        }
    }
    monthlyCarValueDecrese = (carPrice - carValueAfterUsing) / (timeOfUse * 12);
    
    return monthlyCarValueDecrese;

}
//In here I declare var decrese that contain valueDecrese function with proper arguments in it. This line start valueDecrese function. 

//var startValueDecrese = valueDecrese(timeOfUse, carAge, carPrice);       FUNCTION START




//Now I want create function that will be counting monthly cost of gas.


//Variable that gasCosts function need

var monthlyDistance;
var gasPrice;
var fuelConsumptionForHundred;

var gasCostForHundred;
var monthlyGasCost; 


function gasCost(monthlyDistance, gasPrice, fuelConsumptionForHundred) {
    
    gasCostForHundred = gasPrice * fuelConsumptionForHundred; 
    
    
    monthlyGasCost = (monthlyDistance *  gasCostForHundred) / 100;       


    return monthlyGasCost;
}

//var startGasCost = gasCost(monthlyDistance, gasPrice, fuelConsumptionForHundred);     FUNCTION START


//Now I want to write a function that will be counting monthly insurance cost

var insurencePrice;
var monthlyInsurenceCost;

function insuranceCost(){
    monthlyInsurenceCost = insurencePrice / 12;
    
    return monthlyInsurenceCost;
}

//var starInsuranceCost = insuranceCost();                  FUNCTION START




//Now I want to write function that will be counting monthly costs of gagets

var gadgetsPrice;
var monthlyGadgetsCost;

function gadgetsCost(){
    
    monthlyGadgetsCost = gadgetsPrice / 12;
    
    alert(monthlyGadgetsCost);
    return monthlyGadgetsCost;
    
}

//var startGadgetsCost = gadgetsCost();                    FUNCTION START






        





    
    
    


        
        
        
//    return carValueAfterUsing;

////////////////////////////////////////////////////////////////////////////////////////
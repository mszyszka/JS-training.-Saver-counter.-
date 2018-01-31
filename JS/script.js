//What I have now is:

//- car monthly value decrese
//- monthly gas cost
//- monthly insurance cost
//- monthly gadgets cost

//What i need is: 

//-function for summer tires - DONE
//    I need whole distance that user will made using car and divide it by distance that you should drive on one tire set.
//-function for winter tires - DONE
//    Sam as above
//-function for oil - DONE
//    Same as above

//-cost of repairing a car - DONE 




var carWashCost;

var timeOfUseMonths;
var carValueAfterUsing;
var monthlyCarValueDecrese;
var numberOfsummerTiresSets;

var summerTiresEndurance = 60000;
var winterTiresEndurance = 45000;
var tiresCost = 1000;

var monthlyDistance;
var gasPrice;

var fuelConsumptionForHundred;
var gasCostForHundred;
var monthlyGasCost; 
var insurencePrice;

var monthlyInsurenceCost;
var gadgetsPrice;
var monthlyGadgetsCost;
var monthlyRepairCosts;

var oilPrice = 100;
var monthlyOilCost;
var totalDistance;
var numberOfOilChanges;





//I declare valueDecrese function with three arguments. This arguments are variables that will be conected with proper input files. First argument is var timeOfUse(with number of years that user want to using his car), second argument is var carAge(with age of user car, when he bought it), third argument is var carCocst(with user car price, when he bought it). Function return var carValueAfterUsing. 

//1. I write loop that works from 0 to moment when i is equal var timeOfUse.
//2. In this loop we have conditions that are depend on var CarAge. 
//3. Next is code that calculate car value decrese. 





function valueDecrese() {
    
    var carPrice = document.getElementById("input0").value;
    var carAge = document.getElementById("input1").value;
    var timeOfUse = document.getElementById("input2").value;
    
    
    alert(carPrice);
//    for (var i = 0; i < timeOfUse; i++) {
//        if (carAge == 0) {
//            if (i == 0) {
////                In first calculation in var carValueAfterUsing I need save var carPrice * 0.7 result
//                 carValueAfterUsing = carPrice * "0.7" ;
//            }
//            else if (i == 1) {
////                Next, on the right site of =, i can use can use var carValueAfterUsing and multiply it by chosen number.
//                 carValueAfterUsing =  carValueAfterUsing * "0.9" ;
//            }
//            else {
//                 carValueAfterUsing =  carValueAfterUsing * "0.94" ;
//            }
//        }
//        else if (carAge == 1) {
//            if (i == 0) {
//                carValueAfterUsing = carPrice * "0.9" ;
//            }
//            else if (i == 1) {
//                carValueAfterUsing = carValueAfterUsing * "0.9" ;
//            }
//            else {
//                carValueAfterUsing = carValueAfterUsing * "0.94" ;
//            }
//        }
//        else if (carAge == 2) {
//            if (i == 0) {
//                carValueAfterUsing = carPrice * "0.9" ;
//            }
//            else {
//                carValueAfterUsing = carValueAfterUsing * "0.94" ;
//            }
//        }
//        else {
//            if (i == 0) {
//                carValueAfterUsing = carPrice * "0.94" ;
//            }
//            else {
//                carValueAfterUsing = carValueAfterUsing * "0.94" ;
//            }
//        }
//    }
//    monthlyCarValueDecrese = (carPrice - carValueAfterUsing) / (timeOfUse * 12);
//    
////    gasCost();
//    
//    alert(monthlyCarValueDecrese);
//    
//    return monthlyCarValueDecrese;
    
    
    

}


//In here I declare var decrese that contain valueDecrese function with proper arguments in it. This line start valueDecrese function. 
//
//var startValueDecrese = valueDecrese(timeOfUse, carAge, carPrice);       



//
////Now I want create function that will be counting monthly cost of gas.
//
//function gasCost(monthlyDistance, gasPrice, fuelConsumptionForHundred) {
//    
//    gasCostForHundred = gasPrice * fuelConsumptionForHundred; 
//    
//    
//    monthlyGasCost = (monthlyDistance *  gasCostForHundred) / 100;       
//
//    insuranceCost();
//
//    return monthlyGasCost;
//}
//
////var startGasCost = gasCost(monthlyDistance, gasPrice, fuelConsumptionForHundred);    
//
//
//
//
////Now I want to write a function that will be counting monthly insurance cost
//
//function insuranceCost(){
//    monthlyInsurenceCost = insurencePrice / 12;
//    
//    gadgetsCost();
//    
//    return monthlyInsurenceCost;
//}
//
////var starInsuranceCost = insuranceCost();                              
//
//
//
//
////Now I want to write function that will be counting monthly costs of gagets
//
//function gadgetsCost(){
//    
//    monthlyGadgetsCost = gadgetsPrice / 12;
//    
//    summerTires();
//    
//    return monthlyGadgetsCost;
//    
//}
//
////var startGadgetsCost = gadgetsCost();                                 
//
//
//
//
////Now I want write functions that will be counting tires costs
//
//function summerTires(){
//    
//    numberOfsummerTiresSets = totalDistance / summerTiresEndurance;
//    
//    summerTiresCost = (numberOfsummerTiresSets * tiresCost) / (timeOfUse *12);
//    
//    summerTiresCost = Math.round(summerTiresCost);
//    
//    winterTires();
//    
//    return summerTiresCost;
//    
//    
//}
//
////var startSummerTires = summerTires();             
//
//
//
//
//function winterTires(){
//    
//    numberOfwinterTiresSets = totalDistance / winterTiresEndurance;
//    
//    winterTiresCost = (numberOfwinterTiresSets * tiresCost) / (timeOfUse *12);
//    
//    winterTiresCost = Math.round(winterTiresCost);
//    
//    oil();
//    
//    return winterTiresCost;
//}
//
////var startWinterTiresCost = winterTires();                                         
//
//
//
//
////Now I want write functions that will be counting oil costs
//
//function oil(){
//    
//    monthlyOilCostil = (numberOfOilChanges * oilPrice) / (timeOfUse * 12);
//    
//    
//    
//    repair();
//    
//    return monthlyOilCost;
//    
//    
//}
//
////var startOil = oil();                                                  
//
//
//
//
////Now I want write functions that will be counting repair cost
//
//function repair(){
//
//    if(carAge == 0 && timeOfUse < 5)
//    {
//        monthlyRepairCosts = 0;
//    } 
//    else if(carAge == 0 && timeOfUse > 5)
//    {
//        monthlyRepairCosts == (timeOfUse * 100) / (12 * timeOfUse);
//    }
//    else if(carAge >= 5 && carAge < 10)
//    {
//        monthlyRepairCosts = (timeOfUse * 200) / (12 * timeOfUse);
//    }
//    else if(carAge >= 10 && carAge < 15)
//    {
//        monthlyRepairCosts = (timeOfUse * 400) / (12 * timeOfUse);
//    }
//    else
//    {
//        monthlyRepairCosts = (timeOfUse * 600) / (12 * timeOfUse);
//    }
//    
//    wholeCost();
//    
//    return monthlyRepairCosts;
//}
//
//    
////var startRepait = repair();                                                
//
//
//
//
////Whole monthly cost 
//var wholeMonthlyCost;
//
//function wholeCost(){
//    
//      wholeMonthlyCost = monthlyCarValueDecrese + monthlyGasCost + monthlyInsurenceCost + monthlyGadgetsCost + summerTiresCost + winterTiresCost + monthlyOilCost +monthlyRepairCosts;
//    
//    return wholeMonthlyCost;
//    
//
//}

    
document.getElementById("startBtn").addEventListener("click", valueDecrese);

//document.getElementById("result").innerHTML = 'Posiadanie samochodu kosztuje Cię miesięcznie:  ' + wholeMonthlyCost + '  zł';

            














        





    
    
    


        

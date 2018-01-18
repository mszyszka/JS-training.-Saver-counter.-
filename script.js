
var carCost = 10000;
var carAge = 0;
var timeOfUse = 10;

var carValueAfterUsing;


function valueDecrese(timeOfUse, carAge, carCost) {
    
    
    for (var i = 0; i < timeOfUse; i++) {
        if (carAge == 0) {
            if (i == 0) {
                 carValueAfterUsing = carCost * "0.7" ;
            }
            else if (i == 1) {
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
    alert(carValueAfterUsing);
}

var decrese = valueDecrese(10, 1, 50000);


    
    
    


        
        
        
//    return carValueAfterUsing;

////////////////////////////////////////////////////////////////////////////////////////
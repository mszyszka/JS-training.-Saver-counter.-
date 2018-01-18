///////////////////////decrease in the value of the car/////////////////////////////////
var carCost = 10000;
var carAge = 0;
var timeOfUse = 10;

var carValueAfterUsing;


function valueDecrese(carCost, carAge, timeOfUse){
    
    for (var i = 0; i < timeOfUse; i ++){
        
        if(carAge==0)
        {
            if(i==0)
            {
                 carValueAfterUsing = carCost * 70%;
            }
            else if (i==1)
            {
                  carValueAfterUsing = carValueAfterUsing * 90%;
            }
            else 
            {
                  carValueAfterUsing = carValueAfterUsing * 94%;
            }
        }
            
        else if(carAge==1)
        {
            if(i==0)
            {
                 carValueAfterUsing = carCost * 90%;
            }
            else if(i==1)
            {
                  carValueAfterUsing = carValueAfterUsing * 90%;
            }
            else 
            {
                carValueAfterUsing = carValueAfterUsing * 94%;
            }

        }
        
        else if(carAge==2)
        {
            if(i==0)
            {
                 carValueAfterUsing = carCost * 90%;
            }
            else 
            {
                  carValueAfterUsing = carValueAfterUsing * 94%;
            }
        
        }
        
        else 
        {
            if(i==0)
            {
                carValueAfterUsing = carCost * 94%;
            }
            else
            {
                carValueAfterUsing = carValueAfterUsing *94%;
            }
        }
            
        
    }
    
    return carValueAfterUsing;

}


document.getElementById("valueDecreseBtn").addEventListener("click", valueDecrese, false);

alert(valueDecrese);




////////////////////////////////////////////////////////////////////////////////////////
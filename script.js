///////////////////////decrease in the value of the car/////////////////////////////////

var carCost = 10000;
var carAge = 5;
var timeOfUse =10;

var carValueAfterUsing;

function valueDecrese(carCost,carAge,timeOfUse){
    
    if (timeOfUse == 0){
        for(i=0; i>timeOfUse; i++)
        {
            if(i==0)
            {
                carValueAfterUsing = carCost * 70%;
            }
            else if(i==2)
            {
                carValueAfterUsing = carCost * 90%;       
            } 
            else
            {
                carValueAfterUsing = carCost * 94%;               
            } 
        }
    }
    return carValueAfterUsing;
}
    
alert(valueDecrese);




////////////////////////////////////////////////////////////////////////////////////////
// Code your solution in this file!

function distanceFromHqInBlocks(value){
    if(value > 42){
        return value - 42; 
    }
    else{
        return 42 - value;
    }
}

function distanceFromHqInFeet(value){
    return distanceFromHqInBlocks(value)*264;
}

function distanceTravelledInFeet(v1, v2){
   return distanceFromHqInFeet(v2) - distanceFromHqInFeet(v1);
}

function calculatesFarePrice(v1, v2){
    if(distanceTravelledInFeet(v1, v2) < 400){
        return 0;
    }
    else if(distanceTravelledInFeet(v1, v2) > 400 && distanceTravelledInFeet(v1, v2) < 2000){
        return ( (distanceTravelledInFeet(v1, v2)-400)*2 )/100;
    }

    else if(distanceTravelledInFeet(v1, v2) > 2000 && distanceTravelledInFeet(v1, v2) < 2500){
        return 25;
    }
    
    else if(distanceTravelledInFeet(v1, v2) > 2500){
        return 'cannot travel that far';
    }
}

console.log(calculatesFarePrice(34, 32));
function distanceFromHqInBlocks(blocks){
    return Math.abs(blocks - 42);
}

function distanceFromHqInFeet(blocks){
    return distanceFromHqInBlocks(blocks) * 264;
}

function distanceTravelledInFeet(start, destination){
    return Math.abs(start - destination) * 264;
}

function calculatesFarePrice(start, destination){
    const feet = distanceTravelledInFeet(start, destination);
    if (feet <= 400){
        return 0;
    } else if (feet <= 2000){
        return (feet - 400) * .02;
    } else if (feet > 2500){
        return `cannot travel that far`;
    } else if (feet > 2000) {
        return 25;
    } 
}
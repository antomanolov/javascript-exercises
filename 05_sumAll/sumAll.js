const sumAll = function(numOne, numTwo) {
    let sumAll = 0
    if (typeof(numOne) != 'number'|| numOne < 0 || numTwo < 0 || typeof(numTwo) != 'number'){
        return 'ERROR'
    }
    if (numOne < numTwo) {
        for (let i = numOne; i <= numTwo; i++){
            sumAll += i;
        }
    }else{
        for (let i = numTwo; i <= numOne; i++){
            sumAll += i;
    }
    }
    
    return sumAll
};

// Do not edit below this line
module.exports = sumAll;

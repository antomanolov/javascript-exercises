const repeatString = function(string, num) {
    if (num < 0){
        return 'ERROR'
    }
    let answear = ''
    for (let i = 0;i < num; i++){
        answear += string
    }
    return answear
};

// Do not edit below this line
module.exports = repeatString;

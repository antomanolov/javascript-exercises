const fibonacci = function(nnum) {
    if (nnum <= 0) {
        return 'OOPS'
    }
    
    let arr = [1, 1]
    for(let i = 0; i < nnum - 2; i++){
        arr.push(arr[i] + arr[i+1])
    }
    return Number(arr.slice(-1).join(''))
};

// Do not edit below this line
module.exports = fibonacci;

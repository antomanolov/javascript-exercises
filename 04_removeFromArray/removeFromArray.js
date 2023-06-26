const removeFromArray = function(arr, ...args) {
     function filterArr(someArr, valToFilter){
    
    // this is the whole function that is converted into arrow function bellow
    //     function filterType (el) {
    //         if (el === valToFilter){
    //             return false
    //         }
    //         return true
    //     }
    
    // filtering array that goes through every element and with ternary operators
    // looks if the type of the element is the same as the value that we want to filter
        let filteredArr = someArr.filter(el => el === valToFilter ? false : true);
        return filteredArr;
    }
    
    let newArr;
    // loop through all args that we can get
    // we got one copy array and everytime we refresh the initial array with the new values that we get 
    // from the filter function
    for (el of args) {
        newArr = filterArr(arr, el);
        arr = newArr;
    }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;

const reverseString = function(string) {
    // first splitting the string into array of letters
    // then reversing the array and on last place joining
    // again the letters into string
    let reversedString = string.split('').reverse().join('')
    return reversedString
};

// Do not edit below this line
module.exports = reverseString;
let something = ['anana']

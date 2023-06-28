const palindromes = function (str)  {
    let newString = str.replace(/[^a-zA-Z0-9]+/g,'').toLowerCase().split('')
    let reverseString = str.replace(/[^a-zA-Z0-9]+/g,'').toLowerCase().split('').reverse()
    let joinedStr = newString.join('')
    let joinedReversed = reverseString.join('')
    console.log(joinedReversed)
    console.log(joinedStr)
    return joinedReversed == joinedStr
};

// Do not edit below this line
module.exports = palindromes;

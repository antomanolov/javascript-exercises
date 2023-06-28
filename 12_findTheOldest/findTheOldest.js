const findTheOldest = function(arr) {
    let oldest = arr.sort((prevObj, nextObj) => {
        let prevYears = getAge(prevObj.yearOfDeath, prevObj.yearOfBirth)
        let nextYears = getAge(nextObj.yearOfDeath, nextObj.yearOfBirth)
        return prevYears > nextYears ? -1 : 1
      })
      return oldest[0]
};

function getAge(death, birth) {
    if(!death) {
        return 2023 - birth
    }
    return death - birth
}
// Do not edit below this line
module.exports = findTheOldest;

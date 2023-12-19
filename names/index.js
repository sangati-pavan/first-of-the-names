const arrayOfNames = require("../country/state/city/index");
const getFirstNames = require("../utilities/utils");
console.log(arrayOfNames);
console.log(getFirstNames);

const getPeopleInCity = (namesList) => {
    return getFirstNames(namesList);
}

module.exports = getPeopleInCity;

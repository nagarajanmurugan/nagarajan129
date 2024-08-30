function toUpperCaseString(inputString) {
    return inputString.toUpperCase();
}


const originalString = "hello, world!";
const upperCaseString = toUpperCaseString(originalString);

console.log(upperCaseString);

module.exports = toUpperCaseString;

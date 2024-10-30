/**
 * This function returns the name of the coolest teacher
 *
 * @returns {string} - The string "Benjamin"
 *
 * Usage:
 * const coolestTeacher = getCoolestTeacher();
 * console.log(coolestTeacher); // Benjamin
 */
function getCoolestTeacher() {
    return ('Benjamin');
}
const coolestTeacher = getCoolestTeacher('Benjamin');
console.log(coolestTeacher); //Benjamin



/**
 * This function multiplies two numbers and then adds a third number.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @returns {number} - The result of (a * b) + c.
 *
 * Usage:
 * const result = multiplyAndAdd(2, 3, 1); // result will be 7
 * const anotherResult = multiplyAndAdd(-1, 1, 2); // anotherResult will be 1
 */
function multiplyAndAdd(a, b, c) {
    return (a * b) + c;
}

const result = multiplyAndAdd(2, 3, 1); // result will be 7
const anotherResult = multiplyAndAdd(-1, 1, 2); // anotherResult will be 1

console.log(result);
console.log(anotherResult);



/**
 * This function returns the type of the provided variable.
 *
 * @param {*} value - A variable whose type needs to be determined.
 * @returns {string} - The type of the variable.
 *
 * Usage:
 * const result = determineType("Hello"); // result will be "string"
 * const anotherResult = determineType(42); // anotherResult will be "number"
 */

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof

function determineType(value) {
    return value
}
const result2 = determineType(typeof "Hello"); // result will be "string"
const anotherResult2 = determineType(typeof 42); // anotherResult will be "number"

console.log(result2)
console.log(anotherResult2)


/**
 * This function concatenates two strings with a space in between.
 *
 * @param {string} a - The first string.
 * @param {string} b - The second string.
 * @returns {string} - The concatenated string.
 *
 * Usage:
 * const result = concatenateStringsWithSpace("Hello", "World"); // result will be "Hello World"
 */

function concatenateStringsWithSpace(a, b) {
    return `${a} ${b}`;

}
const result3 = concatenateStringsWithSpace("Hello", "World"); // result will be "Hello World"
console.log(result3)



/**
 * This function converts a string to uppercase and adds a smiley at the end of the string
 *
 * @param {string} str - The string to be converted.
 * @returns {string} - The string in uppercase.
 *
 * Usage:
 * const upper = toUpperCaseWithSmiley('hello');
 * console.log(upper); // upper will be 'HELLO:)'
 * const anotherUpper = toUpperCaseWithSmiley('world');
 * console.log(anotherUpper); // upper will be 'WORLD:)'
 */

function toUpperCaseWithSmiley(str) {
    return str.toUpperCaseWithSmiley();
}
const upper = toUpperCaseWithSmiley('hello');
console.log(upper); // upper will be 'HELLO:)'
const anotherUpper = toUpperCaseWithSmiley('world');
console.log(anotherUpper); // upper will be 'WORLD:)'



/**
 * This function repeats a string a specified number of times with spaces in between.
 *
 * @param {string} str - The string to repeat.
 * @param {number} times - The number of times to repeat the string.
 * @returns {string} - The repeated string with spaces in between.
 *
 * Usage:
 * const repeated = repeatString("Hello", 3); // repeated will be "Hello Hello Hello"
 * const anotherRepeated = repeatString("Goodbye", 2); // anotherRepeated will be "Goodbye Goodbye"
 */
function repeatString(str, times) {

}


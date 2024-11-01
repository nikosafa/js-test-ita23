/**
 * This function checks if a number is even.
 *
 * @param {number} n - The number to be checked.
 * @returns {boolean} - True if the number is even, otherwise false.
 *
 * Usage:
 * const result = isEven(4); // result will be true
 * const anotherResult = isEven(7); // anotherResult will be false
 */

// https://stackoverflow.com/questions/6211613/testing-whether-a-value-is-odd-or-even

function isEven(n) {
    n = Number(n);
    return n === 0 || (n % 2 === 0);
}

const result6 = isEven(4);
const anotherResult6 = isEven(7);

console.log(result6);
console.log(anotherResult6);

/**
 * This function checks if a number is within a range.
 *
 * @param {number} n - The number to check.
 * @param {number} min - The minimum range (included)
 * @param {number} max - The maximum range (included)
 * @returns {boolean} - True if the number is within range, false otherwise.
 *
 * Usage:
 * const inRange = isWithinRange(5, 1, 10); // inRange will be true
 * const outOfRange = isWithinRange(15, 1, 10); // outOfRange will be false
 */

//https://stackoverflow.com/questions/6454198/check-if-a-value-is-within-a-range-of-numbers

function isWithinRange(n, min, max) {
    return((n-min)*(n-max)<=0);
}

const inRange = isWithinRange(5, 1, 10); // inRange will be true
const outOfRange = isWithinRange(15, 1, 10); // outOfRange will be false

console.log(inRange)
console.log(outOfRange)

/**
 * This function checks if a string contains the string "ba"
 *
 * @param {string} string - The string to check.
 * @returns {boolean} - True if the string contains the string ba
 *
 * Usage:
 * const bananaContainsBa = stringContainsBa("banana"); // true
 * const harborContainsBa = stringContainsBa("harbor"); // false
 * const harborContainsBa = stringContainsBa("habanana"); // true
 */

//https://www.w3schools.com/jsref/jsref_includes.asp

function stringContainsBa(string) {
    return string.includes('ba');
}

const bananaContainsBa = stringContainsBa("banana"); // true
const harborContainsBa1 = stringContainsBa("harbor"); // false
const harborContainsBa2 = stringContainsBa("habanana"); // true

console.log(bananaContainsBa)
console.log(harborContainsBa1)
console.log(harborContainsBa2)


/**
 * This function calculates the sum of each digit raised to its position.
 *
 * @param {number} num - The number to process.
 * @returns {number} - The calculated sum.
 *
 * Usage:
 * const result = sumOfDigitsWithPosition(1234); // result will be 1^1 + 2^2 + 3^3 + 4^4 = (1) + (2 * 2) + (3 * 3 * 3) + (4 * 4 * 4 * 4) =  1 + 4 + 27 + 256 = 288
 * const result = sumOfDigitsWithPosition(52); // result will be 5^1 + 2^2 = 5 + (2 * 2) = 5 + 4 = 9
 */
function sumOfDigitsWithPosition(num) {

    }







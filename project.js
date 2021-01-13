/**
 * REFERENCES:
 * - String methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#
 *
 * If you'd like to run your function to test it yourself,
 * uncomment it from the bottom of this file, then run this
 * file with `node project.js`.
 *
 * Good luck!
 */

/**
 * sumOdds(numbers):
 * - receives an array of numbers
 * - returns the sum of only the ODD numbers
 *
 * e.g.
 * sumOdds([1, 2, 3, 4, 5, 6, 7, 8, 9]) -> 25
 * sumOdds([3, 7, 8, 15, 2, 1, 13]) -> 39
 */
function sumOdds(numbers){
//   // Your code here
//   // let count = 0;
//   // let sum = 0;
//   // let newArray = numbers.filter((number) => number % 2 === 1);
//   // newArray.forEach((element) => (element += count));
//   // sum += count;
//   // return count;

let count = 0;
  numbers.forEach((number) => {
    if(number % 2 === 1 ) count += number;
  })
  return count;

  // let count = 0;
  // numbers.filter((number) => number % 2 === 1).forEach((element) => (element += count));
  // return count;

//   // let sum = 0;
//   // let oddNumbers = numbers.filter((number) => number % 2 ===1);
//   // oddNumbers.forEach((number) => (sum += number));
}

// console.log(sumOdds([3, 7, 8, 15, 2, 1, 13]));

// function sumOdds(numbers) {
//   let sum = 0;
//   numbers.forEach((number) => {
//     if(number % 2 === 1 ) sum += number;
//   })
//   return sum;
// }

/**
 * characterCount(string, c):
 * - receives a string and a character
 * - returns the number of times `c` occurs in the string
 * - note: this has to be case-insensitive
 *
 * e.g.
 * characterCount("Michael Stephenson", "e") -> 3
 * characterCount("Character Count is clever", "c") -> 4
 *
 * Hint: Use string methods to make it case-insensitive
 */
function characterCount(string, c) {
  // Your code here
  let occurs = 0;
  for (const character of string) {
    if (character.toLowerCase() === c) {
      occurs++;
    }
  }
  return occurs;
}

// console.log(characterCount("Character Count is clever", "c"));

/**
 * differences(numbers):
 * - receives an array of numbers
 * - returns an array that has the difference in the values of the numbers array.
 * - see example below for clarification.
 *
 * e.g.
 * differences([1, 3, 7, 9, 12]) -> [2, 4, 2, 3]
 * 3 - 1 = 2
 * 7 - 3 = 4
 * 9 - 7 = 2
 * 12 - 9 = 3
 *
 * differences([11, 35, 52, 14, 56]) -> [24,  17, -38,  42]
 */
function differences(numbers) {
  // Your code here
  const newArr = [];
  for (let i = 1; i < numbers.length; i++){
    newArr.push(numbers[i] - numbers[i-1]);
  }
  return newArr;
}

// console.log(differences([11, 35, 52, 14, 56]));

/**
 * largestIncrement(numbers):
 * - receives an array of numbers
 * - returns the largest difference between two consecutive numbers in the array
 * - see example below for clarification
 *
 * e.g.
 * largestIncrement([1, 3, 7, 9, 12]) -> 4
 * 3 - 1 = 2
 * 7 - 3 = 4
 * 9 - 7 = 2
 * 12 - 9 = 3
 * largest: 4
 *
 * largestIncrement([11, 35, 52, 14, 56, 601, 777, 888, 999]) -> 545
 */
function largestIncrement(numbers) {
  // Your code here
  let incrmts = differences(numbers);
  return Math.max(...incrmts);
  // return Math.max(differences(numbers));
}

// console.log(largestIncrement([11, 35, 52, 14, 56, 601, 777, 888, 999]));

/**
 * afterX(numbers, x):
 * - receives an array of numbers, and a number `x`.
 * - returns an array of every number in `numbers` that occurs after `x`.
 *
 * - assume there are no duplicate numbers.
 *
 * e.g.
 * afterX([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) -> [4, 5, 6, 7, 8, 9]
 * afterX([11, 35, 52, 14, 56, 601, 777, 888, 999], 52) -> [14, 56, 601, 777, 888, 999]
 */
function afterX(numbers, x) {
  // Your code here
  let ind = numbers.findIndex((number) => number === x);
  let newArr = numbers.slice(ind + 1);
  return newArr;
}

// console.log(afterX([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));

/**
 * abbreviate(firstName, lastName):
 * - receives a first name and a last name
 * - returns the initials in uppercase
 *
 * e.g.
 * abbreviate("Michael", "Singer") -> "MS"
 * abbreviate("jordan", "peterson") -> "JP"
 *
 * Hint: Use string method .toUpperCase()
 */
function abbreviate(firstName, lastName) {
  // Your code here
  return `${firstName[0].toUpperCase()}${lastName[0].toUpperCase()}`;
}

// console.log(abbreviate("miss", "Stephane"));

/**
 * isUpperCase(string):
 * - receives a string
 * - returns true if the string is uppercase, false otherwise
 *
 * e.g.
 * isUpperCase("Mickey S") -> false
 * isUpperCase("JCREW") -> true
 *
 */
const isUpperCase = (string) => {
  // Your code here
  // return string.split("").toUpperCase() ? true : false;
  return string === string.toUpperCase();
}
// function isUpperCase(string) {
//   // Your code here
// }

//console.log(isUpperCase("JCREw"));

/**
 * elementInArray(numbers, x):
 * - receives an array of numbers, and a number `x`.
 * - returns true if `x` is found in the array, false otherwise
 *
 * e.g.
 * elementInArray([5, 6, 7], 6) -> true
 * elementInArray([5, 6, 7], 8) -> false
 *
 */

const  elementInArray = (numbers, x) => {
  // Your code here
  // return numbers.map((number) => number === x ? true : false);
  return numbers.includes(x);
}
// function elementInArray(numbers, x) {
//   // Your code here
// }

console.log(elementInArray([5, 6, 7], 8));

/**
 * reverseString(string):
 * - receives a string
 * - returns the reverse of the string
 *
 * e.g.
 * reverseString("string") -> "gnirts"
 * reverseString("CODED") -> "DEDOC"
 *
 */
const reverseString = (string) => string.split("").reverse().join("");

// function reverseString(string) {
//   // Your code here
// }

console.log(reverseString("CODED"));

module.exports = {
  sumOdds,
  characterCount,
  differences,
  largestIncrement,
  afterX,
  abbreviate,
  isUpperCase,
  elementInArray,
  reverseString,
};

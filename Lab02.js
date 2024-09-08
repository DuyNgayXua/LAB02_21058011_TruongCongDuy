// 27. Create a function that will receive an array of numbers as argument and will return a new array with distinct elements
function distinctArray(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}
// 28. Calculate the sum of first 100 prime numbers and return them in an array
function sumPrimes() {
  const primes = [];
  let sum = 0;
  for (let i = 2; primes.length < 100; i++) {
    if (isPrime(i)) {
      primes.push(i);
      sum += i;
    }
  }
  return sum;
}
// 29. Print the distance between the first 100 prime numbers  
function primeDistance() {
  const primes = [];
  let lastPrime = 2;
  for (let i = 0; primes.length < 100; i++) {
    if (isPrime(i)) {
      primes.push(i);
      document.write(i - lastPrime);
      lastPrime = i;
    }
  }
}
// 30. Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.
function addStrings(a, b) {
  let result = '';
  let carry = 0;
  let i = a.length - 1;
  let j = b.length - 1;
  while (i >= 0 || j >= 0) {
    const sum = (parseInt(a[i] || 0) + parseInt(b[j] || 0) + carry);
    result = (sum % 10) + result;
    carry = Math.floor(sum / 10);
    i--;
    j--;
  }
  if (carry) result = carry + result;
  return result;
}
// 31. Create a function that will return the number of words in a text
function wordCount(text) {
  return text.split(' ').length;
}
// 32. Create a function that will capitalize the first letter of each word in a text
function capitalizeWords(text) {
  return text.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}
// 33. Calculate the sum of numbers received in a comma delimited string
function sumNumbers(str) {
    return str.split(',').reduce((acc, item) => acc + parseInt(item), 0);
    }
// 34. Create a function that returns an array with words inside a text.
function wordsArray(text) {
  return text.match(/\w+/g);
}
// 35. Create a function to convert a CSV text to a “bi-dimensional” array
function csvToArray(text) {
  return text.split('\n').map(row => row.split(','));
}
// 36. Create a function that converts a string to an array of characters
function stringToArray(text) {
  return text.split('');
}
// 37. Create a function that will convert a string in an array containing the ASCII codes of each character
function stringToAsciiArray(text) {
  return text.split('').map(char => char.charCodeAt(0));
}
// 38. Create a function that will convert an array containing ASCII codes in a string
function asciiArrayToString(arr) {
  return arr.map(code => String.fromCharCode(code)).join('');
}
// 39. Implement the Caesar cypher
function caesarCypher(text, shift) {
  return text.split('').map(char => {
    if (char.match(/[a-z]/i)) {
      const code = char.charCodeAt(0);
      const start = char === char.toLowerCase() ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);
      return String.fromCharCode(start + (code - start + shift) % 26);
    }
    return char;
  }).join('');
}
// 40. Implement the bubble sort algorithm for an array of numbers
function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}
// 41. Create a function to calculate the distance between two points defined by their x, y coordinates
function distanceBetweenPoints(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}
// 42. Create a function that will return a Boolean value indicating if two circles defined by center coordinates and radius are intersecting
function circlesIntersecting(x1, y1, r1, x2, y2, r2) {
  return distanceBetweenPoints(x1, y1, x2, y2) <= r1 + r2;
}
// 43. Create a function that will receive a bi-dimensional array as argument and a
// number and will extract as a unidimensional array the column specified by the
// number
function extractColumn(arr, column) {
  return arr.map(row => row[column]);
}
// 44. Create a function that will convert a string containing a binary number into a
// number
function binaryToNumber(binary) {
  return parseInt(binary, 2);
}
// 45. Create a function to calculate the sum of all the numbers in a jagged array
// (contains numbers or other arrays of numbers on an unlimited number of
// levels)
function sumJaggedArray(arr) {
  return arr.flat(Infinity).reduce((acc, item) => acc + item, 0);
}
// 46. Find the maximum number in a jagged array of numbers or array of numbers
function maxJaggedArray(arr) {
  return Math.max(...arr.flat(Infinity));
}
// 47. Deep copy a jagged array with numbers or other arrays in a new array
function deepCopyJaggedArray(arr) {
  return JSON.parse(JSON.stringify(arr));
}
// 48. Create a function to return the longest word in a string
function longestWord(text) {
  return text.split(' ').reduce((longest, current) => current.length > longest.length ? current : longest);
}
// 49. Shuffle an array of strings
function shuffleArray(arr) {
  return arr.sort(() => Math.random() - 0.5);
}
// 50. Create a function that will receive n as argument and return an array of n
// random numbers from 1 to n. The numbers should be unique inside the array.
function randomNumbers(n) {
  const numbers = [];
  while (numbers.length < n) {
    const number = Math.floor(Math.random() * n) + 1;
    if (!numbers.includes(number)) numbers.push(number);
  }
  return numbers;
}
// 51. Find the frequency of letters inside a string. Return the result as an array of
// arrays. Each subarray has 2 elements: letter and number of occurrences.
function letterFrequency(text) {
  const frequency = {};
  text.split('').forEach(char => frequency[char] = (frequency[char] || 0) + 1);
  return Object.entries(frequency);
}
// 52. Calculate Fibonacci(500) with high precision (all digits)
function fibonacci(n) {
  let a = 1n;
  let b = 0n;
  for (let i = 0; i < n; i++) {
    [a, b] = [a + b, a];
  }
  return b;
}
// 53. Calculate 70! with high precision (all digits)
function factorial(n) {
  let result = 1n;
  for (let i = 1n; i <= n; i++) {
    result *= i;
  }
  return result;
}

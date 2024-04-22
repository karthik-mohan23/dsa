// Question 1: Sum of all natural numbers from 1 to n
function sumOfNaturalNumbers(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
// console.log(sumOfNaturalNumbers(5));

// Question 2: Sum of digits of a number
function sumOfDigits(num) {
  let sum = 0;
  let copiedNum = num;
  for (let i = 0; i < String(num).length; i++) {
    let lastDigit = copiedNum % 10;
    sum += lastDigit;
    copiedNum = Math.floor(copiedNum / 10);
  }
  return sum;
}
// console.log(sumOfDigits(1287));

//Question 3: Count the number of digits of a number

function countDigitsOfNumber(num) {
  let absNum = Math.abs(num);
  let count = 0;
  for (let i = 0; i < String(absNum).length; i++) {
    count++;
  }
  return count;
}
// console.log(countDigitsOfNumber(-234));

//Question 4: Check if a number is palindrome

function checkIsPalindrome(num) {
  let reversedNum = "";
  let copiedNum = num;
  for (let i = 0; i < String(num).length; i++) {
    reversedNum += copiedNum % 10;
    copiedNum = Math.floor(copiedNum / 10);
  }
  return Number(reversedNum) === num;
}

// console.log(checkIsPalindrome(121));

//Question 5: Find nth Fibonacci number
// Fibonacci Sequence: 0 1 1 2 3 5 8...

function findFibonacciNumber(n) {
  if (n < 3) {
    return n - 1;
  }
  let prev = 1;
  let current = 1;
  let next = 0;

  for (let i = 2; i < n; i++) {
    next = prev + current;
    prev = current;
    current = next;
  }
  return next;
}
// console.log(findFibonacciNumber(1));
// console.log(findFibonacciNumber(2));
// console.log(findFibonacciNumber(3));
// console.log(findFibonacciNumber(5));
// console.log(findFibonacciNumber(10));

// Question 6: Missing Number in an Array
function missingNumber(arr) {
  let arrLength = arr.length;
  let totalSum = arrLength * ((arrLength + 1) / 2);
  let arrSum = 0;
  for (let i = 0; i < arrLength; i++) {
    arrSum += arr[i];
  }
  return totalSum - arrSum;
}

// console.log(missingNumber([3, 0, 1])); // 2
// console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8

//1523. Count Odd Numbers in an Interval Range
// Example 1:
// Input: low = 3, high = 7
// Output: 3
// Explanation: The odd numbers between 3 and 7 are [3,5,7].

function countOdds(low, high) {
  let count = 0;
  for (let i = low; i <= high; i++) {
    if (i % 2 === 0) {
      continue;
    } else {
      count++;
    }
  }
  return count;
}
// console.log(countOdds(3, 7));
// console.log(countOdds(8, 10));

// 412. Fizz Buzz
// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.

function fizzBuzz(num) {
  let arr = [];
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push("FizzBuzz");
    } else if (i % 3 === 0) {
      arr.push("Fizz");
    } else if (i % 5 === 0) {
      arr.push("Buzz");
    } else {
      arr.push(i);
    }
  }
  return arr;
}
// console.log(fizzBuzz(15));

//231. Power of Two
// n == 2**n

function isPowerOfTwo(n) {
  let num = Math.pow(2, n);
  return num;
  // return Math.pow(2, n) === n;
}

console.log(isPowerOfTwo(0));

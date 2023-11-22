// Section 5-27. 문제 해결 패턴 소개

// How do you improve?
// 1. Devise a plan for solving problems.
// 2. Master common problem solving patterns.

// Some patterns...
// - Frequency Counter
// - Multiple Pointers
// - Sliding Window
// - Divide and Conquer
// - Dynamic Programming
// - Greedy Agorithms
// - Backtracking
// - Many more!

// Section 5-28. 빈도 세기 패턴

// An Example
// Write a function called same, which accepts two arrays.
// The function should return true if every value in the array has it's corresponding value squared in the second array.
// The frequency of values must be the same.

// same([1, 2, 3], [4, 1, 9]) true
// same([1, 2, 3], [1, 9]) false
// same([1, 2, 1], [4, 4, 1]) false (must be same frequency)

// A naive solution Time complexity O(n^2)
// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     let correctIndex = arr2.indexOf(arr1[i] ** 2);
//     if (correctIndex === -1) {
//       return false;
//     }
//     arr2.splice(correctIndex, 1);
//   }
//   return true;
// }

// Refactored - Time complexity O(n)
// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   let frequencyCounter1 = {};
//   let frequencyCounter2 = {};
//   for (let val of arr1) {
//     frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
//   }
//   for (let val of arr2) {
//     frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
//   }
//   for (let key in frequencyCounter1) {
//     if (!(key ** 2 in frequencyCounter2)) {
//       return false;
//     }
//     if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
//       return false;
//     }
//     return true;
//   }
// }

// Section 5-29. 빈도수 세기:애너그램 도전 과제

// Anagrams
// Given two string, write a function to determine if the secound string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

validAnagram("", ""); // true
validAnagram("aaz", "zza"); // false
validAnagram("anagram", "nagaram"); // true
validAnagram("rat", "car"); // false
validAnagram("awesome", "awesom"); // false
validAnagram("qwerty", "qeywrt"); // true
validAnagram("texttwisttime", "timetwisttext"); // true

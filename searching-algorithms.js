// Section 10-57

// Objectives
// - Describe whar a searching algorithm is
// - Implement linear search on arrays
// - Implement binary search on sorted arrays
// - Implement the KMP string searching algorithm

// Section 10-58

// How do we search?
// Given an array, the simplest way to search for an value is to look at
// every element in the array and check if it's the value we want.

// JavaScript has search!
// There are many different search methods on array in JavaScript
// - indexOf
// - includes
// - find
// - findIndex

// Linear Search

// Linear Search Pseudocode
// - This function accepts an array and a value
// - Loop through the array and check if the current array element is equal to the value
// - If it is, return the index at which the element is found
// - If the value is never found, return -1

function searcher(arr, keyword) {
  return arr.findIndex((x) => x === keyword);
}

// searcher([1, 2, 3], 3);
// 2

// Sectaion 3-14.섹션 소개

// Objectives
// Understand how objects and arrays work, through the lens of Big O
// Explain why adding elements to the beginning of an array is costly
// Compare and contrast the runtime for arrays and objects, as well as built-in methods

// let instructor = {
//     firstName: "kelly",
//     isInstructor: true,
//     favoriteNumbers: [1, 2, 3, 4]
// }

// Section 3-15.객체의 빅오

// Big O of Objects
// Insertion - O(1)
// Removal - O(1)
// Searching - O(n)
// Access - O(1)

// When you don't need any ordering, objects are an excellent choice!

// Big O of Object Methods
// Object.keys - O(n)
// Object.values - O(n)
// Object.entries - O(n)
// hasOwnProperty - O(1)

// Section 3-16. 배열 안의 데이터에 접근이 느린 이유

// When to use arrays
// - When you need order
// - When you need fast access / insertion and removal (sort of....)

// Big O of Arrays
// Insertion - It depends....
// Removal - It depends....
// Searching - O(n)
// Access - O(1)

// let names = ["Michael", "Melissa", "Andrea"]

// 배열을 추가하거나 삭제하는 작업은 배열에 인덱스도 영향을 받기 때문에 비어있는 배열을 제외하고는
// push와 pop이 shift와 unshift보다 작업 속다가 빠르다.

// Section 3-17. 빅오 배열 메소드

// Big O of Array Operations
// push - O(1)
// pop - O(1)
// shift - O(n)
// unshift - O(n)
// concat - O(n)
// slice - O(n)
// splice - O(n)
// sort - O(n * log n)
// forEach/map/filter/reduce/etc. - O(n) 
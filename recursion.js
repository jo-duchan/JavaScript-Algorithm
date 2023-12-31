// Section 7-41. 스토리 타임: 마틴과 드래곤

// https://cs.slides.com/colt_steele/searching-algorithms-22

// Objectives
// - Define what recursion is and how it can be used
// - Understand the two essential components of a recursive function
// - Visualize the call stack to better debug and understand recursive functions
// - Use helper method recursion and pure recursion to solve more difficult problems

// Section 7-42. 재귀 함수를 사용하는 이유

// What is recursion?
// A process(a function in our case) that calls itself

// Why do I need to know this?
// It's EVERYWHERE!
// - JSON.parse / JSON.stringify
// - document.getElementById and DOM traversal algorithms
// - Object traversal
// - We will see it with more complex data structures
// - It's sometimes a cleaner alternative to iteration

// Section 7-43. 스택 호출하기

// But first...let's talk about fuctions
// - In almost all program languages, there is a built in data structure that manages what happens when functions are invoked
// - It's named the call stack!

// The call stack
// - It's a stack data structure - we'll talk about that later!
// - Any time a funtion is invoked it is placed(pushed) on the top of the call stack
// - When JavaScript sees the return keyword or when the function ends, the compiler will remove(pop)

// Why do I care?
// - You're used to function being pushed on the call stack and popped off when they are done
// - When we write recursive functions, we keep pushing new functions onto the call stack!

// Section 7-44. 첫번째 재귀 함수

// How recursive function work
// Invoke the same function with a different input until you reach your base case!

// Base Case
// The condition when the recursion ends.
// This is the most important concept to understand

// Two essential parts of a recursive function!
// - Base Case
// - Different Input

// Our first recursive function
// function countDown(num) {
//   if (num <= 0) {
//     console.log("All done!");
//     return;
//   }
//   console.log(num);
//   num--;
//   countDown(num);
// }

// countDown(10);

// Section 7-45. 두번째 재귀 함수

// Our second recursive function
function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

// 4
// 4 + 3
// 4 + 3 + 2
// 4 + 3 + 2 + 1 finish!

// console.log(sumRange(4));

// Section 7-46. 반복문으로 팩토리얼 구현하기

// function factorial(num) {
//   let total = 1;
//   for (let i = num; i > 1; i--) {
//     total *= i;
//   }

//   return total;
// }

// console.log(factorial(4));

// Section 7-47. 재귀 호출로 팩토리얼 구현하기

function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

console.log(factorial(4));

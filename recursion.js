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

// function factorial(num) {
//   if (num === 1) return 1;
//   return num * factorial(num - 1);
// }

// console.log(factorial(4));

// Section 7-49. Helper 메소드 재귀

// Helper Method Recursion

function outer(input) {
  var outerScopedVariable = [];

  function helper(helperInput) {
    // modify the outerScopedVariable
    helper(helperInput--);
  }
  helper(input);

  return outerScopedVariable;
}

// Another Example
// Let's try collect all of the odd values in an array!

function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}

// Section 7-50. 순수 재귀

// Pure Recursion

function collectOddValue(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValue(arr.slice(1)));
  return newArr;
}

// Pure Recursion Tips
// - For arrays, use methods like slice, the spread operator, and concat that make copies of arrays so you do not mutate them
// - Remember that strings are immutable so you will need to use methods like slice, substr, or
// - To make copies of objects use Object.assign, or the spread operator

// Section 8 재귀 문제 집합 코딩 연습 10:power

function power(num1, num2) {
  let result = 1;

  if (num2 === 0) {
    return result;
  }

  result = num1 * power(num1, num2 - 1);

  return result;
}

// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

// Section 8 재귀 문제 집합 코딩 연습 11:factorial

function factorial(num) {
  let result = 1;

  if (num === 0) {
    return result;
  }

  result = num * factorial(num - 1);

  return result;
}

// factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

// Section 8 재귀 문제 집합 코딩 연습 12:productOfArray

function productOfArray(arr) {
  let result = 1;
  let lastIndex = arr.length - 1;

  if (arr.length === 0) {
    return result;
  }

  result = arr[lastIndex] * productOfArray(arr.slice(0, lastIndex));

  return result;
}

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60
// productOfArray([1, 2, 3, 4, 5]) // 120

// Section 8 재귀 문제 집합 코딩 연습 13:recursiveRange

function recursiveRange(num) {
  let result = 0;
  if (num === 0) {
    return result;
  }

  result = num + recursiveRange(num - 1);

  return result;
}

// recursiveRange(6) // 21
// recursiveRange(10) // 55

// Section 8 재귀 문제 집합 코딩 연습 14:fib

function fib(num) {
  if (num <= 2) {
    return 1;
  }

  return fib(num - 1) + fib(num - 2);
}

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

// Section 9 보너스 도전 재귀 문제 코딩 연습 15:reverse

function reverse(str) {
  let result = "";
  let lastIndex = str.length - 1;

  if (str.length === 0) {
    return result;
  }

  result = str[lastIndex];

  return result + reverse(str.slice(0, lastIndex));
}

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

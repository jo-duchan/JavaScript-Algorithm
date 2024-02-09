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

// Section 9 보너스 도전 재귀 문제 코딩 연습 16:isPalindrome

function isPalindrome(str) {
  let result = true;
  let lastIndex = str.length - 1;

  if (str.length === 0) {
    return result;
  }

  if (str[0] === str[lastIndex]) {
    result = isPalindrome(str.slice(1, lastIndex));
  } else {
    result = false;
  }

  return result;
}

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

// Section 9 보너스 도전 재귀 문제 코딩 연습 17:someRecursive

const isOdd = (val) => val % 2 !== 0;

function someRecursive(arr, callback) {
  let result = false;
  let lastIndex = arr.length - 1;

  if (arr.length === 0) {
    return result;
  }

  if (callback(arr[lastIndex])) {
    result = true;
  } else {
    result = someRecursive(arr.slice(0, lastIndex), callback);
  }

  return result;
}

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

// Section 9 보너스 도전 재귀 문제 코딩 연습 18 flatten

function flatten(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArr = newArr.concat(flatten(arr[i]));
    } else {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3

// Section 9 보너스 도전 재귀 문제 코딩 연습 19 capitalizeFirst

function capitalizeFirst(arr) {
  let result = [];
  let newString = "";

  if (arr.length === 0) {
    return result;
  }

  newString = arr[0][0].toUpperCase() + arr[0].substr(1);
  result = [newString, ...capitalizeFirst(arr.slice(1))];

  return result;
}

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

// Section 9 보너스 도전 재귀 문제 코딩 연습 20 nestedEvenSum

function nestedEvenSum(obj) {
  let result = 0;

  Object.values(obj).map((value) => {
    if (typeof value === "number") {
      result += value % 2 === 0 ? value : 0;
    }

    if (typeof value === "object") {
      result += nestedEvenSum(value);
    }
  });

  return result;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

// nestedEvenSum(obj1); // 6
// nestedEvenSum(obj2); // 10

// Section 9 보너스 도전 재귀 문제 코딩 연습 21 capitalizeWords

function capitalizeWords(arr) {
  let result = [];
  let words = "";

  if (arr.length === 0) {
    return "";
  }

  for (let i = 0; i < arr[0].length; i++) {
    words += arr[0][i].toUpperCase();
  }

  result = [words, ...capitalizeWords(arr.slice(1))];

  return result;
}

// capitalizeWords(["test", "i", "words"]) // ["TEST", "I", "WORDS"]

// Section 9 보너스 도전 재귀 문제 코딩 연습 22 stringifyNumbers

let exObj1 = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

function stringifyNumbers(obj) {
  let keys;
  let values;
  let newObj = {};

  keys = Object.keys(obj);
  values = Object.values(obj).map((value) => {
    if (typeof value === "number") {
      return value.toString();
    }

    if (typeof value === "object" && !Array.isArray(value)) {
      return stringifyNumbers(value);
    }

    return value;
  });

  keys.map((key, index) => {
    newObj[`${key}`] = values[index];
  });

  return newObj;
}

// stringifyNumbers(exObj1)
// {
//   num: '1',
//   test: [],
//   data: { val: '4', info: { isRight: true, random: '66' } }
// }

// Section 9 보너스 도전 재귀 문제 코딩 연습 23 collectStrings

const exObj2 = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

function collectStrings(obj) {
  let result = [];

  Object.values(obj).map((value) => {
    if (typeof value === "string") {
      result.push(value);
    }

    if (typeof value === "object") {
      result = result.concat(collectStrings(value));
    }
  });

  return result;
}

// collectStrings(exObj2) // ["foo", "bar", "baz"])

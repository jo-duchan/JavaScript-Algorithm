// Section 2 Big O Notation

// Section 2-5
// https://cs.slides.com/colt_steele/big-o-notation

//Who Cares?
// - it's important to have a precise vocabulary to talk about how our code performs.
// - Useful for discussing  trade-offs between different approaches.
// - When your code slows down or crashes, identifying parts of the code that are inefficient help us find pain points in our applications.
// - Less important: it comes up in interviews.

// Section 2-6

//What does better mean?
// - Faster?
// - Less memory-intensive?
// - More readable?

// case 01
// function addUpTo(n) {
//   let total = 0;
//   for (let i = 1; i <= n; i++) {
//     total += i;
//   }
//   return total;
// }

// case 02
// function addUpTo(n) {
//   return (n * (n + 1)) / 2;
// }

//Why not use timers?
// let t1 = performance.now();
// addUpTo(1000000000);
// let t2 = performance.now();
// console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);

//The Problem with Time
// - Different machines will record different times.
// - The same machine will record different times!
// - For fast algorithms, speed measurements may not be precise enough?

// Section 2-7

// If not time, then what?
// Rather than counting seconds, which are so variable...
// Let's count the number of simple operations the computer has to perform!

// Counting is hard!
// Depending on what we count, the number of operations can be as low as 2n or as high as 5n + 2
// But regardless of the exact number, the number of operations grows roughly proportionally with n

// Section 2-9

// Introducing....Big O
// Big O Notation is a way to formalize fuzzy counting
// It allows us to talk formally about how the runtime of an algorithm grows as the inputs grow

// Big O Definition
// We say that an algorithm is O(f(n)) if the number of simple operations the computer has to do is eventually less than a constant times f(n), as n increases
// - f(n) could be linear (f(n) = n)
// - f(n) could be quadratic (f(n) = n²)
// - f(n) could be constant (f(n) = 1)
// - f(n) cloud be something entirely different!

// Another Example
// function countUpAndDown(n) {
//   console.log("Going Up!");
//   for (let i = 0; i < n; i++) {
//     console.log(i);
//   }

//   console.log("At the top! \nGoing down...");
//   for (let j = n - 1; j >= 0; j--) {
//     console.log(j);
//   }
//   console.log("Back down. Bye!");
// }

// countUpAndDown(10);
// Number of operations is (eventually) bounded by a multiple of n(say, 10n)
// O(n)

// OMG More Example
// function printAllPairs(n) {
//   for (var i = 0; i < n; i++) {
//     for (var j = 0; j < n; j++) {
//       console.log(i, j);
//     }
//   }
// }

// O(n) operation inside of an O(n) operation.
// O(n²)

// Section 2-10

// Simplifying Big O Expressions
// When determining the time complexity of an algorithm, there are some helpful rule of thumbs for Big O expressions.

// Constants Don't Matter
// O(2n)   -> O(n)
// O(500)  -> O(1)
// O(13n²) -> O(n²)
// O(n+10) -> O(n)

// Big O Shorthands
// - Analzing complexity with Big O can get complicated
// - There are several rules of thumb that can help
// - these rules won't ALWAYS wrok, but are a helpful starting point

// 1. Arithmetic operations are constant
// 2. Variable assignment is constant
// 3. Accessing elements in an array(by index) or object (by key) is constant
// 4. In a loop times the complexity of whatever happens inside of the loop

// A Couple More Examples

// function logAtLeast5(n) {
//   for (var i = 1; i <= Math.max(5, n); i++) {
//     console.log(i);
//   }
// }

// logAtLeast5(1);
// O(n)

// function logAtMost5(n) {
//   for (var i = 1; i <= Math.min(5, n); i++) {
//     console.log(i);
//   }
// }

// logAtMost5(10);
// O(1)

// Section 2-11

// Space Complexity
// So far, we've been focusing on time complexity: how can we analyze the runtime of an agorithm as th size of the inputs increases?
// We can also use Big O notation to analyze space complexity: how much additional memory do we need to allocate in order to run the code in our algorithm?

// Waht about the inputs?
// Sometimes you'll hear the term auziliary space complexity to refer to space required by the algorithm, not including space taken up by the inputs.
// Unless otherwise noted, when we talk about space complexity, technically we'll be talking about auxiliary space complexity.

// Space Complexity in JS(Rules of thumb)
// - Most primitives (booleans, numbers, undefined, null) are constant space.
// - Strings require O(n) space (where n is the string length)
// - Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects)

// An Example
// function sum(arr) {
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
//   }
//   return total;
// }
// O(1) space!

// Another Example
// function double(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArr.push(2 * arr[i]);
//   }
//   return newArr;
// }
// O(n) space!

// Section 2-12

// Logarithms
// We've encountered some of the most common complexities: O(1), O(n), O(n²)
// Sometimes Big O expressions involve more complex mathematical expressions
// One that appears more often than you might like is the logarithm!

// Wait, what's a log again?
// log₂(8) = 3 -> 2³=8

// Wut.
// This isn't math course, so here's a rule of thumb.
// The logarithm of a number roughly measures the number of times you can divide that number by 2 before you get a value that's less than or equal to one.

// Who Cares?
// Certain searching algorithms have logarithmic time complexity.
// Efficient sorting algorithms involve logarithms.
// Recursion sometimes involves logarithmic space complecity.

// Recap
// - To analyze the performance of an algorithm, we use Big O Notation
// - Big O Notation can give us a high level understanding of the thime or space complexity of an algorithm
// - The time or space complexity (an measured by Big O) depends only on the algorithm, not the hardware used to run the algorithm
// - Big O Notation is everywhere, so get lots of practice!

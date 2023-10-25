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

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
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

// case 02
// function addUpTo(n) {
//   return (n * (n + 1)) / 2;
// }

//Why not use timers?

let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();

console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);

//The Problem with Time
// - Different machines will record different times.
// - The same machine will record different times!
// - For fast algorithms, speed measurements may not be precise enough?

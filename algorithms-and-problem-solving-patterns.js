// Section 4-19. 문제 해결법 소개

// Objectoves
// - Define what an algorithm is
// - Devise a plan to solve algorithms
// - Compare and contrast problem solving patterns including frequency counters, two pointer problems and divide and conquer

// What is an algorithm?
// A process or set of steps to accomplish a certain task.

// What do I need to know this?
// Almost everything that you do in programming involves some kind of algorithm!
// It's the foundation for being a successful problem solving and developer Also Interviews

// How do you improve?
// 1. Devise a plan for solving problems
// 2. Master common problem solving patterns

// Problem solving
// - Understand the problem
// - Explore Concrete Examples
// - Break It Down
// - Solve/Simplify
// - Look Back and Refactor

// Section 4-20. 1단계:문제의 이해

// Understand the problem
// 1. Can I restate the problem in my own words?
// 2. What are the inputs that go into the problem?
// 3. What are the outputs that should come from the solution to the problem?
// 4. Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem?
// (You may not be able to answer this question until you set about solving the problem. That's okay. it's still worth considering the question at this early stage.)
// 5. How should I label the important pieces of data that are a part of the problem?

// Write a function which takes two numbers and returns their sum.

// Section 4-21. 2단계:구체적 예제들

// Explore Examples
// - Start with Simple Examples
// - Progress to More Complex Examples
// - Explore Examples with Empty Inputs
// - Explore Examples with Invalid Inputs

// Section 4-22. 3단계:세부 분석

// Break It Down
// Explicitly write out the steps you need to take.

//Write a function which takes in a string and returns counts of each character in the string.

// charCount("aaaa");
/* {
    a: 4
} */

// charCount("hello");
/* {
    h: 1,
    e: 1,
    l: 2,
    o: 1
} */

// charCount("Your PIN number is 1234!");
/* {
    1: 1,
    2: 1,
    3: 1,
    4: 1,
    b: 1,
    e: 1,
    i: 2,
    m: 1,
    n: 2,
    o: 1,
    p: 1,
    r: 2,
    s: 1,
    u: 2,
    y: 1
} */

// function charCount(str) {
//     do something
//     return an object with keys that are lowercase alphanumeric characters is the string; values should be the counts for those characters
// }

// function charCount(str) {
//     // make object to return at end
//     var result = {};
//     // loop over string, for each character...
//     for (var i = 0; i < str.length; i++) {
//         var char = str[i].toLowerCase();
//         // - if the char is a number/letter AND is a key in object, add one to count
//         if (result[char] > 0) {
//             result[char]++;
//         }
//         // - if the char is a number/letter AND not in object, add it to object and set value to 1
//         else {
//             result[char] = 1;
//         };
//     }
    
//     // if character is something else (space, period, etc.) don't do anything
//     // return object at end
//     return result;
// }
// console.log(charCount("Hi there!"));
// Section 4-23. 4단계:해결 또는 단순화

// Simplify
// - Find the core difficulty in what you're trying to do.
// - Temporarily ignore that difficulty
// - Write a simplified solution
// - Then incorporate that difficulty back in

// Section 4-24. 5단계:되돌아 보기와 리팩터(Refactor)

// Refactoring Questions
// - Can you check the result?
// - Can you derive the result differently?
// - Can you understand it at a glance?
// - Can you use the result or method for some other problem?
// - Can you improve the performance of your solution?
// - Can you think of other ways to refactor?
// - How have other people solved this problem?

// Before
// function charCount(str) {
//     var obj = {};
//     for (var i = 0; i < str.length; i++) {
//         var char = str[i].toLowerCase();
//         if (/[a-z0-9]/.test(char)) {
//             if (obj[char] > 0) {
//                 obj[char]++;
//             } else {
//                 obj[char] = 1;
//             }
//         }
//     }
//     return obj;
// }

// After
function charCount(str) {
    var obj = {};
    for (var char of str) {
        if (isAlphaNumberic(char)) {
            char = char.toLowerCase();
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}

// 정규식 대비 55% 이상 빠름
function isAlphaNumberic(char) {
    var code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) && // numeric(0-9)
        !(code > 64 && code < 91) && // upper alpha(A-Z)
        !(code > 96 && code < 123)) {
        return false;
    }
    return true;
}

console.log(charCount("Hi there!"));
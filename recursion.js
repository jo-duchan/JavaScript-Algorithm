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

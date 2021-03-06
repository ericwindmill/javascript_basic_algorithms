// Takes a multi-dimentional array and returns a single array of all the elements


Array.prototype.myFlatten = function() {

};
const test = [1,[2,3], [4,[5]]].myFlatten(); // [1,2,3,4,5]
console.log(test);


// Write a version of flatten that only flattens n levels of an array.
// E.g. If you have an array with 3 levels of nested arrays, and run
// my_flatten(1), you should return an array with 2 levels of nested
// arrays


Array.prototype.myControlledFlatten = function(n) {

};
// const tester = [1,[2,3], [4,[5]]].myControlledFlatten(5); // [1,2,3,4,[5]]
//
const tester2 = [1,[2,3,[[["a"], 6]]], [4,[5]]].myControlledFlatten(2); // [1,2,3,4,[5]]
const tester3= [1,[2,3,[[["a"], 6]]], [4,[5]]].myControlledFlatten(3); // [1,2,3,4,[5]]
console.log(tester2);
console.log(tester3);

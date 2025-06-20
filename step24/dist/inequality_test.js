"use strict";
// equality and inequality tests serise.
// equality test 1.
console.log('equality test with strings: ', "apple" === "apple");
console.log('equality test with strings: ', "apple" !== 'apple');
// inequality test 2.
console.log('inequality test with string:', "Ali" === "Ali");
console.log('inequality test with string:', "Ali" !== "Ali");
// using the lowercase function test 3.
console.log('lowercase function test:', "HELLO".toLowerCase() === "hello");
console.log('lowercase function test:', "HELLO".toLowerCase() === "HELLO");
// numerical test of equality test 4.
console.log('equality test with number:', 9 === 9);
console.log('equality test with number:', 9 !== 9);
// numeeical test of inequality test 5.
console.log('inequality test with number:', 3 !== 5);
console.log('inequality test with number:', 44 > 55);
//greater than test 6.
console.log('greater than test:', 10 > 5);
console.log('greater than test:', 10 < 5);
// less than test 7.
console.log('less than test:', 8 < 9);
console.log('less than test:', 8 > 9);
// greater than and equal to test 8.
console.log('greater than and equal to test:', 11 >= 11);
console.log('greater than and equal to test:', 13 <= 11);
// less than and equal to test 9.
console.log('less than and equal to test:', 5 <= 6);
console.log('less than and equal to test:', 5 >= 6);
// using 'and' operator test 10.
console.log('AND operator test:', 6 === 6 && 9 > 8);
console.log('AND operator test:', 4 === 4 && 4 < 1);
// using 'OR' operator test 11.
console.log('OR operator test:', 2 === 2 || 2 > 4);
console.log('OR operator test:', 6 < 4 || 2 > 4);
// item is in the array test 12.
let fruits = ['apple', 'orange', 'mango'];
console.log("test 'apple' in array:", fruits.includes('apple'));
console.log('test "apple" in array:', !fruits.includes('apple'));
// item is not in array test 13.
console.log('test "banana" is not in array:', !fruits.includes("banana"));
console.log('test"banana" is not in array:', fruits.includes('banana'));

// Q4:
// Given the array below, write code to:
// 1. Add 'pineapple' to the end
// 2. Remove the first item
// 3. Log the updated array and its length
// const fruits = ["mango", "orange", "banana"];

const fruits = ["mango", "orange", "banana"];
fruits.push("pineapple");
fruits.shift();
console.log("These are the fruits:", fruits);
console.log("fruits length :", fruits.length);

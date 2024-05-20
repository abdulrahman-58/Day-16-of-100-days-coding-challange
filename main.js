// 🚀 Day 16 Challenge: Start Coding! 🚀
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Question 46: Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.
// let laptop = {
//   make: "Dell",
//   model: "XPS 13",
//   year: "2020",
//   describe: function () {
//     console.log(
//       `This is a laptop of "${this.make}" and it's model is "${this.model}" and maufacturing year is "${this.year}"`
//     );
//   },
// };
// laptop.describe();
// Question 47: Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.
// let laptops =[
//     {make: "Dell", model: "XPS 17", year: "2022"},
//     {make: "HP", model: "Envy x360", year: "2023"},   
//     {make: "Samsung", model: "Samsung Galaxy Book", year: "2021"},
// ]
// let [laptop1, laptop2] = laptops;
// console.log(laptop1);
// console.log(laptop2);
// Question 48: Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.
var pricesSet1 = [100000, 50000, 80000];
var pricesSet2 = [30000, 90000, 65000];
var combineSets = __spreadArray(__spreadArray([], pricesSet1, true), pricesSet2, true).sort(function (a, b) { return a - b; });
console.log(combineSets);

// 01. Find the average marks of the class
const marks = [85, 97, 44, 37, 76, 60];

// First, let's sum up all the marks in the array
const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);

// Now, divide the total by the number of students to get the average
const averageMarks = totalMarks / marks.length;

console.log("Average Marks:", averageMarks); // Output: 66.5

// 02. Apply a 10% discount on prices
const prices = [250, 645, 300, 900, 50];

// We'll apply a 10% discount by multiplying each price by 0.9
const finalPrices = prices.map((price) => price * 0.9);

console.log("Final Prices after Discount:", finalPrices); // Output: [225, 580.5, 270, 810, 45]

// 03. Modify the array of companies
const companies = [
  "Bloomberg",
  "Microsoft",
  "Uber",
  "Google",
  "IBM",
  "Netflix",
];

// a. First, remove the very first company from the list
companies.shift(); // Removes "Bloomberg"

// b. Now, let's find "Uber" and replace it with "Ola"
const uberIndex = companies.indexOf("Uber"); // Find where "Uber" is in the list
if (uberIndex !== -1) {
  companies.splice(uberIndex, 1, "Ola"); // Replace "Uber" with "Ola"
}

// c. Finally, add "Amazon" to the end of the list
companies.push("Amazon");

console.log("Modified Companies Array:", companies);

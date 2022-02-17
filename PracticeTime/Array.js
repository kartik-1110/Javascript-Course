// let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"];

// console.log("The 5 largest countries in the world: ");
// for (let i = 0; i < largeCountries.length; i++) {
//   console.log("- " + largeCountries[i]);
// }

let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];

largeCountries.pop();
largeCountries.push("Pakistan");

largeCountries.shift();
largeCountries.unshift("China");

console.log(largeCountries);

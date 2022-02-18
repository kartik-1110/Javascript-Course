const basePrice = 520;
const discount = 120;
let shippingCost = 12;
let shippingTime = "5-12 days";

// Reassigning some values
shippingCost = 15;
shippingTime = "7-14 days";

// calc full price
let fullPrice = basePrice - discount + shippingCost;

// notification to customer
console.log("Total cost: " + fullPrice + ", It will arrive in " + shippingTime);

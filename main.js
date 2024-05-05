// The following program is created so that Users can check to see the status of thier package for a 
package shipping service, Express Shipping
// The code uses Javascript, and can be run using any Javascript IDE
// For the program to work, the code is ran in an output dialauge box, and the user is brought with 
prompts to enter information
// Because Express Shipping is made up, and there are no customer numbers or order numbers, these 
can be substituted for randomly generated numbers by the user, but would serve a real purpose when 
implemented
// Additionally, due to the nature of the company made up, a random number generator is used to add 
complexity to the program to generate an example of how many items could be in each package
// Global Vairables
let name; // Name Vairable
let custnum; // Customer Number Vairable
let ordernum; // Order Number Vairable
let status; // Status Vairable, giving the delivery status of the package
let first3custnum; // String of the first 3 numbers of the customer number
let last4ordernum; // String of the last 4 numbers of the order number
let first1ordernum; // String of the first numbr of the order number
let first1custnum; // String of the first number of the customer number
let second1ordernum; // String of the second number in the order number
let shippingstatus; // Text for the shipping status
// Sets the vairables for the random number generator function
let min = 1; // Minimum Random Number is 1
let max = 100; // Maximum Random number is 100
let randomInt = getRandomInt(min, max);
// Array that holds the times that can be outputted for the User
let shippingtime = ["less than 1 day", "1 day", "2 days", "3 days", "More Than One Week"];
// checking to see if the input numbers or name are not correct
let customernumberpattern = /^\d+$/;
let namepattern = /^\d+$/;
let ordernumberpattern = /^\d+$/;
// Text Logic and Prompts
name = prompt("Please enter your name:");
// If name entered incorrectly, run this to correct the name
while (namepattern.test(name)){
 name = prompt("You entered a number in your name, please try again");
}
custnum = prompt("Please enter your 5-digit customer number:");
// If customer number entered incorrectly, run this code to correct the number
while (!customernumberpattern.test(custnum)){
 custnum = prompt("You entered a letter in your Customer number, please enter your 5-digit customer 
number again");
}
ordernum = prompt("Please enter your 8-digit order number, remember this can only be numbers!!");
// If ordernumber entered incorrectly, run this code to correct the number
while (!ordernumberpattern.test(ordernum)){
 ordernum = prompt("You entered a letter in your Order number, please enter your 8-digit order 
number again");
}
// set the default status for the package to be lost, updated only from the shipping status logic
status = "Package Lost";
// Storing number strings from user input
first3custnum = custnum.substr(0,3);
last4ordernum = ordernum.substr(4,4);
first1ordernum = ordernum.substr(0,1);
first1custnum = custnum.substr(0,1);
second1ordernum = ordernum.substr(1,1);
// Package Shipping Status logic
if (first1ordernum <= 5) {
status = "Your package has Shipped";
}
else if (first1ordernum > 5) {
status = "Sorry, Unfortunatley, your package has been delayed until further notice. Please check back 
soon";
}
// Shipping Time Logic
if (second1ordernum <= 2) {
shippingstatus = shippingtime[0];
}
else if ((second1ordernum > 2) && (second1ordernum <= 4)){
shippingstatus = shippingtime[1];
}
else if ((second1ordernum > 4) && (second1ordernum <= 6)){
shippingstatus = shippingtime[2];
}
else if ((second1ordernum > 6) && (second1ordernum <= 8)){
shippingstatus = shippingtime[3];
}
else if ((second1ordernum > 8) && (second1ordernum <= 9)){
shippingstatus = shippingtime[4];
}
// Function to create a random number of objects inside of the package
function getRandomInt(min, max) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Printing User Interface
console.log(" ");
console.log("**********************************************************************");
console.log("User Input:");
console.log(" ");
console.log("Please enter your name: > "+ name);
console.log(" ");
console.log("Please enter your 5-digit customer number: > " + custnum);
console.log(" ");
console.log("Please enter your 8-digit order number: > " + ordernum);
console.log(" ");
console.log("Card Number used: > ****");
console.log(" ");
console.log("**********************************************************************");
console.log(" ");
console.log("Welcome Back, " + name + " - Congratulations, you are Loyaltly level " + first1custnum + 
"!");
console.log(" ");
console.log("Please hold, your order status is being retrieved");
console.log(" ");
console.log("**********************************************************************");
console.log(" ");
console.log(status);
console.log(" ");
console.log("Your Package will arrive in: " + shippingstatus);
console.log(" ");
console.log("Your Package contains " + randomInt + " items inside");
console.log(" ");
console.log("If you have any other questions, please reference chat number " + first3custnum + 
last4ordernum + ".");
console.log(" ");
console.log("Thanks for choosing Express Shipping!! Have a great day!");
console.log(" ");
console.log("**********************************************************************");

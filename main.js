// Get the first number from the user
let num1 = parseFloat(prompt("Enter the first number:"));

// Get the second number from the user
let num2 = parseFloat(prompt("Enter the second number:"));

// Get the operation (+, -, *, /) from the user
let operation = prompt("Enter the operation (+, -, *, /):");

// Declare a variable to hold the result
let result;

// Perform the operation based on the user's input
if (operation === "+") {
  result = num1 + num2;
} else if (operation === "-") {
  result = num1 - num2;
} else if (operation === "*") {
  result = num1 * num2;
} else if (operation === "/") {
  // Check if the second number is zero to avoid division by zero
  if (num2 === 0) {
    alert("Error! Division by zero is not allowed.");
  } else {
    result = num1 / num2;
  }
} else {
  alert("Invalid operation! Please enter one of +, -, *, /.");
}

// Display the result if it's calculated
if (result !== undefined) {
  alert("The result is: " + result);
}

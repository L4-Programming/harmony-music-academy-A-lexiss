// Display a form to the user @@
// Include input fields for the user's email address, level, and hours of study @@
import { validateForm } from "./validateForm.js";
import { calculateCosts } from "./calculateCost.js";
import { displayResults } from "./displayResults.js";

// Capture user's input on form submission
let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Store the user's email address as userEmail (string/text)
  let userEmail = document.querySelector("#email").value;
  //get the users level - userLevel (string)
  let userLevel = document.querySelector("#level").value;
  //get users hours of study - userHours (number)
  let userHours = parseInt(document.querySelector("#hoursPerWeek").value);

  // Validate the user's input
  const result = validateForm({ userEmail, userLevel, userHours });

  if (result) {
    // Calculate the total cost
    const output = calculateCosts(result);

    displayResults(output);
  }
  // return{
  // userEmail
  //userLevel
  //userHours: parseInt(userHours),
});

// Display the total cost to the user

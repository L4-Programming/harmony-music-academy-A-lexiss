// Display a form to the user @@
// Include input fields for the user's email address, level, and hours of study @@

// Capture user's input on form submission
let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const maxHoursPerLevel = {
    basic: 5,
    advanced: 10,
  };

  // Store the user's email address as userEmail (string/text)
  let userEmail = document.querySelector("#email").value;
  //get the users level - userlevel (string)
  let userLevel = document.querySelector("#level").value;
  //get users hours of study - userhours (number)
  let userHours = parseInt(document.querySelector("#hoursPerWeek").value);

  // Validate the user's input
  let errors = {};

  // Helper function to add error messages
  function addError(field, message) {
    if (!errors[field]) {
      errors[field] = { messages: [] };
    }
    errors[field].messages.push(message);
  }

  // Check if the user has provided an email address
  if (userEmail === "") {
    addError("email", "Please enter your email address.");
  }

  // Check if the user has selected a level
  if (userLevel === "") {
    addError("level", "Please select a level of study.");
  }

  // Check if the user has specified at least one hour of study
  if (isNaN(userHours) || userHours < 1) {
    addError("hoursPerWeek", "Please enter at least one hour of tuition.");
  }

  // Check if the userLevel exists in the maxHoursPerLevel object
  if (!maxHoursPerLevel.hasOwnProperty(userLevel)) {
    addError("level", "Invalid level of study selected.");
  }

  // Check if the number of hours requested is within the allowed range
  const maxAllowedHours = maxHoursPerLevel[userLevel];
  if (userHours > maxAllowedHours) {
    addError(
      "hoursPerWeek",
      `You can only study a maximum of ${maxAllowedHours} hours per week.`
    );
  }
  for (let field in errors) {
    let inputElement = document.querySelector(`#${field}`);
    let labelElement = document.querySelector(`label[for=${field}]`);
    if (inputElement) {
      inputElement.classList.add("error-input");
    }
    if (labelElement) {
      labelElement.classList.add("error-label");
    }
  }

  console.log({ errors });
});

// Validate the user's input

// Check if the user has specified at least one hour of study - =>1 hours selected,
// Check if the number of hours requested is within the allowed range - <= maximum number for the level
// Calculate the total cost
// Display the total cost to the user

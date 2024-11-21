export function calculateCosts(data) {
  const levelCosts = {
    basic: 12.25,
    advanced: 15.5,
  };

  // Calculate total cost based on study hours and level

  let costPerHour = levelCosts[data.userLevel];
  let totalCost = (costPerHour * data.userHours).toFixed(2);

  const output = {
    totalCost,
    userEmail: data.userEmail,
    userHours: data.hoursPerWeek,
    userLevel: data.userLevel,
  };

  return output;
}

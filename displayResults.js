export function displayResults(output) {
  let results = document.querySelector("#results");

  results.innerHTML = `
  <dl>
    <dd class="results-email">${output.userEmail}</dd>

    <dd class="results-cost">£${output.totalCost}<span>per week</span></dd>

    <div class="results-details">
      <div>
        <dt>Level</dt>
        <dd class="results-detail">${output.userLevel}</dd>
      </div>
      <div>
        <dt>Hours</dt>
        <dd class="results-detail">${output.hoursPerWeek}</dd>
      </div>
    </div>
  </dl>
`;
}

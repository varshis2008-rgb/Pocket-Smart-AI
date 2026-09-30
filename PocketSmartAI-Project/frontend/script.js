const BASE_URL = "http://127.0.0.1:8000";

// Home Planner
document.getElementById("homeForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  let budget = document.getElementById("homeBudget").value;

  let response = await fetch(`${BASE_URL}/generate-home?budget=${budget}`);
  let data = await response.json();

// Party Planner
document.getElementById("partyForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  let budget = document.getElementById("partyBudget").value;
  let guests = document.getElementById("partyGuests").value;

  let response = await fetch(`${BASE_URL}/generate-party?budget=${budget}&guests=${guests}`);
  let data = await response.json();

  document.getElementById("partyResults").innerHTML = `
    <h4>Party Planner Results</h4>
    <p><strong>Budget:</strong> ₹${data.budget}</p>
    <p><strong>Guests:</strong> ${data.guests}</p>
    <p><strong>Recommendations:</strong></p>
    <ul>${data.recommendations.map(item => `<li>${item}</li>`).join("")}</ul>
  `;
});

// Jewelry Planner
document.getElementById("jewelryForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  let budget = document.getElementById("jewelryBudget").value;

  let response = await fetch(`${BASE_URL}/generate-jewelry?budget=${budget}`);
  let data = await response.json();

  document.getElementById("jewelryResults").innerHTML = `
    <h4>Jewelry Planner Results</h4>
    <p><strong>Budget:</strong> ₹${data.budget}</p>
    <p><strong>Recommendations:</strong></p>
    <ul>${data.recommendations.map(item => `<li>${item}</li>`).join("")}</ul>
  `;
});
});

// Party Planner
document.getElementById("partyForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  let budget = document.getElementById("partyBudget").value;
  let guests = document.getElementById("partyGuests").value;

  let response = await fetch(`${BASE_URL}/generate-party?budget=${budget}&guests=${guests}`);
  let data = await response.json();

  document.getElementById("partyResults").innerText = JSON.stringify(data, null, 2);
});

// Jewelry Planner
document.getElementById("jewelryForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  let budget = document.getElementById("jewelryBudget").value;

  let response = await fetch(`${BASE_URL}/generate-jewelry?budget=${budget}`);
  let data = await response.json();

  document.getElementById("jewelryResults").innerText = JSON.stringify(data, null, 2);
});
// Home Planner
document.getElementById("homeForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  let budget = document.getElementById("homeBudget").value;

  let response = await fetch(`${BASE_URL}/generate-home?budget=${budget}`);
  let data = await response.json();

  document.getElementById("homeResults").innerHTML = `
    <h4>Home Planner Results</h4>
    <p><strong>Budget:</strong> ₹${data.budget}</p>
    <p><strong>Recommendations:</strong></p>
    <ul>${data.recommendations.map(item => `<li>${item}</li>`).join("")}</ul>
  `;
});
// Home Planner
document.getElementById("homeForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  let budget = document.getElementById("homeBudget").value;

  let response = await fetch(`${BASE_URL}/generate-home?budget=${budget}`);
  let data = await response.json();

  document.getElementById("homeResults").innerHTML = `
    <h4>Home Planner Results</h4>
    <p><strong>Budget:</strong> ₹${data.budget}</p>
    <p><strong>Recommendations:</strong></p>
    <ul>${data.recommendations.map(item => `<li>${item}</li>`).join("")}</ul>
  `;
});

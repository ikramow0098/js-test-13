// ========================
// Task 2: Add Employee Cards Dynamically
// ========================

document.getElementById("addEmployeeBtn").addEventListener("click", function() {
  addEmployee("John Doe", "Software Engineer");
});

function addEmployee(name, position) {
  const employeeContainer = document.getElementById("employeeContainer");
  const card = document.createElement("div");
  card.classList.add("employee-card");

  const nameElem = document.createElement("h3");
  nameElem.textContent = name;

  const positionElem = document.createElement("p");
  positionElem.textContent = position;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.addEventListener("click", function(event) {
      event.stopPropagation();
      employeeContainer.removeChild(card);
  });

  card.appendChild(nameElem);
  card.appendChild(positionElem);
  card.appendChild(removeBtn);
  employeeContainer.appendChild(card);
}

// ========================
// Task 3: Bulk Update on Employee Cards
// ========================

document.getElementById("bulkUpdateBtn").addEventListener("click", function() {
  const employeeCards = Array.from(document.querySelectorAll(".employee-card"));
  employeeCards.forEach(card => {
      card.style.backgroundColor = "#f0ad4e";  // Highlighting cards
      card.style.border = "2px solid #d9534f";
  });
});

// ========================
// Task 4: Employee Card Removal with Event Bubbling
// ========================

document.getElementById("employeeContainer").addEventListener("click", function(event) {
  if (event.target.classList.contains("employee-card")) {
      console.log("Employee card clicked");
  }
});


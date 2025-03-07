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

// ========================
// Task 5: Inline Editing for Employee Cards
// ========================

document.getElementById("employeeContainer").addEventListener("dblclick", function(event) {
  const card = event.target.closest(".employee-card");
  if (!card) return;

  const nameElem = card.querySelector("h3");
  const positionElem = card.querySelector("p");

  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.value = nameElem.textContent;

  const positionInput = document.createElement("input");
  positionInput.type = "text";
  positionInput.value = positionElem.textContent;

  const saveBtn = document.createElement("button");
  saveBtn.textContent = "Save";
  saveBtn.addEventListener("click", function() {
      nameElem.textContent = nameInput.value;
      positionElem.textContent = positionInput.value;
      card.replaceChild(nameElem, nameInput);
      card.replaceChild(positionElem, positionInput);
      card.removeChild(saveBtn);
  });

  card.replaceChild(nameInput, nameElem);
  card.replaceChild(positionInput, positionElem);
  card.appendChild(saveBtn);
});


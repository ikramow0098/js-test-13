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



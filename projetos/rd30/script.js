const checkboxes = document.querySelectorAll(`input[type="checkbox"]`);
const checkboxesOptions = document.querySelectorAll("#checkboxes > input");
const checkboxesDays = document.querySelectorAll("#checkboxesDays > input");

checkboxesOptions.forEach(checkbox => {
  checkbox.addEventListener("click", () => {
    checkCheckbox(checkbox);
  });
});

// Checkboxes options

checkboxesDays.forEach(checkbox => {
  checkbox.addEventListener("click", () => {
    checkCheckbox(checkbox);

    // Previous checkboxes
    
    const checkboxIndex = Array.from(checkboxesDays).indexOf(checkbox);
    
    for(let i = checkboxIndex; i >= 0; i--) {
      const currentCheckbox = Array.from(checkboxesDays)[i];
      const hasCheckedClass = currentCheckbox.classList.contains("checked");

      if(!hasCheckedClass) {
        currentCheckbox.classList.add("checked");
        currentCheckbox.click();
      }
    }
  });
});

function checkCheckbox(checkbox) {
  const hasCheckedClass = checkbox.classList.contains("checked");
  
  if(!hasCheckedClass) {
    checkbox.classList.add("checked");
  }
  
  else {
    checkbox.classList.remove("checked");
  }
}
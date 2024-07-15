document.addEventListener("DOMContentLoaded", function () {
  const sectionLinks = document.querySelectorAll(".section-link");
  const sections = document.querySelectorAll(".section");

  // Function to show a section by its ID
  function showSection(sectionId) {
    sections.forEach((section) => {
      section.classList.remove("active");
      if (section.id === sectionId) {
        section.classList.add("active");
      }
    });
  }

  // Set up click event listeners for section links
  sectionLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      sectionLinks.forEach((link) => link.classList.remove("active"));
      this.classList.add("active");
      const sectionId = this.getAttribute("data-section");
      showSection(sectionId);
    });
  });

  // Show the "Basics" section by default
  showSection("basics-section");
});

function addWorkEntry(button) {
  const container = document.getElementById("work-section");

  // Hide the "Add Work Experience" button from the previous form if it's not the initial form
  if (
    button &&
    !button.closest(".work-entry").classList.contains("initial-entry")
  ) {
    button.style.display = "none";
  }

  const entryDiv = document.createElement("div");
  entryDiv.classList.add("work-entry");
  entryDiv.innerHTML = `
   <div class="form-group">
              <label for="work_name">Company:</label>
              <input
                type="text"
                id="work_name"
                name="work_name[]"
                class="form-control"
              /><br />
            </div>
            <div class="form-group">
              <label for="work_position">Position:</label>
              <input
                type="text"
                id="work_position"
                name="work_position[]"
                class="form-control"
              /><br />
            </div>
            <div class="form-group">
              <label for="work_startDate">Start Date:</label>
              <input
                type="date"
                id="work_startDate"
                name="work_startDate[]"
                class="form-control"
              /><br />
            </div>
            <div class="form-group">
              <label for="work_endDate">End Date:</label>
              <input
                type="date"
                id="work_endDate"
                name="work_endDate[]"
                class="form-control"
              /><br />
            </div>
            <div class="form-group">
              <label for="work_summary">Summary:</label>
              <textarea
                id="work_summary"
                name="work_summary[]"
                class="form-control"
              ></textarea
              ><br />
            </div>

      

            <h3>Highlights</h3>
            
                        <div class="form-group">
                          <ul class="highlights-list" data-field="work_highlights">
                            <li>
                              <input
                                type="text"
                                name="work_highlights[0][]"
                                class="form-control"
                              />
                            </li>
                          </ul>
                          <button type="button" 
                          class="highlights"
                          onclick="addHighlight(this)">
                            Add Highlight
                          </button>
                        </div>
              <button type="button" onclick="addWorkEntry()" class="add-btn">
                Add Work Experience
              </button>
          </div>
  `;
  container.appendChild(entryDiv);
}

function removeEntry(button) {
  const entryDiv = button.closest(".work-entry");
  entryDiv.remove();
}

function addHighlight(button) {
  const ul = button.closest(".work-entry").querySelector(".highlights-list");
  const newHighlight = document.createElement("li");
  newHighlight.innerHTML = `
    <input type="text" name="work_highlights[][${ul.children.length}]" class="form-control">
    <button type="button" onclick="removeHighlight(this)" class="remove-highlight">Remove</button>
  `;
  ul.appendChild(newHighlight);
}

function removeHighlight(button) {
  const li = button.closest("li");
  li.remove();
}

// Function to remove an education entry
function removeEntry(button) {
  button.parentElement.remove();
}

// Function to add a new education entry
function addEducationEntry() {
  const container = document.getElementById("education-section");
  const entryDiv = document.createElement("div");
  entryDiv.classList.add("education-entry");
  entryDiv.innerHTML = `
    <div class="form-group">
      <label for="education_institution">Institution:</label>
      <input type="text" name="education_institution[]" class="form-control" />
    </div>
    <div class="form-group">
      <label for="education_area">Area of Study:</label>
      <input type="text" name="education_area[]" class="form-control" />
    </div>
    <div class="form-group">
      <label for="education_startDate">Start Date:</label>
      <input type="date" name="education_startDate[]" class="form-control" />
    </div>
    <div class="form-group">
      <label for="education_endDate">End Date:</label>
      <input type="date" name="education_endDate[]" class="form-control" />
    </div>
    <div class="form-group">
      <label for="education_score">Score:</label>
      <input type="text" name="education_score[]" class="form-control" />
    </div>
    <button type="button" onclick="removeEntry(this)" class="removes">Remove</button>
  `;
  // Insert the new entry before the "Add Education" button
  container.insertBefore(
    entryDiv,
    container.querySelector('button[onclick= "addEducationEntry()"]')
  );
}

// // Function to remove an award entry
// function removeEntry(button) {
//   button.parentElement.remove();
// }

// Function to remove a certificate entry
function removeEntry(button) {
  button.parentElement.remove();
}

// Function to add a new certificate entry
function addCertificateEntry() {
  const container = document.getElementById("certificates-section");
  const entryDiv = document.createElement("div");
  entryDiv.classList.add("certificate-entry");
  entryDiv.innerHTML = `
    <div class="form-group">
      <label for="certificates_name">Name:</label>
      <input type="text" name="certificates_name[]" class="form-control" />
    </div>
    <div class="form-group">
      <label for="certificates_date">Date:</label>
      <input type="date" name="certificates_date[]" class="form-control" />
    </div>
    <button type="button" onclick="removeEntry(this)">Remove</button>
  `;
  // Insert the new entry before the "Add Certificate" button
  container.insertBefore(
    entryDiv,
    container.querySelector('button[onclick="addCertificateEntry()"]')
  );
}

// Function to remove a skill entry
function removeEntry(button) {
  button.parentElement.remove();
}

// Function to add a new skill entry
function addSkillEntry() {
  const container = document.getElementById("skills-section");
  const entryDiv = document.createElement("div");
  entryDiv.classList.add("skill-entry");
  entryDiv.innerHTML = `
    <div class="form-group">
      <label for="skills_name">Name:</label>
      <input type="text" name="skills_name[]" class="form-control" />
    </div>
    <div class="form-group">
              <label for="skills_level">Level:</label>
              <select id="skills_level" name="skills_level[]" class="form-control">
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>
    <button type="button" onclick="removeEntry(this)">Remove</button>
  `;
  // Insert the new entry before the "Add Skill" button
  container.insertBefore(
    entryDiv,
    container.querySelector('button[onclick="addSkillEntry()"]')
  );
}

// Function to remove a language entry
function removeEntry(button) {
  button.parentElement.remove();
}

// Function to add a new language entry
function addLanguageEntry() {
  const container = document.getElementById("languages-section");
  const entryDiv = document.createElement("div");
  entryDiv.classList.add("language-entry");
  entryDiv.innerHTML = `
    <div class="form-group">
      <label for="languages_language">Language:</label>
      <input type="text" name="languages_language[]" class="form-control" />
    </div>
    <div class="form-group">
      <label for="languages_fluency">Fluency:</label>
      <select id="languages_fluency" name="languages_fluency[]" class="form-control">
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
        <option value="Native">Native</option>
      </select>
    </div>
    <button type="button" onclick="removeEntry(this)">Remove</button>
  `;
  // Insert the new entry before the "Add Language" button
  container.insertBefore(
    entryDiv,
    container.querySelector('button[onclick="addLanguageEntry()"]')
  );
}

// Function to remove an entry (interest or keyword)
function removeEntry(button) {
  button.parentElement.remove();
}

// function addHighlight(button) {
//   const highlightsList = button.previousElementSibling;
//   const newHighlight = document.createElement("li");
//   const index = highlightsList.querySelectorAll("li").length;
//   newHighlight.innerHTML = `<input type="text" name="${highlightsList.dataset.field}[0][]" class="form-control">`;
//   highlightsList.appendChild(newHighlight);
// }

function addHighlight(button) {
  const highlightsList = button.previousElementSibling;

  // Remove the delete button from the last highlight if it exists
  const lastHighlight = highlightsList.querySelector("li:last-child button");
  if (lastHighlight) {
    lastHighlight.remove();
  }

  const newHighlight = document.createElement("li");
  const index = highlightsList.querySelectorAll("li").length;
  newHighlight.innerHTML = `
    <input type="text" name="${highlightsList.dataset.field}[0][]" class="form-control">
    <button type="button" onclick="deleteHighlight(this)">Delete</button>
  `;
  highlightsList.appendChild(newHighlight);
}

function deleteHighlight(button) {
  const highlightItem = button.parentElement;
  highlightItem.remove();

  // If there are other highlights, add the delete button to the last one
  const highlightsList = document.querySelector(".highlights-list");
  const lastHighlight = highlightsList.querySelector("li:last-child");
  if (lastHighlight && !lastHighlight.querySelector("button")) {
    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.onclick = () => deleteHighlight(deleteButton);
    deleteButton.textContent = "Delete";
    lastHighlight.appendChild(deleteButton);
  }
}

var htmlContent = "";
function submitJson() {
  const form = document.getElementById("submit-form");
  const formData = new FormData(form);
  const jsonObject = {
    basics: {
      name: formData.get("basics_name"),
      label: formData.get("basics_label"),
      email: formData.get("basics_email"),
      phone: formData.get("basics_phone"),
      summary: formData.get("basics_summary"),
      location: {
        address: formData.get("basics_location_address"),
        postalCode: formData.get("basics_location_postalCode"),
        city: formData.get("basics_location_city"),
        countryCode: formData.get("basics_location_countryCode"),
      },
      profiles: [],
    },
    work: [],
    education: [],
    certificates: [],
    skills: [],
    languages: [],
  };

  // Add profiles
  const profilesContainer = document.getElementById("profiles-container");
  const profiles = profilesContainer.querySelectorAll(".profile");
  profiles.forEach((profile) => {
    jsonObject.basics.profiles.push({
      network: profile.querySelector('input[name="basics_profiles_network[]"]')
        .value,
      username: profile.querySelector(
        'input[name="basics_profiles_username[]"]'
      ).value,
      url: profile.querySelector('input[name="basics_profiles_url[]"]').value,
    });
  });

  // Add work experience
  const workEntries = document.querySelectorAll(".work-entry");
  workEntries.forEach((entry) => {
    jsonObject.work.push({
      name: entry.querySelector('input[name="work_name[]"]').value,
      position: entry.querySelector('input[name="work_position[]"]').value,
      //url: entry.querySelector('input[name="work_url[]"]').value,
      startDate: entry.querySelector('input[name="work_startDate[]"]').value,
      endDate: entry.querySelector('input[name="work_endDate[]"]').value,
      summary: entry.querySelector('textarea[name="work_summary[]"]').value,

      highlights: Array.from(
        document.querySelectorAll('input[name^="work_highlights"]'),
      ).map((input) => input.value),
    });
  });

  // Add education
  const educationEntries = document.querySelectorAll(".education-entry");
  educationEntries.forEach((entry) => {
    jsonObject.education.push({
      institution: entry.querySelector('input[name="education_institution[]"]')
        .value,
      area: entry.querySelector('input[name="education_area[]"]').value,
      startDate: entry.querySelector('input[name="education_startDate[]"]')
        .value,
      endDate: entry.querySelector('input[name="education_endDate[]"]').value,
      score: entry.querySelector('input[name="education_score[]"]').value,
    });
  });

  // Add certificates
  const certificateEntries = document.querySelectorAll(".certificate-entry");
  certificateEntries.forEach((entry) => {
    jsonObject.certificates.push({
      name: entry.querySelector('input[name="certificates_name[]"]').value,
      date: entry.querySelector('input[name="certificates_date[]"]').value,
    });
  });

  // Add skills
  const skillEntries = document.querySelectorAll(".skill-entry");
  skillEntries.forEach((entry) => {
    jsonObject.skills.push({
      name: entry.querySelector('input[name="skills_name[]"]').value,
      level: entry.querySelector('select[name="skills_level[]"]').value,
    });
  });

  // Add languages
  const languageEntries = document.querySelectorAll(".language-entry");
  languageEntries.forEach((entry) => {
    jsonObject.languages.push({
      language: entry.querySelector('input[name="languages_language[]"]').value,
      fluency: entry.querySelector('select[name="languages_fluency[]"]').value,
    });
  });

  const jsonString = JSON.stringify(jsonObject, null, 2);
  // Display the JSON string in the PDF previewer
  const jsonPreviewDiv = document.getElementById("json-preview");
  jsonPreviewDiv.textContent = jsonString;
  //  console.log(jsonString);
  fetch("/submit-form", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: jsonString,
  })
    .then((response) => response.json())
    .then((data) => {
      htmlContent = data.html; // Save the HTML content
      console.log("HTML Preview Updated");
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  // Hide the PDF iframe
  document.getElementById("pdf-frame").style.display = "none";

  // Show the JSON preview
  document.getElementById("json-preview").style.display = "block";
}

function showPdf() {
  // Show the loading bar
  const loadingBar = document.getElementById("loading-bar");
  const bar = document.querySelector("#loading-bar .bar");
  loadingBar.style.display = "block";


  // Start the loading bar animation
  bar.style.width = "0";
  let startTime = Date.now();


  fetch("/generate-pdf", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ html: htmlContent }), // Send the saved HTML content
  })
    .then((response) => response.blob())
    .then((blob) => {
      const url = URL.createObjectURL(blob);
      const pdfFrame = document.getElementById("pdf-frame");
      pdfFrame.src = url;
      pdfFrame.style.display = "block";
      console.log("PDF Preview Updated");
  fetch("/generate-pdf", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ html: htmlContent }), // Send the saved HTML content
  })
    .then((response) => response.blob())
    .then((blob) => {
      const url = URL.createObjectURL(blob);
      const pdfFrame = document.getElementById("pdf-frame");
      pdfFrame.src = url;
      pdfFrame.style.display = "block";
      console.log("PDF Preview Updated");

      // Calculate the response time
      let endTime = Date.now();
      let responseTime = endTime - startTime;


      // Set the loading bar to 100% based on the response time
      bar.style.transition = `width ${responseTime / 1000}s ease`;
      bar.style.width = "100%";
      // Set the loading bar to 100% based on the response time
      bar.style.transition = `width ${responseTime / 1000}s ease`;
      bar.style.width = "100%";

      // Hide the loading bar after the transition is complete
      setTimeout(() => {
        loadingBar.style.display = "none";
      }, responseTime);
    })
    .catch((error) => {
      console.error("Error:", error);
      // Hide the loading bar after the transition is complete
      setTimeout(() => {
        loadingBar.style.display = "none";
      }, responseTime);
    })
    .catch((error) => {
      console.error("Error:", error);

      // Hide the loading bar in case of an error
      loadingBar.style.display = "none";
    })
      // Hide the loading bar in case of an error
      loadingBar.style.display = "none";
    })
    .finally(() => {
      // Hide the loading bar
      loadingBar.style.display = "none";
    });


  // Clear the JSON preview and hide it
  document.getElementById("json-preview").innerText = "";
  document.getElementById("json-preview").style.display = "none";
}

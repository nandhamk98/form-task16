const button = document.getElementById("submit");

const tableContainer = document.getElementById("tableContainer");
let div = document.createElement("div");
let table = document.createElement("table");
table.setAttribute("class", "table");

const tableCreation = function () {
  let tableRow = document.createElement("tr");
  let firstName = document.createElement("th");
  firstName.innerHTML = "First Name";
  tableRow.appendChild(firstName);
  let lastName = document.createElement("th");
  lastName.innerHTML = "Last Name";
  tableRow.appendChild(lastName);
  let address = document.createElement("th");
  address.innerHTML = "Address";
  tableRow.appendChild(address);
  let pincode = document.createElement("th");
  pincode.innerHTML = "Pincode";
  tableRow.appendChild(pincode);
  let gender = document.createElement("th");
  gender.innerHTML = "Gender";
  tableRow.appendChild(gender);
  let food = document.createElement("th");
  food.innerHTML = "Food";
  tableRow.appendChild(food);
  let state = document.createElement("th");
  state.innerHTML = "State";
  tableRow.appendChild(state);
  let country = document.createElement("th");
  country.innerHTML = "Country";
  tableRow.appendChild(country);

  let headerDisplay = document.createElement("h3");
  headerDisplay.innerHTML = "Display Content";
  table.appendChild(tableRow);
  div.appendChild(headerDisplay);
  div.appendChild(table);
  tableContainer.innerHTML = div.innerHTML;
};

const displayFormValues = () => {
  let firstNameValue = document.getElementById("first-name").value;
  let lastNameValue = document.getElementById("last-name").value;
  let addressValue = document.getElementById("address").value;
  let pincodeValue = document.getElementById("pincode").value;
  let stateValue = document.getElementById("state").value;
  let countryValue = document.getElementById("country").value;
  let genderValue = "";
  for (let gender of document.getElementsByName("gender")) {
    if (gender.checked) {
      genderValue = gender.value;
    }
  }
  let foodValues = [];
  for (let food of document.getElementById("food").options) {
    if (food.selected) {
      foodValues.push(food.value);
    }
  }
  let tableRow = document.createElement("tr");
  let firstName = document.createElement("td");
  firstName.innerHTML = firstNameValue;
  tableRow.appendChild(firstName);
  let lastName = document.createElement("td");
  lastName.innerHTML = lastNameValue;
  tableRow.appendChild(lastName);
  let address = document.createElement("td");
  address.innerHTML = addressValue;
  tableRow.appendChild(address);
  let pincode = document.createElement("td");
  pincode.innerHTML = pincodeValue;
  tableRow.appendChild(pincode);
  let gender = document.createElement("td");
  gender.innerHTML = genderValue;
  tableRow.appendChild(gender);
  let food = document.createElement("td");
  food.innerHTML = foodValues.join(",");
  tableRow.appendChild(food);
  let state = document.createElement("td");
  state.innerHTML = stateValue;
  tableRow.appendChild(state);
  let country = document.createElement("td");
  country.innerHTML = countryValue;
  tableRow.appendChild(country);
  table.appendChild(tableRow);
  div.appendChild(table);
  tableContainer.innerHTML = div.innerHTML;
};

const clearform = () => {
  document.getElementById("first-name").value = "";
  document.getElementById("last-name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("address").value = "";
  document.getElementById("pincode").value = "";
  document.getElementById("state").value = "";
  document.getElementById("country").value = "";
  document.getElementById("comments").value = "";
  for (let gender of document.getElementsByName("gender")) {
    if (gender.checked) {
      gender.checked = false;
    }
  }
  let foodValues = [];
  for (let food of document.getElementById("food").options) {
    if (food.selected) {
      food.selected = false;
    }
  }
};

const displayTableContent = () => {
  if (tableContainer.innerHTML.length === 0) {
    tableCreation();
    displayFormValues();
  } else {
    displayFormValues();
  }
  clearform();
};

button.addEventListener("click", displayTableContent);

document.querySelectorAll;

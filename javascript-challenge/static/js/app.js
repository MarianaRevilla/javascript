
// from data.js:
var UFOData = data;

// Get references to the tbody, date and filter button:
var tbody = document.querySelector("tbody");
var date = document.querySelector("#datetime");
var filterButton = document.querySelector("#filter-btn");

// Create an event listener for the filter button: 
filterButton.addEventListener("click", onEnter);

// Create a function to load the data.js table info:
function appendInfo() {
  tbody.innerHTML = "";
  for (var i = 0; i < UFOData.length; i++) {
    var data = UFOData[i];
    var fields = Object.keys(data);
    var rows = tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      var field = fields[j];
      var cells = rows.insertCell(j);
      cells.innerText = data[field];
    }
  }
}

// Create function to filter UFO sightings by date: 
function onEnter(event) {
  // Prevent page from refreshing:
  event.preventDefault();
  // Dilter dates to match the input value:
  var filtered = date.value;
  if (filtered != "") {
    UFOData = data.filter(function (data) {
      var filteredDate = data.datetime;
      return filteredDate === filtered;
    });
};

// Load table: 
appendInfo();
}

// Create function to reset the data: 
function reset() {
  UFOData = data;
  date.value = "";
  appendInfo();
}

// Load table: 
appendInfo();
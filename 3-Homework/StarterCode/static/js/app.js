
// asign data from data.js to variable
var data = data;

// select tbdoy
var tbody = d3.select("tbody");

// Console.log the UFO data from data.js
console.log(data);

//set up for each statement and function that appends tr with values of table
data.forEach(ufoReport);

function ufoReport(sighting) {
    console.log(sighting);

    let row = tbody.append('tr');

    Object.values(sighting).forEach(
        
    function(value)  {
          row.append('td').text(value);
        }
    );
  }

//select button and tbody again
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Clear all data from previous searches
    tbody.html("");

  // Select the input element and get the raw HTML node
    var userInput = d3.select("#datetime");

  // Get the value property of the input element
    var userValue = userInput.property("value");

    console.log(userValue);
    console.log(data);

    // create an array that has the filter values
    var filteredData = data.filter(date => date.datetime === userValue);

    console.log(filteredData);
    //append list with using foreach
    filteredData.forEach((ufoSighting) => {

        var row = tbody.append("tr");

        var keyValuePairs = Object.entries(ufoSighting)

        keyValuePairs.forEach(([key, value]) => {
            console.log(`${key} -> ${value}`);


            var cell = row.append("td")
            cell.text(value);
        });
    });
};


// from data.js
var tableData = data;


// Creates datetime mapping
var datetimes = tableData.map(dt => dt.datetime);

// Creates city mapping
var cities = tableData.map(c => c.city);

// Creates state mapping
var states = tableData.map(s => s.state);

// Creates country mapping
var countries = tableData.map(co => co.country);

// Creates shape mapping
var shapes = tableData.map(sh => sh.shape);

// Creates comment mapping
var comments = tableData.map(com => com.comment);

// Designs function for filtering datetime
function dateFilter(x) {
    return x.datetime === '1/1/2010';
}

// Test function and filter
var dateInForm = tableData.filter(dateFilter);
console.log(dateInForm);

// Reference table body
var tbody = d3.select("tbody");

// Loop through selected data, append rows, add table data
dateInForm.forEach((formDate) => {
    var row = tbody.append("tr");
    Object.entries(formDate).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });
  
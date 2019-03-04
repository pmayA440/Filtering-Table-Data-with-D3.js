// from data.js
var tableData = data;

// Reference button
var submit = d3.select("#filter-btn");  

// Create function when event occurs 
submit.on('click',function () {
    // Prevent page from refreshing
    d3.event.preventDefault();
    // Reference input
    var inputField = d3.select(".form-control");
    // Pull input value
    var inputValue = inputField.property("value");
    console.log(inputValue);
    // Designs function for filtering datetime
    function dateFilter(x) {
        return x.datetime === inputValue;}    
    // Filter data
    var filteredData = tableData.filter(dateFilter);
    console.log(filteredData);
    // Reference for table data
    var tbody = d3.select("tbody");
    // Append data to table
    filteredData.forEach((y) => {
        var row = tbody.append("tr");
            Object.entries(y).forEach(([key, value]) => {
              var cell = tbody.append("td");
              cell.text(value);
            });
        });
});
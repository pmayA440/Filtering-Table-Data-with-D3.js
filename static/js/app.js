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
var firstDate = tableData.filter(dateFilter);
console.log(firstDate);

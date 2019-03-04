// from data.js
var tableData = data;

// 


// Creates datetime mapping
var datetimes = tableData.map(function(dt) {
    return dt.datetime;
    console.log(datetimes);
});

// Creates city mapping
var cities = tableData.map(function(c) {
    return c.city;
    console.log(cities);
});

// Creates state mapping
var states = tableData.map(function(s) {
    return s.state;
    console.log(states);
});

// Creates country mapping
var countries = tableData.map(function(co) {
    return co.country;
    console.log(countries);
});

// Creates shape mapping
var shapes = tableData.map(function(sh) {
    return sh.shape;
    console.log(shapes);
});

// Creates comment mapping
var comments = tableData.map(function(com) {
    return com.comment;
    console.log(comments);
});


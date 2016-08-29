var streetNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var streetName = ["Dolphin St", "Whale Ave", "Seahorse Lane", "Shark Place"];
var city = ["Sydney", "Melbourne", "Adelaide", "Brisbane"];
var state = ["NSW", "VIC", "TAS", "QLD", "SA", "WA", "NT"];
var postcode = [1111, 2222, 3333, 4444, 5555, 6666, 7777, 8888, 9999];

var randomStreetNumber = streetNumber[Math.floor(Math.random()*10)];
var randomStreetName = streetName[Math.floor(Math.random()*4)];
var randomCity = city[Math.floor(Math.random()*4)];
var randomState = state[Math.floor(Math.random()*7)];
var randomPostcode = postcode[Math.floor(Math.random()*9)];

console.log(
  randomStreetNumber + " " +
  randomStreetName + ", " +
  randomCity + " " +
  randomState + ", " +
  randomPostcode);

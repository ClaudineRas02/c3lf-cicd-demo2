// Logique métier — fonctions pures, faciles à tester
// Convertisseur de températures et distances
function celsiusToFahrenheit(c) { return (c * 9 / 5) + 32; }
function fahrenheitToCelsius(f) { return (f - 32) * 5 / 9; }
function kmToMiles(km)          { return km * 0.621371; }
function milesToKm(miles)       { return miles / 0.621371; }

module.exports = { celsiusToFahrenheit, fahrenheitToCelsius, kmToMiles, milesToKm };  
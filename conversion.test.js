const {
  celsiusToFahrenheit,
  fahrenheitToCelsius,
  kmToMiles,
  milesToKm,
} = require("./conversion");

test("0°C = 32°F", () => expect(celsiusToFahrenheit(0)).toBe(32));
test("100°C = 212°F", () => expect(celsiusToFahrenheit(100)).toBe(212));
test("32°F = 0°C", () => expect(fahrenheitToCelsius(32)).toBe(0));
test("1 km ~ 0.621 miles", () => expect(kmToMiles(1)).toBeCloseTo(0.621, 2));
test("1 mile ~ 1.609 km", () => expect(milesToKm(1)).toBeCloseTo(1.609, 2));

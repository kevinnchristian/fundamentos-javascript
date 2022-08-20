// Convert Celsius to Fahrenheit
function convertToFahrenheit(value) {
  if (typeof value != "number") return "Valor inválido!";

  return value * 1.8 + 32 + "°F";
}

console.log(convertToFahrenheit(30.5));

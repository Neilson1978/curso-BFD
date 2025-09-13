let celsius = 35;
let fahrenheit = (celsius * 9/5) + 32;
console.log("Celsius: " + celsius + " °C");
console.log("Fahrenheit: " + fahrenheit.toFixed(2) + " °F");
function converterTemperetura(){
    let celsius = parseFloat(document.getElementById("Celsius").value);
    let fahrenheit = (celsius * 9/5) + 32;
    console.log("Celsius: " + celsius + "°C");
    console.log("Fahrenheit: " + fahrenheit.toFixed(2) + " °F");
    document.getElementById("Fahrenheit").value = "Fahrenheit: " + fahrenheit.toFixed(2) + " °F";    
}
let button = document.getElementById("calcular");
button.addEventListener("click" , converterTemperetura);
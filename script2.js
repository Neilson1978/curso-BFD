let reais = 5.42;
let cotacaoDolar = 5.42;
let dolares = reais / cotacaoDolar;
console.log( "real: " + "R$ " + reais);
console.log("Cotação do dolar: " + "R$ " + cotacaoDolar);
console.log("Valor em dolar:" +dolares.toFixed(2));
function calculardolar(){
    let reais = parseFloat(document.getElementById("real").value);
    let cotacaoDolar = parseFloat(document.getElementById("dolar").value);
    let dolares = reais /5.42;
    console.log( "real: " + "R$ " + reais);
    console.log("Valor em dolar:" +dolares.toFixed(2));
    document.getElementById("dolar").value = "Valor em dolar: " + "$ " + dolares.toFixed(2);
}
let button = document.getElementById("calcular");
button.addEventListener("click", calculardolar);
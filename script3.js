let largura = 8;
let altura = 4;
let area = largura * altura;
console.log("Largura: " + largura + " cm");
console.log("Altura: " + altura + " cm");
console.log("A área é: " + area.toFixed(2) + " cm");
function calcularArea(){
    let largura = parseFloat(document.getElementById("largura").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let area = largura * altura;
    document.getElementById("resultado").value = "A área é: " + area.toFixed(2);
}
let button = document.getElementById("calcular");
button.addEventListener("click" , calcularArea);
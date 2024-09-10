let valor1 = parseFloat(prompt("Informe o primeiro valor:"));
let valor2 = parseFloat(prompt("Informe o segundo valor (maior que zero):"));

while (valor2 <= 0) {
    valor2 = parseFloat(prompt("Valor inválido. Informe um valor maior que zero:"));
}

let resultado = valor1 / valor2;
console.log(`Resultado da divisão: ${resultado}`);

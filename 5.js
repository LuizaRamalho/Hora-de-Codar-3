let inicio = parseInt(prompt("Informe o valor inicial (menor):"));
let fim = parseInt(prompt("Informe o valor final (maior):"));
let soma = 0;
let quantidade = 0;

for (let i = inicio; i <= fim; i++) {
    soma += i;
    quantidade++;
}

let media = soma / quantidade;
console.log(`Média aritmética entre ${inicio} e ${fim}: ${media}`);

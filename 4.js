let soma = 0;
let quantidade = 0;

for (let i = 15; i <= 100; i++) {
    soma += i;
    quantidade++;
}

let media = soma / quantidade;
console.log(`Média aritmética entre 15 e 100: ${media}`);

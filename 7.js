let somaNotas = 0;

for (let i = 1; i <= 6; i++) {
    let nota;
    do {
        nota = parseFloat(prompt(`Informe a nota ${i} (entre 0 e 10):`));
    } while (nota < 0 || nota > 10);
    somaNotas += nota;
}

let media = somaNotas / 6;
console.log(`Média final: ${media}`);

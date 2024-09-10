let entreIntervalo = 0;
let foraIntervalo = 0;

for (let i = 1; i <= 10; i++) {
    let valor = parseInt(prompt(`Informe o valor ${i}:`));
    
    if (valor >= 24 && valor <= 42) {
        entreIntervalo++;
    } else {
        foraIntervalo++;
    }
}

console.log(`${entreIntervalo} valores estão entre 24 e 42.`);
console.log(`${foraIntervalo} valores estão fora do intervalo.`);

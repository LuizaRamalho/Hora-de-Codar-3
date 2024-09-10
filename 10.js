let N = parseInt(prompt("Informe o valor de N:"));

for (let i = 1; i <= N; i++) {
    console.log(`Tabuada do ${i}:`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log(""); // Pula linha entre as tabuadas
}

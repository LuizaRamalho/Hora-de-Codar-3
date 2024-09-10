let alunosAprovados = 0;
let continuar;

do {
    let nota1 = parseFloat(prompt("Informe a primeira nota do aluno:"));
    let nota2 = parseFloat(prompt("Informe a segunda nota do aluno:"));
    let media = (nota1 + nota2) / 2;

    if (media >= 9.5) {
        console.log(`Aluno aprovado com média ${media}`);
        alunosAprovados++;
    } else {
        console.log(`Aluno reprovado com média ${media}`);
    }

    continuar = prompt("Calcular a média de outro aluno? (Sim/Não)").toLowerCase();
} while (continuar === "sim");

console.log(`Total de alunos aprovados: ${alunosAprovados}`);

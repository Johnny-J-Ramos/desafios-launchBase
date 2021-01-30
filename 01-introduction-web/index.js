// Criar um programa que calcule a média
// das notas entre os alunos e envia
// mensagens do calculo da média.
// Se a média for maior que 5, parabenizar a turma

const name1 = 'carlos';
const nota1Aluno1 = 8.2;

const nome2 = 'Maria';
const notaAluno2 = 2.3;

const nome3 = 'Jefferson';
const notaAluno3 = 2.0;

const media = (nota1Aluno1 + notaAluno2 + notaAluno3) / 3;

console.log(media);

if (media > 5) {
  console.log(`Parabéns turma, a ${media} é maior que 5`);
} else {
  console.log('Você ficou de recuperação que está marcada para o dia 13/02');
}


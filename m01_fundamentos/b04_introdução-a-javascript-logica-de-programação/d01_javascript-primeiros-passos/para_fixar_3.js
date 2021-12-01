const notaPessoaCandidata = 125;

if (notaPessoaCandidata >= 80 && notaPessoaCandidata <= 100) {
console.log ('Parabéns, você foi aprovada(o)!')
} else if (notaPessoaCandidata < 80 && notaPessoaCandidata >= 60) {
  console.log ('Você está na nossa lista de espera')
} else if (notaPessoaCandidata < 60 && notaPessoaCandidata >= 0) {
  console.log ('Você foi reprovada(o)')
} else {
  console.log ('Você não consta no nosso sistema')
}
let estadoPessoaCandidata = 'aprovada';

switch (estadoPessoaCandidata) {
  case 'aprovada':
    console.log('Você foi aprovada!!');
    break;

  case 'lista':
    console.log('Você está na lista de espera!!');
    break;

  case 'reprovada':
    console.log('Você foi reprovada!!!');
    break;

  default:
    console.log('Você não está inscrito no nosso Processo Seletivo')
}

//O que é fatorial?
//Fatorial é um número natural inteiro positivo, o qual é representado por n! O fatorial de um número é calculado pela multiplicação desse número por todos os seus antecessores até chegar ao número 1. Note que nesses produtos, o zero (0) é excluído.

function fatorial(valor) {

    valor = 5

    // para valores negativos
    if(valor<0) {

      return 'Valor deve ser maior ou igual a zero';
    
      // para valor = 0  ou igual a 1
    } else if ( (valor == 0) || (valor == 1) ) {

      return 1;
     
    } else {

      var acumula = 1;
      for(x=valor;x>1;x--) {
        acumula = acumula * x;
      }
      return acumula;
    } 
}
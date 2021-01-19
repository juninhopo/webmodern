const imprimirResultado = function(nota) {
    if (nota >= 7) {
        console.log('Sua média foi',nota,', então voce foi Aprovado')
    } else {
        console.log('Sua média foi',nota,', então você foi Reprovado')
    }
}

imprimirResultado(10)
imprimirResultado(7)
imprimirResultado(5)
imprimirResultado('Epa!') //cuidado com JS, pois é uma linguagem fracamente tipada, logo então ele da como falso e imprime reprovado

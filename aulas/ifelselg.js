Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim   
}

const imprimirResultado = function (nota) {
    if (nota.entre(9, 10)){
        console.log('Quadro de honra')
    } else if(nota.entre(7, 8.99)){
        console.log('Aprovado!')
    } else if(nota.entre(4, 6.99)){
        console.log('Recuperação')
    } else if(nota.entre(0, 3.99)){
        console.log('Reprovado')
    } else {
        console.log('Nota inválida')
    }
}

imprimirResultado(8)
imprimirResultado(9)
imprimirResultado(9,5)
imprimirResultado(10)
imprimirResultado(100)
imprimirResultado(15)
imprimirResultado(4)
imprimirResultado(5)
imprimirResultado(6.6)
imprimirResultado(3)
imprimirResultado(2)
imprimirResultado(1)
imprimirResultado(1.5)
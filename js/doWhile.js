function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1 //no do while não importa pois a sentença de saida vem depois do bloco
let vezes = 0 //variavel utilizada como contador

do {
    opcao = getInteiroAleatorioEntre(-1, 100)
    console.log ('Opção escolhida foi', opcao,'.')
    vezes = (vezes + 1) // utilizado para somar no contador (vezes)
    console.log(vezes) // utilizado para mostrar o contador
} while (opcao != -1)

console.log('Até a proxima!')
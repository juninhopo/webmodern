function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0
let vezes = 0 //para o contador de vezes passado iniciar em 0

while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 100)
    console.log('Opção escolhida foi', opcao)
    vezes = (vezes + 1) //para o contador funcionar sempre colocando +1
    console.log(vezes) //mostra o contador
}

console.log('Até a próxima!')


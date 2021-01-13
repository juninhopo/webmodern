const notas = [6.7, 7.4, 8.2, 9.2, 7.7]

for (i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Darlan',
    sobrenome: 'Oliveira',
    idade: 22,
    peso: 90
}

for (atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
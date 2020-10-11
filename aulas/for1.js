console.log('contador com while')

let contador = 1
while (contador <= 10) {
    console.log('contador = ' + contador)
    contador++

}

console.log(' ')
console.log('contador com for')

for (let i = 1; i < 10; i++) {
    console.log('contador = ' + i)
}

console.log(' ')
console.log('navegando no array')

const notas = [6.7, 5.5, 4.8, 8.5, 9.8]
for (let i = 0; i < notas.length; i++) {
    console.log('nota = ' + notas[i])
}
let jogadores = ['Caça Rato', 'Ganso', 'Pato']

//serve pra indexar valores

for(let key in jogadores) {
    console.log(jogadores[key]) // valor
    console.log(key) // índice, posição KEY representa o índice 
}

let palavra = 'Grêmio'

///trabalha em estruturas que são iteráveis. Array de objetos, array, string, set/map

for( let char of palavra) { // pega o valor
    console.log(char)
}
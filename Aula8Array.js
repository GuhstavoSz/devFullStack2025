// let listaFrutas = []
// let listaNomes = ['Giovanna', 'Augusto']

// listaFrutas[0] = 'Maça'
// listaFrutas[1] = 'Morango'
// listaFrutas["adocicadas"] = 'Banana'
// console.table(listaFrutas)


// for (let i=0; i < listaFrutas.length; i++) {
    //     console.log(listaFrutas[i])
    // }
    
// listaFrutas.push('Melancia')
// listaFrutas.unshift('Laranja')
    
    
// console.table(listaFrutas)

// listaFrutas.pop()
// listaFrutas.shift()

// console.table(listaFrutas)


// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// soma = 0
// let media = 0
// let pares = []

// for(let i = 0; i < numeros.length; i ++) {
//     soma += (numeros[i])
//     if(numeros[i] % 2 === 0){
//         pares.push(numeros[i])
//     }
// }
// media = soma / numeros.length

// console.log(numeros)
// console.log(soma)
// console.log(media)
// console.log(pares)

// let soma = numeros.reduce((acumulador, valor) => acumulador + valor, 0)
// let pares = numeros.filter((num => num  % 2 == 0))
// let media = 0

// media = soma/ numeros.length

// console.log(pares)
// console.log(soma)
// console.log(media)


// let numeros = [3, 6, 1, 2, -3]
// let n = numeros.length

// for(let i = 0; i < n; i++){
//     for(let j= 0; j < n - i - 1; j++){ // for (let j= 0; j < n - i - 1; j++)
//         if(numeros[j] > numeros[j + 1]){
//             let temp = numeros[j]
//             numeros[j] = numeros[j + 1]
//             numeros[j + 1] = temp
//         }
//     }
// }

// console.log(numeros)


// console.log(numeros.sort((a, b) => a - b))

// let matriz = []
// let soma = 0

// for(let i = 0; i <3; i++){
//     matriz[i] = []

//     for(let j = 0; j < 3; j++){
//         matriz[i][j] = 10
//         if(i == j) {
//             soma += matriz[i][j]
//         }
//     }
// }

// console.table(matriz)


// console.log(soma)



//          REVISÃO 


let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let soma = 0
let media = 0
let pares = []

for(let i = 0; i < numeros.length; i ++){
    soma += numeros[i]
    if(numeros[i] % 2 === 0){
        pares.push(numeros[i])
    }
}

// console.log(soma)

// media = soma / numeros.length
// console.log(media)
// console.log(pares)


// Usando métodos 

let soma2 = numeros.reduce((acumulador, valor) => acumulador + valor, 0)

let pares2 = numeros.filter(num => num % 2 === 0) // retorna o arry contendo oq foi filtrado


// console.log(soma2)
// console.log(pares2)


let numeros2 = [3, 6, 1, 2, -3]
let n = numeros2.length 

for(let i = 0; i < numeros2.length; i ++){
    for(let j = 0; j < n - i - 1 ; j ++){
        if(numeros2[j] > numeros2[j + 1]){
            let temp = numeros2[j]
            numeros2[j] = numeros2[j + 1]
            numeros2[j + 1] = temp
        }
    }
}

// console.log(numeros2)

// 3,1,6 quando o j = 1
// j = 2 3,1,2,6
//j = 3  3, 1, 2, -3, 6 . Agora o i = 1

// enquanto i = 1:
// j = 0  1,3,2,-3, 6
// j= 1   1,2,3-3,6
//j= 2    1,2,-3,3,6
//j= 3    1,2,-3,3, 6

// i = 2
//j= 0
//j=1  1,-3,2,3,6
//j=2

// i = 3

//j= 0 -3,1,2,3, 6

// console.log(numeros2.sort((a,b) => a - b))



// MATRIZES

// let mercado = []

// mercado[1] = ['maça', 'abacate', 'pera']
// mercado['fruteira'] = ['Banana', 'Morango']
// mercado[0] = ['Picanha', 'Bife']

// console.log(mercado[0][1])

// console.table(mercado)

let matriz = []

let soma3 = 0

for(let i= 0; i < 3; i++){
    matriz[i] = []

    for(let j = 0; j < 3; j++){
        matriz[i][j] = 10
    }
}

console.table(matriz)


for(let i = 0; i < matriz.length; i ++){
    
    for(let j= 0; j < matriz.length; j ++){
        if(j == i){
            soma3 += matriz[i][j]
        }
    }

}

// console.log(soma3)




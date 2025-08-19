// let nome = 'Julio César'

// console.log(nome.length)
// console.log(nome.charAt(0))
// console.log(nome.indexOf('C'))


// console.log(nome.replace('Julio', 'Cleyton'))
// console.log(nome.substr(6,5))
// console.log(nome.toUpperCase())
// console.log(nome.toLocaleLowerCase())


// console.log("    Wesley".trim() )

//façam um função que inverta uma string.

// function reverseString(str) {
//     let reversed = ''

//     for(let i = str.length - 1; i >= 0; i --){
//         reversed += str[i]
    
//     }

//     return reversed


// }

// console.log(reverseString("Olá, Mundo"))


// function reverteString(stri) {
//     return stri.split('').reverse().join('')

// }

// console.log(reverteString('Olá, Mundo!'))

// encontrem o número de vogais de uma string

function countVowels(str) {
    let vowels = str.match(/[aeiou]/gi)

    return vowels ? vowels.length : 0

}

// console.log(countVowels('Dragon Age'))

// match verifica se a sua string corresponde com algum dos valores enviados

// console.log(Math.ceil(100.2))
// console.log(Math.floor(100.2))
// console.log(Math.round(100.2))

// console.log(Math.sqrt(81))
// console.log(Math.cbrt(81))
// console.log(Math.pow(9, 2))

// console.log(Math.abs(-100.2))

// console.log(Math.random() * 100)

// //gerar um número aleatório entre dois valores

// // professor

// function randomBetween(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min
// }

// console.log(randomBetween(1,3))

// Math.PI

// REVISÃO

let nome = "Julio César"

console.log(nome.length) // saber o comprimento
console.log(nome.charAt(0)) // saber a posição de um caractere em específico
console.log(nome.indexOf('C')) // saber onde encontra a letra C

console.log(nome.replace('Julio', 'Cleyton')) // trocar
console.log(nome.substr(6, 5)) // extrair uma parte da string
console.log(nome.toLocaleUpperCase())
console.log(nome.toLocaleLowerCase())

console.log("   Wesley".trim()) 

console.log(nome.toUpperCase().indexOf("C"))



function invertePalavra(str) {
    let revertida = ''

    for(let i = str.length - 1; i >= 0; i--){
        revertida += str[i]
    }

    return revertida
}

// console.log(invertePalavra("Gustavo"))

function invertestr(str) {

    return str.split('').reverse().join('')

}

// console.log(invertestr('Olá, mundo!'))


function contaVogal(str){

    let vogais = str.match(/[aeiou]/gi) // um regex

    return vogais ? vogais.length: 0
}

// console.log(contaVogal('Dragon Age'))


// console.log(Math.ceil(100.2)) // arredonda pra cima
// console.log(Math.floor(100.2)) // pra baixo
// console.log(Math.round(100.2)) // joga por inteiro mais próximo


// console.log(Math.sqrt(81)) // raiz quadrada
// console.log(Math.cbrt(81)) // raiz cúbica
// console.log(Math.cbrt(9, 2)) // potência

// console.log(Math.abs(-100.2)) // número absoluto)

// console.log(Math.random()) // gera um número entre 0 e 1. Se quiser que gere entre 0 e 100
// // por ex, multiplicaremos por 100 :

// console.log(Math.random() * 100)


function numRandomEntre (min, max) {
    return Math.floor(Math.random() *(max - min) + 1) + min

}

// console.log(numRandomEntre(1,3))

// REVISÃO DATAS


let date = new Date()

// console.log(date.getDate())      // dia de hoje
// console.log(date.getMonth() + 1)    // Mês 
// console.log(date.getFullYear())    // ano
// console.log(date.toString())     //  retorna a data por escrito

let date1 = new Date(2015, 7, 7)
let date2 = new Date(2025, 7, 7)

console.log(date1.getTime()) // o período em milissegundos desde de 1 janeiro de 1970
console.log(date2.getTime())


let milissgundosEntreDatas = Math.abs(date1.getTime() - date2.getTime())

console.log(milissgundosEntreDatas)

let milissgundosPorDia = (1 * 24 * 60 * 60 * 1000) // 1 dia x 24 horas x 60 minutos x 60 s x 1000
// para ter milissegundos em dia

console.log(`A diferenã entre as datas é de: ${milissgundosEntreDatas / milissgundosPorDia}` )


// funcção que retone um valor se um número é par ou ímpar

function RetornaParOuImpar(valor) {
    let resultado

    if(valor % 2 === 0) {
        resultado = 'Par'
    } else {
        resultado = 'ímpar'
    }

    return resultado

}
let numero = 10
let resultado = RetornaParOuImpar(numero)

console.log(resultado)
 

// outro tipo de função : procedimento q não retonam valores

function calculaArea(altura, largura) {
    return altura * largura
}

console.log(calculaArea(10,10))

// faça uma função que retonar um array ordenado

function ordenaArray (arr) {
    return arr.sort((a, b) => a - b )
}

console.log(ordenaArray([1, 3, 2, 10, 7]))

//função anônima
let exibeNome = function(nome) {
    console.log(nome)

}

let exibeNome1 = (nome) => console.log(nome)

exibeNome('Jaques')

let sucesso = () => console.log('Requisião foi um sucesso')

let erro = function() {
    console.log('Requisição deu errado')
}

function requisicao(Sucesso, erro) {
    if(true) {
        sucesso()
    } else {
        erro()
    }
}

requisicao(sucesso,erro)

// os () antes da => são os parametros que a função vai receber, depois da flecha é oq a funcção vai executar.

// criar uma função que soma os elementos de um array e retorna esse valor

// function somaArray (arr) {
//     return arr.reduce((acumulador, valor) => acumulador + valor, 0) 
   
// }

// console.log(somaArray([ 1, 1, 1, 1, 1]))

//do professor:

function somaArray(arr) {

    let soma = 0

    for(let i = 0; i < arr.length; i++ ) {
        soma += arr[i]
     }

    return soma

}

console.log(somaArray([10, 10, 10]))

// retorna o maior número em um array

function maiorNumero(arr) {
    let maior = arr[0]

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > maior) {
            maior = arr[i]
        }
    }

    console.log(maior)
}
maiorNumero([1,100, -3, 2, 0])







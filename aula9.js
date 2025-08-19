// let listaCoisas = Array()

// listaCoisas['Hardware'] = ['Placa de vídeo'] // é o mesmo que dizer que:

// // listaCoisas['Hardware'] = []
// // listaCoisas['Hardware'][0] = 'Placa de vídeo'

// listaCoisas['Hardware'][1] = 'Smartwatch'
// listaCoisas['Games'] = ['GTA VI']
// listaCoisas['Games'][1] = 'The Witcher'

// console.table(listaCoisas)
// console.table(listaCoisas['Hardware'])


// // let listaPc = []

// // listaPc[0] = "Gabinete"

// // console.table(listaPc)

// // let listaFrutas = []
// // listaFrutas[0] = 'Maça'

// // console.table(listaFrutas)




//   REVISÃO 

// let listaCoisas = Array()

// listaCoisas['hardware'] = ['Placa de vídeo']
// listaCoisas['hardware'][1] = 'smartwatch'
// listaCoisas['games'] = ['Console']
// listaCoisas['games'][1] = 'Dark Souls'

// console.table(listaCoisas)


// REVISÃO FUNÇÃO


function retornaParImpar(n) {
    if(n % 2 === 0){
        return  "Par"
    } else{ 
        return "ímpar"
    }
}


function ordenaarray(array) {
    return array.sort((a, b) => a - b)
}

// console.log(ordenaarray([1, 3, 2, 10, 7]))

let sucesso2 = (mensagem) => console.log(mensagem)

let erro2 = function() {
    console.log("Requisição deu errado")
}

function requisicao2(sucesso2, erro2) {
    if(true){
        sucesso2("Requisição foi um sucesso")
    } else{
        erro2()
    }
}

// requisicao2(sucesso2, erro2)

// requisicao2((mensagem) => console.log(mensagem),erro2)

function somaArray2(arr) {
    let soma = 0
    for(let i = 0; i < arr.length; i++){
        soma += arr[i]
    }

    return soma
}

// console.log(somaArray2([10,10,10,10,10]))


function maiorNumeroarray(arr){
    let maior = arr[0]

    for( let i = 0; i < arr.length; i++){
        if(arr[i] > maior){
            maior = arr[i]
        } 
    }

    return maior
}

// console.log(maiorNumeroarray([1,2,10,9,8]))


function testermaiorarray(arr){
    let maior = arr[0]
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > maior) {
            maior.push(arr[i])
        }
    }

    return maior
}

console.log(testermaiorarray([11, 7, 9, 10, 1]))

function olamundo(){
    return () => "Hellow World"
}

olamundo()

let olamundo2 = () => console.log("Hello world")

olamundo2()

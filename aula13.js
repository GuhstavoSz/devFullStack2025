// recursividade é um conceito onde nós temos uma função e esse função chama a si mesmo
//entrando em loops, no intuito de dividir o problema em problema menores.

// function fatorial(n) {
//     if(n === 0) {
//         return 1
//     } else {
//         return n * fatorial(n-1)
//     }
// }

// console.log(fatorial(5))

// somas dos números de 1 até n

// function somaAté(n) {
//     if(n === 1) {
//         return 1
//     } else {
//         return  n + somaAté (n -1)
//     }
     
// }

// console.log(somaAté(5))


// function soma(n) {
//     if( n === 1) {
//         return 1
//     } else {
//         return n + soma (n -1)
//     }
// }

// fibonnaci recursivo

// function fibonacci(n) {
//     if(n === 0) {
//         return 0
//     } else if( n === 1) {
//         return 1
//     } else {
//         return fibonacci(n-1) + fibonacci(n-2)
//     }
// }

// console.log(fibonacci(5))

let categorias = [
    {
        id: 1,
        nome: "Eletrônicos",
        filhos: [
            {id: 2, nome: "Celulares", filhos: []},
            {id: 3, nome: "Computadores", filhos: [
                {id: 4, nome: "Tablets", filhos: []},
            ]}
        ]
    },
    {
        id: 5,
        nome: "Louças",
        filhos: []
    }
]

function imprimirCategorias(lista, nivel = 0) {
    for(let categoria of lista) {
        console.log(" ".repeat(nivel * 2) + categoria.nome)
        if(categoria.filhos.length > 0) {
            imprimirCategorias(categoria.filhos, nivel + 1)
        }
    }

}

imprimirCategorias((categorias))
// console.log ("        as".repeat(2) + " - ")

// for(let categoria of categorias){
//     console.log(categoria.filhos.length)
// }


// TADS - tipos abstratos de dados
// pode ser uma pilha, que pode ser implementada usando um array ou uma lista encadeada
// uma lista pode ser implementação usando um array ou lista encadeada
// um mapa, usando uma hex, lista, arvore rubro-negra, lista

// abstração
// encapsulamento
//ocultação de informaçãp
// separação entre interface e implementação
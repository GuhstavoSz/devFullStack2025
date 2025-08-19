// // revisão e conceitos práticos

// let livraria = [
//     {titulo: "1984", autor: "George Orwell", ano: 1984},
//     {titulo: "O profeta", autor: "Edrew Berthold", ano: 2001},
//     {titulo: "Código Limpo", autor: "Martin", ano: 2010},
//     {titulo: "O velho e o Mar", autor: "Hemmingway", ano: 1910},
//     {titulo: "O Príncipe", autor: "Maquiável", ano: 2002},
// ]

// // For of para iterar e verificar os livros publicados antes do ano 2000.

// // for(let livros in livraria) {
// //     console.log(livraria[livros].ano)
    
// // }

// // for(let livro of livraria) {
// //     console.log(livro.ano)
// // }

// // for(let livro of livraria) {
// //     if(livro.ano < 2000) {
// //         console.log(livro)
// //     }
// // }

// // Listem a contagem de gêneros desses filmes:

// let filmes = [
//     {titulo: "Sempre ao seu lado", genero: "De chorar"},
//     {titulo: "Massacre da Serra Elétrica", genero: "Terror"},
//     {titulo: "Minha Mãe é uma Peça", genero: "Comédia"},
//     {titulo: "Tarzan", genero: "Animação"},
//     {titulo: "Como eu Era Antes de Você", genero: "De chorar"},
//     {titulo: "Jogo da imitação", genero: "Histórico"},
//     {titulo: "Top Gun", genero: "Guerra"},
//     {titulo: "Your Name", genero: "Romance"},
//     {titulo: "Deadpool", genero: "Herói"},
//     {titulo: "Batman Forever", genero: "Herói"},

// ]

// let contagemFilmes = {}

// // filmes.forEach((filme) => {
// //     if(contagemFilmes[filme.genero]){
// //         contagemFilmes[filme.genero]++
// //     } else{
// //         contagemFilmes[filme.genero] = 1
// //     }
    

// // })

// // console.log(contagemFilmes) 

// // for(let genero in contagemFilmes) {
// //     console.log(`Estão presentes na lista ${contagemFilmes[genero]} do gênero ${genero}`)
// // }

// //construam uma função que calcule o fatorial de um número

// // function fatorial(numero) {
// //     let fatorial = 1

// //     for(let i = 1; i <= numero; i++){
// //         fatorial = fatorial *i
// //     }

// //     console.log(fatorial)
// // }

// // fatorial(5)

// // Imprimam os primeiros 10 números da sequência da Fibonacci

// // function fibonacci() {
// //     let a = 0, b = 1, temp
// //     console.log(a)
// //     console.log(b)

// //     for(let i = 3; i <= 10; i++) {
// //         temp = a + b
// //         console.log(temp)
// //         a = b
// //         b = temp
// //     }
// // }

// // fibonacci()


// //função de PA - Progressão Aritmética

// function pa(primeiroTermo, razao) {
//     let soma = 0
//     for(let i = 0; i < 10; i++) {
//         let termo = primeiroTermo + i * razao
//         console.log(termo)
//         soma += termo
//     }

//     console.log(`A soma dos termos é: ${soma}` )
// }

// pa(1,3)

// REVISÃO


let livraria = [
    {titulo: "1984", autor: "George Orwell", ano: 1984},
    {titulo: "O Profeta", autor: "Endew Berthold", ano: 2001},
    {titulo: "Código Limpo", autor:"Martin", ano: 2010},
    {titulo: "O velho e o Mar ", autor: "Hemmingway", ano: 1910},
    {titulo: "O príncipe ", autor: "Maquiável", ano: 2002},
]

// // For of para iterar e verificar os livros publicados antes do ano 2000.

// Usando for IN:

// for(let livro in livraria) {
//     console.log(livraria[livro].ano)
// }

// Usando for OF:

for(let livros of livraria){
     if(livros.ano < 2000){
        // console.log(livros)
     }
}

let filmes = [
    {titulo: "Sempre ao Seu Lado", genero: "De chorar" },
    {titulo: "Massacre da Serra Elétrica", genero: "Terror" },
    {titulo: "Minha Mãe é uma Peça", genero: "Comédia" },
    {titulo: "Tarzan", genero: "Aventura" },
    {titulo: "Como eu Era Antes de Você", genero: "De chorar" },
    {titulo: "Jogo da Imitação", genero: "Histórico" },
    {titulo: "Top Gun", genero: "Guerra" },
    {titulo: "Deadpool", genero: "Herói" },
    {titulo: "Batman Forever", genero: "Herói" },
]

// // Listem a contagem de gêneros desses filmes:

let contadorFilmes = {}

for(let filme of filmes){
    const genero = filme.genero

    if(contadorFilmes[genero]) {
        contadorFilmes[genero]++
    } else {
        contadorFilmes[genero] = 1
    }
}

// console.log(contadorFilmes)


// USANDO FOR EACH(método de arrays)
// é uma função que vai ser executada a cada iteração do array

let contagemFilmes = {}

filmes.forEach((filme) => { 

    if(contagemFilmes[filme.genero]){
        contagemFilmes[filme.genero]++
    } else {
        contagemFilmes[filme.genero] = 1
    }
     
})

// console.log(contagemFilmes)

// for(let genero in contagemFilmes) {
//     console.log(`Estão presentes na lista ${contadorFilmes[genero]} do gênero ${genero}`)
// }


// //construam uma função que calcule o fatorial de um número

function fatorial(n) {
    let fatorial = 1

    for(let i = 1; i <= n; i ++){
        fatorial *= i
    }

    return fatorial
}

console.log(fatorial(5))

// // Imprimam os primeiros 10 números da sequência da Fibonacci
// o terceiro elemento é a soma dos dois anteriores 0, 1, 1 ,2

function fibo() {
    let a = 0, b = 1, temporaria
    console.log(a)
    console.log(b)

    for(let i = 3; i <= 10; i++){
        temporaria = a + b
        console.log(temporaria)
        a = b
        b = temporaria

    }
}

// fibo()

// //função de PA - Progressão Aritmética

function progaritmetica(termo1, razao) {
    let soma = 0

    for(let i = 0; i < 10 ; i++){
        let termo = termo1 + i * razao
        console.log(termo)
        soma += termo
    }
}

progaritmetica(1, 2)
// let livro = {
//     nome : 'Marley e Eu',
//     anoLancamento: '2024',
//     autor: 'Will Smith',
//     nrPaginas: 12,
//     atores: ['Scooby', 'Super cão', 'Batcão'],

//     mostrarCaracteristicas: function() {
//         return `${this.nome} é uum livro pra ficar alegre`
//     }
// }

// // console.log(livro.mostrarCaracteristicas())
// // console.log(livro.nome)

// // let livro2 = livro
// // livro2.preco = 20.2
// // console.log(livro)
// // console.log(livro2)


// let filme = {
//     titulo : "High School Musical",
//     anoLancamento: ['Zac Efron', 'Arthur Morgan', 'Cloud Strife'],
//     genero : 'Guerra',

//     mostrarCaracteristicas: function() {
//         return `${this.titulo} é um filme de drama.`
//     }
// }

// // console.log(filme.mostrarCaracteristicas())

// function anime(nome, maisForte, maisFraco, nota) {
//     return{
//         nome,
//         maisForte,
//         maisFraco,
//         nota,
//     }
// }

// let anime1 = anime("Naruto", "Boruto", "Tio do Lamen", 7)
// let anime2 = anime("One Piece", "Luffy", "Ace", 5)
// // console.log(anime1)
// // console.log(anime2)

// // estruturar de repetição : for in e for of

// //for in :  índices. Serve pra indexar valores

// let jogadores = ['Caça Rato', 'Ganso', 'Pato']


// // for(let value in anime2) {
// //     console.log(anime2[value])
// // }


// // for of:  valor. usado ora array e objetos

// // let palavra = "Grêmio"

// // for(let value of Object.keys(anime1)){
// //     console.log(anime1[value])
// // }

// // console.log(anime1.length)

// // for(let i = 0; i < Object.keys(anime1).length; i ++) {
// //     console.log(anime1[i])
// // }

// // Calculem as medias das notas dos alunos de um professor e digam se a turma está na média

// let professor = {
//     nome: 'Stark Parker',
//     materia: 'física',
//     notas: {
//         aluno1: [5,2],
//         aluno2 : [3,7]
//     }
// }

// let somaNotas = 0
// let numeroAlunos = 0

// for(let aluno in professor.notas) {
//     somaNotas += Array.isArray(professor.notas[aluno]) ? professor.
//     notas[aluno].reduce((acc, nota) => acc + nota, 0) / professor.notas
//     [aluno].length : professor.notas[aluno]

//     numeroAlunos++
// }

// let media = somaNotas / numeroAlunos

// if(media >= 6) {
//     console.log(`A média da turma é ${media} e está acima do padrão`)
// } else{
//     console.log(`A média da turma é ${media} e está abaixo do padrão`)

// }

// // console.log(somaNotas)

// REVISÃO OBJETOS:

let livro = {
    nome: 'Marley e Eu',
    anoLancamento: '2024',
    autor: 'Will Smith',
    nPaginas : 12,
    genero: 'Comédia',
    atores: ['Scooby', 'Super Cão', 'Batcão'],

    mostrarCaracteristicas: function() {
        return `${this.nome} é um livro para ficar alegre.`
    }
}

// console.log(livro.mostrarCaracteristicas())
// console.log(livro.nome)

// let livro2 = livro
// livro2.preco = 20.2
// console.log(livro)
// console.log(livro2)

let filme = {
    titulo: "High School Musical",
    anoLancamento: 2007,
    atores: ['Zac Efron', 'Arthur Morgan', 'Cloud Strife'],
    genero: 'Guerra',

    mostrarCaracteristicas: function() {
        return `${this.titulo} é um filme de drama`
    }
}

// console.log(filme.mostrarCaracteristicas ())

// função construtura, uma função q vai retornar um objeto


function anime(nome, maisForte, maisFraco, nota) {
    return {
        nome,
        maisForte,
        maisFraco,
        nota
    }

}

let anime1 = anime("Naruto", "Naruto", "Konohamaru", 7 )
let anime2 = anime("One Piece", "Roger", "Ace", 8)

// console.log(anime1)
// console.log(anime2)


// FOR IN E FOR OF

// For in itera sobre índices, ou seja, posição , chaves

const frutas = ["maçã", "banana", "uva"];

for (const i in frutas){ 

// console.log(i) // mostra o índice
// console.log(frutas[i]) // mostra o valor, conteúdo

}

// For OF itera sobre o valores. ARRAY DE OBJETOS
 
for (const fruta of frutas) {
    // console.log(fruta)
}

const pessoa = { nome: "João", idade: 28 };

for (const chave in pessoa) {
//   console.log(chave + ": " + pessoa[chave]);
}
// Saída:
// nome: João
// idade: 28


let jogadores = ['Caça Rato', 'Ganso', 'Pato']

for(let key in jogadores) {
    // console.log(key)
    // console.log(jogadores[key])
}

let palavra = "Grêmio"

for(let char of palavra) {
    // console.log(char)
}

for(let value in anime1){
    // console.log(anime1[value])
}

// for(let value of anime1){
//     // console.log(value) NÃO É ITERÁVEL
// }

// // Calculem as medias das notas dos alunos de um professor e digam se a turma está na média


let professor = {
    nome: 'Stark Parker',
    materia: 'Física',
    notas: {
        aluno1: [5, 2],
        aluno2: [3, 7]
    }
}

// for(let nota in professor.notas){
//     console.log(nota)
//     // console.log(professor.notas)
//     console.log(professor.notas[nota])
// }

let somaNotas = 0
let numeroAlunos = 0

for(let aluno in professor.notas) {
    somaNotas += Array.isArray(professor.notas[aluno]) ? 
    professor.notas[aluno].reduce((acc, nota) => acc + nota, 0) / 
    professor.notas[aluno].length : professor.notas[aluno]   

    numeroAlunos ++

}

let media = somaNotas / numeroAlunos

if(media >= 6) {
    console.log(`A média da turma é${media} e está acima do padrão`)
} else {
    console.log(`A média da turma é ${media} e está abaixo do padrão`)
}

// for(let nota in professor.notas){
//     console.log(professor.notas[nota][1])
// }


// escreva um algoritmo que leia uma temperatura em graus celsius e devolva em fahrenheint//

const prompt = require('prompt-sync')()

// let celsius = Number(prompt("Digite a temperatura em graus Celsius a ser convertida: "))
// let fahrenheint = (celsius * 9/5 ) + 32

// console.log("A temperatua em Fahrenheit é: ", fahrenheint)

// Escreva um algoritmo para ler o número de eleitores de um município, o número de votos 
// brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em 
// relação ao total de eleitores.

// let numEleitores = Number(prompt("Insira o número de eleitores do município: "))
// let numBrancos = Number(prompt("Insira o número de votos em branco: "))
// let numNulos = Number(prompt("Insra o número de votos nulos: "))
// let numValidos = Number(prompt("insira o número de votos válidos: "))

// let pBranco = ( numBrancos / numEleitores) * 100
// let pNulos = ( numNulos / numEleitores) * 100
// let pValidos = ( numValidos / numEleitores) * 100

// console.log(`O percentual de votos brancos é: ${pBranco}%`)
// console.log(`O percentual de votos nulos é: ${pNulos}%`)
// console.log(`O percentual de votos válidos é: ${pValidos}%`)

// A turma C e composta de 60 alunos, e a turm a D de 20 alunos. Escreva um algoritmo
// que leia o percentual de alunos reprovados na turma C, o percentual de aprovados na turma
// D . Calcule e escreva:

// a) O Número de alunos reprovados na turma C
// b) O número de reprovados na tumra D
// a porcentagem de alunos reporvados em relação ao total de alunos das 2 turmas.

// let reprovadosC = Number(prompt("insira o percentual de alunos reprovados na turma C: "))
// let aprovadosD = Number(prompt("Insira o percentual de aprovados na turma D: "))
// let nRprovadosC = (reprovadosC / 100) * 60
// let nAprovadosD = (aprovadosD / 100) * 20
// let reprovadosTotal = (nRprovadosC / 100) * 80

// console.log('O número de alunos reprovados na turma C é: ', nRprovadosC)
// console.log('O número de aprovados na turma D é: ', nAprovadosD)
// console.log('A porcentagem de alunos reprovados em relação ao total das turmas é: ',reprovadosTotal ) 

// resolução professor//

// let turmaC = 60
// let turmaD = 20

// let percentualReprovadosC = Number(prompt('Escreva o percentual de alunos reprovados na turma C: '))

// let percentualAprovadosD = Number(prompt('Escreva o percentual de alunos aprovados na turma D: '))

// let qtdReprovadosC = (turmaC * percentualReprovadosC) / 100 
// let qtdReprovaodsD =  (100 - percentualAprovadosD) * turmaD / 100
// let totalAlunos = turmaC + turmaD
// let relacaoReprovadosTotal = ((qtdReprovadosC + qtdReprovaodsD) / totalAlunos) * 100

// console.log('A quantidade de alunos reprovados na turma C é de: ', qtdReprovadosC)
// console.log('A quantidade de alunos reprovados na turma D é de: ', qtdReprovaodsD)
// console.log('O percentual de alunos reprovados em relação ao total de alunos é: ', relacaoReprovadosTotal )

//Faça um programa que leia o dia da semana ( Domingo, Seunda, terça, Quarta,
// Quinta, Sexta e Sábado). Esse dia deve ser um texto. Se for Sábado ou Domingo,
// imprimir 'Final de Semana', senão impirmir 'dia útil'.

// let diaDaSemana = prompt("Informe o dia da semana: (Domingo, Segunda, Terça, Quarta, Quinta, Sexta, Sábado): ")

// switch(diaDaSemana) {

//     case 'Domingo':
//     case 'Sabado':
//     console.log("Final de Semana")
//         break
//     default:
//         console.log("DIa útil")
//         break
// } 

// Escreva um algoritmo para repetir a leitura de um número enquanto o valor fornecido for
// diferente de 0. Para cada número fornecido, imprimir se ele é Negativo ou Positivo.
// Quando o número for 0, a repetição deve ser encerrada se imprimir mensagem.

// let numero = 0

// while(numero != 0){ 

//     numero = Number(prompt('Insira o número: (para encerrar digite 0'))
//     console.log(numero)

//     if (numero > 0){
//         console.log('Número postivo')
//     } else{
//         console.log('Número negativo')
//     }
// }

// function adivinhacao() {
//     let numero = Math.floor(Math.random() * 100) +1
//     let tentativa = prompt("Adivinhe o número entre 1 e 100")
//     let contagem = 0

//     while( tentativa !== numero) {
//         tentativa = prompt("Adivinhe o número entre 1 e 100")
//         contagem ++

//         if (tentativa < numero) {
//             console.log("Mais alto")
//         } else if(tentativa > numero){
//             console.log("Mais baixo")      
//         } else {
//             console.log(`Você conseguiu em ${contagem} tentativas`)
//         }
//     }
// }

// // 

// function palavrasUnicas(texto) {
//     const palavras = texto.split(" ");
//     const unicas = [];

//     for (let i = 0; i < palavras.length; i++) {
//         if (!unicas.includes(palavras[i])) {
//             unicas.push(palavras[i]);
//         }
//     }

//     return unicas;
// }
// // console.log(palavrasUnicas("olá olá mundo mundo"))




// // const prompt = require('prompt-sync')(); 

// function ehDataValida(dia, mes, ano){
//     const data = new Date(ano, mes -1, dia);
//     return (
//         data.getFullYear() === ano &&
//         data.getMonth() === mes -1 &&
//         data.getDate() === dia
//     )
// }

// const dia = Number(prompt("Dia: "))
// const mes = Number(prompt("Mês: "))
// const anos = Number(prompt("Ano "))

// if(ehDataValida(dia, mes, anos)){
//     console.log(`${dia}/${mes}/${anos} é uma data VALIDA`)
// }else{
//     console.log(`${dia}/${mes}/${anos} é uma data INVALIDA`)
// }


// ehDataValida(10,10,10)
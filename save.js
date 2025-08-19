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

//Faça um programa que leia o dia da semana ( Domingo, Seunda, erça, Quarta,
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

// let numero = null

// while(numero != 0){ 

//     numero = Number(prompt('Insira o número: (para encerrar digite 0): '))
//     console.log(numero)

//     if (numero > 0){
//         console.log('Número postivo')
//     } else{
//         console.log('Número negativo')
//     }
//  }

// Escreva um algoritmo para repetir a leitura de uma senha até que ela seja válida.
//para cada leitura da senha incorreta, escrever "Senha inválida". Quando corrta, dever
// ser impressa a mensagem "Acesso permitido" e o algoritmo encerrado. Considere a senha
// correta como 2807

// let senha = 2807
// let senhaUsuario = 0

// while(senhaUsuario != senha){

//      senhaUsuario = Number(prompt("Digite a senha: "))

//      if(senhaUsuario != senha){
//         console.log('Senha Inválida')
//      } else{
//         console.log('Acesso Permitido')
//      }

// }

// resolução professor//

// let valor

// do{
//     valor = Number(prompt('Informe o valro: '))

//     if(valor > 0){
//         console.log('Positivo')
//     } else if(valor == 0){
//         break
//     } else {
//         console.log('Negativo')
//     }

// } while (valor !== 0)

//resolucçao prof 2:

let senha

do{
    senha = prompt('Informe a senha: ')

    if(senha != 2807){
        console.log('Acesso negado')
    } else{
        console.log('Acesso permitido')
    }

} while(senha != 2807)
// // verificar se um número é positivo//
 const prompt= require('prompt-sync')()

//  let numero = Number(prompt("Insira o número: "))

//  if(numero > 0){
//     console.log("O número é positivo")
//  } else if(numero = 0){
//     console.log("Número 0")
//  } else{
//     console.log("O número é negativo")
//  }

 // verificar se um nao é bissexto//

// let ano = Number(prompt('Insira o ano: '))

// if((ano % 4 ==0 )&& (ano % 100 != 0) || (ano % 400 == 0)){
//     console.log("Ano bissexto")
// } else{
//     console.log("Não é bissexto")
// }

// definir faixa etária pra criança, adolescente e adulto e apresnetar , com switch, falar
// qual faixa etária está a pessoa que informou//

let idade = Number(prompt("Insira sua idade: "))
let faixaetaria = ""

if ((idade > 0) && (idade <= 12)){
    faixaetaria = "criança"
} else if (idade <= 18 && (idade != 0)){
    faixaetaria = "Adolescente"
} else if (idade > 18){
    faixaetaria = "Adulto"
} else {
    faixaetaria = "inválida"
}

switch(faixaetaria) {
    case "criança":
        console.log("Você é uma criança")
        break
    case "Adolescente":
        console.log("Voce é um adolescente")
        break
    case "Adulto":
        console.log("Você é um adulto")
        break
    default:
        console.log("Idade inválida")
}
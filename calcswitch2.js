const prompt = require('prompt-sync')()

let v1 = Number(prompt("Insira o valor 1: "))
let v2 = Number(prompt("Insira o valor 2: "))
let op = prompt("Informe a operação desejada: (+, -, *, / ): ")
resultado = 0

switch(op) {
    case '+':
        resultado = v1 + v2
        break
    case '-':
        resultado = v1 - v2
        break
    case '*':
         resultado = v1 * v2
        break
    case '/':
        if(v2 !== 0){
        resultado = v1 / v2
        } else {
            console.log('Erro: divisão por zero')
            resultado = undefined
        }
        break
    default :
        console.log("Opreção inválida")
        resultado = undefined
        break
}  
 if(resultado !== undefined){
    console.log("O resultado é: ", resultado)
}
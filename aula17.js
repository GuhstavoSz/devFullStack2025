// Exercícios atividade 2

// crie uma função EhDataValida(dias, mes, ano) que retorne true se os valores formarem
// uma data real(meses de 28 a 31 dias, ano bissexto para fevereiro) e false caso não


// function dataValida(dia, mes, ano) {
//   const data = new Date(ano, mes - 1, dia)
//   return (
//     data.getFullYear() === ano &&
//     data.getMonth() === mes - 1 &&
//     data.getDate() === dia
//   )
// }


// console.log(dataValida(6,3,2001))

// function dataValida(dia, mes, ano) {
    //   if (dia < 1 || mes < 1 || mes > 12) return false;
    //   const ultimoDia = new Date(ano, mes, 0).getDate();
    //   return dia <= ultimoDia;
    // }
    
    
//     function ehDataValida(dia, mes, ano) {
//   const mesesCom31Dias = [1, 3, 5, 7, 8, 10, 12];
//   const mesesCom30Dias = [4, 6, 9, 11];

//   if (mes < 1 || mes > 12 || dia < 1) return false;

//   if (mesesCom31Dias.includes(mes)) {
//     return dia <= 31;
//   } else if (mesesCom30Dias.includes(mes)) {
//     return dia <= 30;
//   } else if (mes === 2) {
//     const bissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
//     return dia <= (bissexto ? 29 : 28);
//   }

//   return false;
// }


// function diasNoMes(mes, ano) {
//   return new Date(ano, mes, 0).getDate();
// }

// function dataValida(dia, mes, ano) {
//   if (dia < 1 || mes < 1 || mes > 12) return false;
//   return dia <= diasNoMes(mes, ano);
// }


// function invertestr(str) {

//     return str.split(" ")

// }

// console.log(invertestr('abc'))


// function palavrasUnicas(texto) {
//   const palavras = texto.split(" ");
//   const unicas = {};
//   const resultado = [];

//   for (const palavra of palavras) {
//     if (!unicas[palavra]) {
//       unicas[palavra] = true;
//       resultado.push(palavra);
//     }
//   }

//   return resultado;
// }



// Memorização é uma técnica de otimização que visa melhorar a eficiência de funçoes
// em especial as recursivas ou que recalculam resultados frequentemente.

// fibonacci pradrão:

// function fibonacci(n) {
//   if (n < 2) return n
//   return fibonacci(n - 1) + fibonacci(n-2)

// }

// console.log(fibonacci(5))

//fibonnaci com memorização: 

function memorize (fn) {
  const cache = new Map() // é uma estruturas de dados(objeto no JS) que armazeina chaves e valores

  return function(...args) {
    const key = JSON.stringify(args) // argumentos podem vir em formato de texto ou objeto. Vai pegar o array de argumentos e tranformas numa unica string
                    // stringfy é transfromar um conjunto de dados, objetos, arrays em uma estrutura de Json
    if(cache.has(key)) {
      return cache.get(key)
    } 

    const result = fn.apply(this, args)
      cache.set(key, result)
      return result
    
  }
}




function fibonacci(n) {
  if (n < 2) return n
  return fibonacci(n - 1) + fibonacci(n-2)

}

const fastfib = memorize (function fibonacci(n) {
  if(n < 2 ) return n
  return fastfib(n - 1) + fastfib(n - 2)
})

console.log(fastfib(40))
console.log(fibonacci(40))

// em um objeto normal as chaves são: Nome : "Jacques"
// mas , no Map, as chaves pode ser de qualquer tipo, ex 1: "Jaques"
// Map armazena chaves que podem ser outra estruras


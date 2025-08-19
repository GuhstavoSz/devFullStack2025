// estrutura de dados:

// Lista: cada elemento reconhece o próximo, aponta para o próximo. Armazena diversos valores

// array: possuem seu tamanho delimitado previamente, por natureza; listas, não

// ponteiros é uma variável que armazena o endereço de memoria de outra variavel


let car = {
    nome: "McQueen",
    cor: "Vermelho"
}

let car2 = {
    nome: "Sally",
    cor: "Azul"
}

// console.log(car.nome, car2.nome)

//objeto representa um elemento do mundo real. O que ele faz, oq ele tem, como está
// 

class carExemplo {
    constructor(nome, cor) {
        this.nome = nome
        this.cor = cor
    }
}

let car3 = new carExemplo("Camaro", "Amarelo")

// console.log(car3)

//uma classe é um protótipo. Objetos não exsitem sem classe. No javaScript existem
// Bolo é o obejto, a receita é a classe

// cada posição da lista vai ser chamada de "nó"


// classe que representa cada posição da lista

class Node {
    constructor(valor) {
        this.valor = valor
        this.proximo = null
    }
}

class LinkedList {
    constructor(){
        this.head = null // Head é uma referência para o primeiro elemento da lista
    }

    InserirInicio(n) {
        let novo = new Node(n)
        novo.proximo = this.head
        this.head = novo
    }

    imprimir() { // para imprimir, eu preciso começar do primeiro elemnto da lista.
        // preciso saber o elemento atual
        let atual = this.head
        let str = ""
        while(atual) {
            str += atual.valor + "→" 
            atual = atual.proximo
        }
        str += "null"
        console.log(str)
    }
}

let lista = new LinkedList()

lista.InserirInicio(10)
lista.InserirInicio(9)

lista.imprimir()



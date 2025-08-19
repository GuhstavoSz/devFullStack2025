// Pilhas e Filas

// Uma pilha é uma estrutura de dados
// // formas mais comuns de implementar são usando arrays e listas
// last in , first out 
// Nó vertical que representa a pilha

// class Node { 
//     constructor(value) {
//         this.value = value
//         this.next = null // o elemento de baixo, o próximo
//     }
// }

class Stack {
    constructor() {
        this.top = null // análogo ao Head, o elemento do topo
    }

    push(value) {
        let newNode = Node(value)
        newNode.next = this.top
        this.top = newNode
    }

    pop(value) {
        if(!this.top) return null
        let poppedValue = this.top.value
        this.top = this.top.next
        return poppedValue

    }

    peek() {
        if(!this.top) return null
        return this.top.value

    }

    isEmpty() {
        return this.top === null
    }

}


// Fila = first in, first out (processamento de dados em nuvens)
// enfileirar é o mesmo que adicionar no final da fila

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor() {
        this.front = null // Head é uma referência para o Primeiro elemento da lista
        this.rear = null // Tail é uma referência para o ÚLTIMO elemento da lista
        this.size = 0
    }

    enqueue(value) {
        let newNode = new Node()
        if(this.rear) {
            this.rear.next = newNode

        } // se tem um último, eu digo que o próximo é oq estou criando
        
        this.rear = newNode

        if(!this.front) { // Ou seja, se não tiver um front
            this.front = newNode
        }
        // se não tem um primeiro, digo que o que estou colocando é o primeiro

        this.size ++
    }

    dequeue() {
        if(!this.front) return null
        let dequeueValue = this.front.value
        this.front = this.front.next
        this.size --

         if (!this.front) {
        this.rear = null
        }

        return dequeueValue

    }

}

// let fila = new Queue()

// fila.enqueue(1)
// fila.enqueue(2)
// fila.dequeue()

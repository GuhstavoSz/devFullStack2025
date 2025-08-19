//   LISTA DUPLAMENTE ENCADEADA

// class Node {
//     constructor(valor) {
//         this.valor = valor
//         this.anterior = null
//         this.proximo = null
//     }
// }

// class doubleLikedList {
//     constructor() {
//         this.head = null
//     }

//     inserirNoInicio(v) {
//         let novo = new Node(v)
//         novo.proximo = this.head // o próximo elemento precisa ser o antigo novo
//         if(this.head) {
//             this.head.anterior = novo
//         }
//         this.head = novo
//     }

// }


// inserir no fim; imprimir Frente e imprimir trás

class Node {
    constructor(valor) {
        this.valor = valor
        this.anterior = null
        this.proximo = null
    }
}

class listaDupla {
    constructor() {
        this.head = null // Head é uma referência para o Primeiro elemento da lista
        this.tail = null // Tail é uma referência para o ÚLTIMO elemento da lista
        this.length = 0
    }

    inserirNoInicio(v) {
        let novo = new Node(v)
       if(!this.head) {
        this.head = this.tail = novo
       } else {
        novo.proximo = this.head
        this.head.anterior = novo
        this.head = novo
       }
        
        this.length++

    }

    inserirNoFim(n) {
        let novo = new Node(n)
        if(!this.head) {
            this.head = this.tail = novo
        } else {
            this.tail.proximo = novo
            novo.anterior = this.tail
            this.tail = novo
        }

    this.length++
    }

    inserirEm(indice, valor) {
        if(indice < 0 || indice > this.length ) throw RangeError
        ("indice está fora dos limites") 
        if(indice === 0) return this.inserirNoInicio(valor)
        if(indice === this.length) return this.inserirNoFim(valor)

        let atual = this.head 

        for(let i = 0; i < indice; i++) {
            atual = atual.proximo
        }

        let novo = new Node(valor)
        let noAnterior = atual.anterior

        noAnterior.proximo = novo
        novo.anterior = noAnterior
        novo.proximo = atual
        atual.anterior = novo

        this.length++
  }


    removerEm(indice) {
        if(indice < 0 || indice > this.length ) throw RangeError
        ("indice está fora dos limites") 

        let removido 

        if(this.length === 1) {
            removido = this.head
            this.head = this.tail = null
        } else if(indice === 0 ) {
            removido = this.head
            this.head = this.head.proximo
            this.head.anterior = null
        } else if(indice = this.length - 1) {
            removido = this.tail
            this.tail = this.tail.anterior
            this.tail.proximo = null
        } else {
            let atual = this.head

            for(let i = 0; i < indice; i++){
                atual = atual.proximo
            }

            removido = atual
            const {proximo, anterior} = atual
            anterior.proximo = proximo
            proximo.anterior = anterior
        }
        
        this.length --

    }


}
    



 
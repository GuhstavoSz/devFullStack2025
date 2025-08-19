// Árvores : Estrutura e opreçoes básicas

// são estruturas de dados hierárquicas. 

// folhas são nós q não possuem filhos; Altura é a distancia da raiz
// até o último nó folha; grau é a quantidade de filho que um nó tem e 
// profundidade é a distancia do nó até uma folha, é referente a um nó,
//mas a árvore tem a sua altura. Mós que estão bno msm nv são irmaos


class TreeNode {
    constructor(value) {
        this.value = value
        this.children = []
    }

    addChild(node) {
        this.children.push(node)
    }

    removeChild(value) {
        this.children = this.children.filter(child => child.value !== value)
    }
}

class Tree {
    constructor(rootValue) {
        this.root = new TreeNode(rootValue)
    }

    traverseDFS(callback) {
        function recurse(node) {
            callback(node)
            node.children.forEach(child => recurse(child))
        }
        recurse(this.root)
    }

}

const tree = new Tree('A')

const B = new TreeNode('B')
const C = new TreeNode('C')
const D = new TreeNode('D')
const E = new TreeNode('E')
const F = new TreeNode('F')
const G = new TreeNode('G')
const H = new TreeNode('H')

// foram criados objetos do tipo TreeNode, sem relação com a arvore
// para adicionar um vinculo entre eles:

tree.root.addChild(B)
tree.root.addChild(C)
tree.root.addChild(D)

B.addChild(E)
B.addChild(F)

C.addChild(G)
C.addChild(H)

function printNode(node) {
    console.log(node.value)
}

tree.traverseDFS(printNode)

// function printTree(node, indent = "") {
//     console.log(indent + node.value);
//     for (const child of node.children) {
//         printTree(child, indent + "  ");
//     }
// }

// printTree(tree.root)

function printTree(node, prefix = '', isLast = true) {
    console.log(prefix + (isLast ? '└── ' : '├── ') + node.value)

    const lastIndex = node.children.length - 1;
    node.children.forEach((child, index) => {
        const isLastChild = index === lastIndex;
        printTree(child, prefix + (isLast ? '    ' : '│   '), isLastChild)
    })
}

// printTree(tree.root)

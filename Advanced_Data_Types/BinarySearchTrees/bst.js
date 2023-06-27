//! A visual diagram of a Binary Search Tree is located within this file. Labelled "BST_Diagram.jpg"
//todo Values of the right node should be greater then the direct parent, and values of the left node should be lesser
//todo Each node has 2 pointers, left and right, and a value



class BSNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST {
    constructor() {
        this.root = null
    }

    addValues(val) {
        if (this.root) {
            let runner = this.root
            while (runner) {
                if (val > runner.value) {
                    if (runner.right) {
                        runner = runner.right
                    }
                    else {
                        runner.right = new BSNode(val)
                        return this
                    }
                }
                else {
                    if (runner.left) {
                        runner = runner.left
                    }
                    else {
                        runner.left = new BSNode(val)
                        return this
                    }
                }
            }
        }
        else {
            this.root = new BSNode(val)
            return this
        }
    }
}


const newTree = new BST()
newTree.addValues(33)
newTree.addValues(32)
newTree.addValues(14)
newTree.addValues(45)
newTree.addValues(38)
console.log(newTree)
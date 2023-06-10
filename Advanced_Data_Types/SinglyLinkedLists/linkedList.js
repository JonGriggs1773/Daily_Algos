


//! Singly Linked Lists 
class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    addFront(val) {
        let new_node = new Node(val)
        if (!this.head) {
            this.head = new_node
            return this
        }
        new_node.next = this.head
        this.head = new_node
        return this
    }

    removeFront() {
        // Checking to make sure the list is not empty
        if (this.head === null) {
            console.log("Linked list is empty. Nothing to remove.")
            return this
        }
        // Storing data that is going to be removed in a variable
        const removedData = this.head.data
        // Adjusting the head of the linked list
        this.head = this.head.next
        // Returning the removed data
        return removedData
    }

    getHeadData() {
        return this.head.data
    }

    getSumOfList() {
        let sum = 0
        let runner = this.head
        while(runner !== null) {
            sum += runner.data
            runner = runner.next
        }
        return sum
    }
}

myLinkedList = new LinkedList()

myLinkedList.addFront(17)
myLinkedList.addFront(16)
myLinkedList.addFront(15)
myLinkedList.addFront(14)
myLinkedList.addFront(14)
// console.log("This One !!!!!!!!: ", myLinkedList.removeFront())
// console.log(myLinkedList)
// console.log("This Two !!!!!!!!: ", myLinkedList.removeFront())
// console.log(myLinkedList)
// console.log("This Three !!!!!!!!: ", myLinkedList.removeFront())
// console.log(myLinkedList)
console.log("Head Data: ", myLinkedList.getHeadData())
console.log(myLinkedList.getSumOfList())



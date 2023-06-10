

class Node:
    def __init__(self, data):
        self.data = data
        self.next = None




class LinkedList:
    def __init__(self):
        self.head = None

    
    def addFront(self, value):
        new_node = Node(value)
        if self.head is None:
            self.head = new_node
            return self
        new_node.next = self.head
        self.head = new_node
        return self
    
    
    def removeFront(self):
        if self.head is None:
            print("Linked List is empty")
            return self
        removed_data = self.head.data
        self.head = self.head.next
        return removed_data
    
    def printHeadData(self):
        return self.head.data
    
    def findSum(self):
        runner = self.head
        sum = 0
        while runner != None:
            sum = sum + runner.data
            runner = runner.next
        return sum



    
linked_list = LinkedList()
print(linked_list.addFront(15))
print(linked_list.addFront(16))
print(linked_list.addFront(17))
print(linked_list.addFront(18))
# print("Before Removal: ", linked_list.printHeadData())
# linked_list.removeFront()
# print("After Removal: ", linked_list.printHeadData())
# linked_list.removeFront()
# print("After Removal: ", linked_list.printHeadData())
# linked_list.removeFront()
# print("After Removal: ", linked_list.printHeadData())

print(linked_list.findSum())
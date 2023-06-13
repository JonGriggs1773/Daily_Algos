

class Node:
    def __init__(self, data):
        self.data = data
        self.next = None




class LinkedList:
    def __init__(self):
        self.head = None

    
    def add_front(self, value):
        new_node = Node(value)
        if self.head is None:
            self.head = new_node
            return self
        new_node.next = self.head
        self.head = new_node
        return self
    
    
    def remove_front(self):
        if self.head is None:
            print("Linked List is empty")
            return self
        removed_data = self.head.data
        self.head = self.head.next
        return removed_data
    
    def print_head_data(self):
        return self.head.data
    
    def find_sum(self):
        runner = self.head
        sum = 0
        while runner != None:
            sum = sum + runner.data
            runner = runner.next
        return sum
    
    def contains_value(self, num):
        runner = self.head
        while runner != None:
            if runner.data == num:
                return True
            runner = runner.next
        return False
    
    def node_count(self):
        runner = self.head
        count = 0
        while runner != None:
            count += 1
            runner = runner.next
        return count



    
linked_list = LinkedList()
print(linked_list.add_front(15))
print(linked_list.add_front(16))
print(linked_list.add_front(17))
print(linked_list.add_front(18))
print(linked_list.add_front(18))
print(linked_list.find_sum())
print(linked_list.contains_value(14))
print(linked_list.node_count())
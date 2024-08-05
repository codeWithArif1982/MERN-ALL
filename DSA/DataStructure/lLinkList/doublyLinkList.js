// Javascript program to illustrate creation 
// and traversal of Doubly Linked List
// Class for Doubly Linked List 

var head;
class Node {

    // Constructor to create a new node 
    // next and prev are by default initialized as null 
    constructor(d) {
        this.data = d;
        this.next = null;
        this.prev = null;
    }
}

// Adding a node at the front of the list 
function push(new_data) {
    /* 
    * 1. allocate node 2. put in the data 
    */
    var new_Node = new Node(new_data);

    /* 3. Make next of new node as head and previous as NULL */
    new_Node.next = head;
    new_Node.prev = null;
    /* 4. change prev of head node to new node */
    if (head != null)
        head.prev = new_Node;
    /* 5. move the head to point to the new node */
    head = new_Node;
}

// This function prints contents of linked list starting from the given node
function printlist(node) {
    var last = null;
    document.write("<br/>Traversal in forward Direction<br/>");
    while (node != null) {
        document.write(node.data + " ");
        last = node;
        node = node.next;
    }

    while (last != null) {
        console.log(last.data + " ");
        last = last.prev;
    }
}

// Driver program to test above functions 

// Start with the empty list 

// Insert 6. So linked list becomes 6->NULL 
push(6);

// Insert 7 at the beginning. So 
// linked list becomes 7->6->NULL 
push(7);

// Insert 1 at the beginning. So 
// linked list becomes 1->7->6->NULL 
push(1);
console.log("Created DLL is: ");
printlist(head);

// This code is contributed by Susobhan Akhuli 
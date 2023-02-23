class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

function swapNode(head){
    if (head == null) return null;
    if (head.next == null) return head;
}

let head = new Node(1);
let current = head;
for (let i = 2 ; i < 6; i++){
    current.next = new Node(i);
    current = current.next;
}

console.log(head);
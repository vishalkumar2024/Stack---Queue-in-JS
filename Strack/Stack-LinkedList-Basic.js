// Node class for linked list
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Stack class using linked list
class Stack {
    constructor() {
        this.top = null; //top of the Stack
        this.count = 0
    }

    push(value) {
        let newNode = new Node(value)
        newNode.next = this.top;
        this.top = newNode;
        this.count++;
    }

    pop() {
        if (this.isEmpty()) {
            return "Stack Underflow";
        }
        this.count--
        return this.top = this.top.next;
    }

    size() { 
        return this.count;
    }

    atTop() {
        return this.top.data
    }

    isEmpty() {
        return (!this.top) 
    }
}

let stk = new Stack();

stk.push(10)
stk.push(20)
stk.push(30)
stk.push(40)


// console.log(stk)
// console.log(stk.size())
// console.log(stk.atTop())
// console.log(stk.isEmpty())

while(!stk.isEmpty()){
    console.log(stk.atTop())
    stk.pop();
}
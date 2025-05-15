class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor(item) {
        this.top = null;
        this.count=0
    }

    push(value){
        let newNode= new Node(value)
        newNode.next=this.top;
        this.top=newNode;
        this.count++;
    }
}

let stk=new Stack();

stk.push(10)
stk.push(20)
stk.push(30)
stk.push(40)

console.log(stk)
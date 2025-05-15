// Node class for linked list
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// queue class using linked list
class Queue {
    constructor() {
        this.head = null; //head of the queue
        this.tail = null;
        this.count = 0;
    }

    push(value) {
        let newNode = new Node(value)
        if(this.isEmpty()){
           this.head=this.tail=newNode;
        }else{
            this.tail.next=newNode;
            this.tail=newNode;
        }
        this.count++;
    }

    pop() {
        if (this.isEmpty()) {
            return "queue Underflow";
        }
        this.count--
        return this.head = this.head.next;
    }

    size() {
        return this.count;
    }

    athead() {
        return this.head.data
    }

    isEmpty() {
       return this.head==null;
    }
}

let que = new Queue();

que.push(10)
que.push(20)
que.push(30)
que.push(40)

// que.pop()
// que.pop()

// console.log(que)
// console.log(que.size())
// console.log(que.athead())
// console.log(que.isEmpty())

while (!que.isEmpty()) {
    console.log(que.athead())
    que.pop();
}
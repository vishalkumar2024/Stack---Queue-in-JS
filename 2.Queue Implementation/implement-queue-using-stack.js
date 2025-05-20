class Stack {
    constructor() {
        this.item = [];
    }

    push(ele) {
        return this.item.push(ele);
    }

    pop() {
        if (this.isEmpty()) {
            return "Stack Underflow";
        }
        return this.item.pop();
    }

    atTop() {
        if (this.size() !== 0)
            return this.item[this.item.length - 1];
        else return "Stack is empty"
    }

    size() {
        return this.item.length;
    }

    isEmpty() {
        return (this.size() == 0)
    }
}

class Queue {
    constructor() {
        this.st1 = new Stack;
        this.st2 = new Stack;
    }

    push(item) {
        while (this.st1.size()) {
            this.st2.push(this.st1.atTop());
            this.st1.pop()
        }
        this.st1.push(item)
        while (this.st2.size()) {
            this.st1.push(this.st2.atTop());
            this.st2.pop()
        }
    }
    pop() {
        if (this.isEmpty()) {
            return "Stack Underflow";
        }
        return this.st1.pop();
    }

    atTop() {
        return this.st1.atTop();
    }

    size() {
        return this.st1.size();
    }

    isEmpty() {
        return (this.size() == 0)
    }
}

let que = new Queue()

que.push(10)
que.push(20)
que.push(30)
que.push(40)

que.pop();

// console.log(stk)
// console.log(que.atTop())
// console.log(stk.isEmpty())
// console.log(stk.size())

while(que.size()!==0){
    console.log(que.atTop());
    que.pop();
}
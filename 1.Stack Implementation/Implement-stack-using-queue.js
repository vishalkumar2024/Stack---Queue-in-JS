class Queue {
    constructor() {
        this.item = [];
    }

    push(ele) {
        return this.item.push(ele);
    }

    pop() {
        if (this.isEmpty()) {
            return "Queue Underflow";
        }
        return this.item.shift();
    }

    atTop() {
        if (this.size() !== 0)
            return this.item[0]
        else return "Queue is empty"
    }

    size() {
        return this.item.length;
    }

    isEmpty() {
        return (this.size() == 0)
    }
}

class Stack {
    constructor() {
        this.que = new Queue(); // each stack has its own queue
    }

    push(item) {
        let length = this.que.size();
        this.que.push(item);

        for (let i = 0; i < length; i++) {
            // this.que.push(this.que.pop());
            let del = this.que.pop();
            this.que.push(del)
        }
    }
    pop() {
        if (this.que.length == 0) {
            return -1
        } else {
            return this.que.pop();
        }
    }
    atTop() {
        return this.que.atTop()
    }
    isEmpty() {
        return this.que.isEmpty() == 0
    }
    size() {
        return this.que.size();
    }
}

let stk = new Stack();

stk.push(2)
stk.push(3)
stk.pop()
stk.push(4)
stk.pop()

// console.log(stk)
// console.log(stk.atTop())
// console.log(stk.isEmpty())
// console.log(stk.size())

while (stk.size() !== 0) {
    console.log(stk.atTop());
    stk.pop();
}
//  output: 30, 20, 10
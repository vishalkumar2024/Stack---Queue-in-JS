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
        this.st1.push(item);
    }
    pop() {
        if (!this.st2.isEmpty()) {
           return  this.st2.pop();
        } else {
            while (this.st1.size()!==0) {
                this.st2.push(this.st1.atTop());
                this.st1.pop();
            }
            return this.st2.pop();
        }
    }

    atTop() {
        if (!this.st2.isEmpty()) {
            return this.st2.atTop();
        } else {
            while (this.st1.size()) {
                this.st2.push(this.st1.atTop());
                this.st1.pop();
            }
            return this.st2.atTop();

        }
    }

    size() {
        return this.st1.size() + this.st2.size();
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

// que.pop();
// que.pop();

// console.log(que)
// console.log(que.atTop())
// console.log(stk.isEmpty())
// console.log(stk.size())

while (que.size() !== 0) {
    console.log(que.atTop());
    que.pop();
}
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
        return  (this.size() == 0) 
    }
}

const stk = new Stack();

stk.push(10);
stk.push(20);
stk.push(30);
stk.push(40);

// let deleteItem = stk.pop();
// console.log(`deleted item is ${deleteItem}`)

// stk.pop()
// stk.pop()
// stk.pop()
// stk.pop()

// console.log(stk)
// console.log(stk.atTop())
// console.log(stk.size())
// console.log(stk.isEmpty())
// console.log(stk.pop())


while (!stk.isEmpty()) {
    console.log(stk.atTop())
    stk.pop();
}

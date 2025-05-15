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
            return  this.item[0]
        else return "Queue is empty"
    }

    size() {
        return this.item.length;
    }

    isEmpty() {
        return  (this.size() == 0) 
    }
}

const que = new Queue();

que.push(10);
que.push(20);
que.push(30);
que.push(40);
que.push(50);

// let deleteItem = que.pop();
// console.log(`deleted item is ${deleteItem}`)

// que.pop()
// que.pop()
// que.pop()
// que.pop()

// console.log(que)
// console.log(que.atTop())
// console.log(que.size())
// console.log(que.isEmpty())
// console.log(que.pop())


while (!que.isEmpty()) {
    console.log(que.atTop())
    que.pop();
}

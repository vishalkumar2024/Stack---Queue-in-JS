// Leetcode 155
class minStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(val) {
        this.stack.push(val)

        if (this.minStack.length == 0) {
            this.minStack.push(val)
        } else {
            this.minStack.push(Math.min(val, this.minStack[this.minStack.length - 1]));
        }
    };

    pop() {
        this.stack.pop();
        this.minStack.pop();
    };

    top() {
        return this.stack[this.stack.length - 1]
    };

    getMin() {
        return this.minStack[this.minStack.length-1]
    };
}

let minObj = new minStack();

minObj.push(-2)
minObj.push(0)
minObj.push(-3)

// minObj.pop()
console.log(minObj.getMin())

minObj.pop();
console.log(minObj.top())
// console.log(minObj.getMin())

console.log(minObj)

// TC=O(1)
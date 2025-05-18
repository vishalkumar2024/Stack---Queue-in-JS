// Leetcode 155
class minStack {
    constructor() {
        this.min = [];
    }

    push(val) {
        this.min.push(val);
    };

    pop() {
        return this.min.pop();
    };

    top() {
        return this.min[this.min.length - 1]
    };

    getMin() {
        let low = this.min[2]
        for (let i = 0; i < this.min.length; i++) { //TC=O(n)
            if (this.min[i] < low) {
                low = this.min[i];
            }
        }
        return low;
    };
}

let minObj=new minStack();

minObj.push(-2)
minObj.push(0)
minObj.push(-3)


console.log(minObj.getMin())

minObj.pop();
console.log(minObj.top())
console.log(minObj.getMin())

console.log(minObj)

// TC=O(n)
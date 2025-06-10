// Given a queue q containing integer elements, your task is to reverse the
// queue.

function reversedQueue(q) {
    let res = [];
    while (q.length !== 0) {
        res.unshift(q.shift());
    }
    return res;
}
let q = [4, 3, 1, 10, 2, 6];
console.log(reversedQueue(q));

// TC=O(n)
// SC=O(n)
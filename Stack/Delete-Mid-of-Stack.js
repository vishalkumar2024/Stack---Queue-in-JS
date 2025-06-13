// Given a stack s, delete the middle element of the stack without using any 
// additional data structure.

// Middle element:- floor((size_of_stack+1)/2) (1-based indexing) from the bottom
//  of the stack.

function deleteMid(s) {
    let v = [];
    while (s.length > 0) {
        v.unshift(s.pop());
    }
    let mid = Math.floor(v.length / 2);
    v.splice(mid, 1);
    return v
}

let s = [50, 40, 30, 20, 10];
console.log(deleteMid(s));

// TC=O(n)
// SC=O(n)
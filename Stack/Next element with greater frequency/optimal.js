// Given an array arr[ ] of n integers, for every element, find the closest 
// element on it's right that has a greater frequency than its own frequency.

function print_next_greater_freq(arr) {
    let freq = new Map();  // SC=O(n)
    let res = [];  //SC=O(n)
    for (let i = 0; i < arr.length; i++) { //TC=O(n)
        if (freq.has(arr[i])) {
            freq.set(arr[i], freq.get(arr[i]) + 1)
        } else {
            freq.set(arr[i], 1);
        }
    }

    let stk = [];  //SC=O(n)
    for (let i = arr.length - 1; i >= 0; i--) {  // TC=O(n)
        while (stk.length > 0 && freq.get(stk[stk.length - 1]) <= freq.get(arr[i])) {
            stk.pop();
        }

        if (stk.length > 0) {
            res[i] = stk[stk.length - 1];
        } else {
            res[i] = -1;
        }

        stk.push(arr[i]);
    }
    return res;

}
let arr = [2, 1, 1, 3, 2, 1]
console.log(print_next_greater_freq(arr));

// TC=O(2n)
// SC=O(3n)
// Given an array arr[] of integers, for each element in the array, find the 
// nearest smaller element on its left. If there is no such smaller element, 
// return -1 for that position.

function leftSmaller(arr) {
    let stk = [];  // SC=O(n)
    let res = [];  // SC=O(n)
    for (let i = 0; i < arr.length; i++) {  //TC=O(n)
        if (stk.length == 0) {
            stk.push(arr[i]);
            res.push(-1);
        } else {
            let j = stk.length - 1;
            while (j >= 0) {
                if (stk[j] < arr[i]) {
                    res.push(stk[j])
                    stk.push(arr[i])
                    break;
                } else {
                    j--;
                    stk.pop();
                }
            }
            if (j == -1) {
                stk.push(arr[i])
                res.push(-1)
            }
        }
    }
    return res;
}
let arr = [1, 5, 0, 3, 4, 5]
console.log(leftSmaller(arr));

// TC=O(n)
// SC=O(2n)

// Given an array, we have to store each element's next greater element to another
// array using monotonic stack, if there is no any next greater store -1 for that element.

function NextGreater(arr) {
    let stk = [];  //SC=O(n)
    let res = [];  //SC=O(n)
    for (let i = arr.length - 1; i >= 0; i--) {  //TC=O(n)
        if (stk.length == 0) {
            res[i] = -1;
            stk.push(arr[i])
        } else {
            while (stk.length !== 0 && arr[i] >= stk[stk.length - 1]) { 
                stk.pop();
            }
            if (stk.length == 0) {
                res[i] = -1;
                stk.push(arr[i])
            } else {
                res[i] = (stk[stk.length - 1]);
                stk.push(arr[i])
            }
        }
    }
    console.log(stk)
    return res;
}
let arr = [4, 12, 5, 3, 1, 2, 5, 3, 1, 2, 4, 6];
console.log(NextGreater(arr));

// TC=O(2n)
// SC=O(2n)
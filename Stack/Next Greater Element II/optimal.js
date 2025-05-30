// Leetcode 503
function nextGreaterElement(nums) {
    let n = nums.length;
    let res = [];
    let stk = [];
    for (let i = 2 * n - 1; i >= 0; i--) {
        while (stk.length !== 0 && stk[stk.length - 1] <= nums[i % n]) {
            stk.pop();
        }
        if (i < n) {
            if (stk.length == 0) {
                res[i] = -1
            } else {
                res[i] = stk[stk.length - 1]
            }
        }
        stk.push(nums[i%n])
    }
    return res;
};

let nums = [2, 10, 12, 1, 11]   //output:  [10, 12, -1, 11, 12]
console.log(nextGreaterElement(nums));


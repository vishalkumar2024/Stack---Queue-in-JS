// Leetcode 503
function nextGreaterElement(nums) {
    let res = [];   //SC=O(n)

    for (let i = 0; i < nums.length; i++) {  //TC=O(n)
        for (let j = i + 1; j < nums.length; j++) {  //TC=O(n)
            if (nums[i] < nums[j]) {
                res.push(nums[j])
                break;
            }
        }

        if ((i + 1) !== res.length) {
            for (let k = 0; k < i; k++) {  //TC=O(n)-  This runs only if the first inner loop fails
                if (nums[i] < nums[k]) {
                    res.push(nums[k])
                    break;
                }
            }
            if ((i + 1) !== res.length) {
                res.push(-1);
            }
        }
    }
    return res;
};

let nums = [2, 10, 12, 1, 11]   //output:  [10, 12, -1, 11, 12]
console.log(nextGreaterElement(nums));

// TC=O(n*n)
// SC=O(n)
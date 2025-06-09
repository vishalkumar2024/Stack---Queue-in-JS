// Leetcode 2104

function subArrayRanges(arr) {

    let sum = 0
    for (let i = 0; i < arr.length; i++) {  // TC=O(n)
        let max = nums[i];
        let min = nums[i];
        for (let j = i; j < arr.length; j++) {  // TC=O(n)
            max = Math.max(max, nums[j]);
            min = Math.min(min, nums[j]);
            sum += (max - min);
        }
    };

    return sum;
}

nums = [4, -2, -3, 4, 1]  // output: 59
console.log(subArrayRanges(nums));

// Tc=O(n*n)
// SC=O(1)
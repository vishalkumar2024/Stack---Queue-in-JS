// Leetcode 907 

function sumSubarrayMins(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {  //TC=O(n)
        let min = arr[i];
        for (let j = i; j < arr.length; j++) {  //TC=O(n)
            min = Math.min(min, arr[j])
            sum += min
        }
    }
    return sum;
};

let arr = [3,1,2,4];
console.log(sumSubarrayMins(arr));


// TC=O(n*n)
// SC=O(1)
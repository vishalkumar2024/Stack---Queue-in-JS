// Leetcode 2104

function subArrayRanges(arr) {
   
    // Function to find the difference b/w max and min value of subArrays
    function maxMin(subArr) {  //TC=O(k)
        let max = subArr[0]
        let min = subArr[0]

        for (let i = 0; i < subArr.length; i++) {  
            if (subArr[i] > max) {
                max = subArr[i]
            }
            if (subArr[i] < min) {
                min = subArr[i]
            }
        }
        return max - min;
    }


    let res = []
    for (let k = 0; k < arr.length; k++) {  //TC=O(n)
        for (let i = arr.length - 1; i >= k; i--) {  //TC=O(n)
            let elem = [];
            for (let j = i; j >= k; j--) {  //TC=O(n)
                elem.push(arr[j]);
            }
            res.push(elem)
        }
    }

    let sum = 0;
    for (let i = 0; i < res.length; i++) {  //TC=O(res.length)
        sum = sum + maxMin(res[i])
    }
    return sum;
};

nums = [4, -2, -3, 4, 1]
console.log(subArrayRanges(nums));

// TC=O(n*n*n)+O(n*k) : k = length of subarray
// SC=O(n)

// Leetcode 907 

function sumSubarrayMins(arr) {
    
    //function to find the lowest number  
    function lowest(arr) {  
        let low = arr[0]
        for (let i = 0; i < arr.length; i++) {   //TC=O(n)
            if (arr[i] < low) {
                low = arr[i];
            }
        }
        return low;
    }

    // Finding all Subarrays 
    let res = []
    for (let k = 0; k < arr.length - 1; k++) {  //TC=O(n)
        for (let i = arr.length - 1; i >= k; i--) {  //TC=O(n)
            let elem = [];
            for (let j = i; j >= k; j--) {  //TC=O(n)
                elem.push(arr[j]);
            }
            res.push(elem)
        }
    }
    let elem = []
    elem.push(arr[arr.length - 1])
    res.push(elem)

    // find the lowest number of each subarrays and add them
    let ans = 0
    for (let i = 0; i < res.length; i++) {  //TC=O(n(n+1)/2)
        ans += lowest(res[i])
    }
    return ans
};

let arr = [3, 1, 2, 4];
console.log(sumSubarrayMins(arr));


// TC=O(n*n*n) + O(n*n*n) ~ O(2(n*n*n))
// SC=O(n*n)
function nextGreaterElement(nums1, nums2) {
    let res = [];   //SC=O(n)
    for (let i = 0; i < nums2.length; i++) {  //TC=O(n2)
        for (let j = 0; j < nums1.length; j++) {   //TC=O(n1)
            if (nums1[i] == nums2[j]) {
                for (let k = j; k < nums2.length; k++) {  //TC=O(n2)
                    if (nums2[k] > nums1[i]) {
                        res.push(nums2[k]);
                        break;
                    }
                }
                res.push(-1)
            }
        }
    }
    return res;
};

let nums1 = [4, 1, 2];
let nums2 = [1, 3, 4, 2];  //[-1,3,-1]

console.log(nextGreaterElement(nums1, nums2));

// TC=O(n*n*n)
// SC=O(n)
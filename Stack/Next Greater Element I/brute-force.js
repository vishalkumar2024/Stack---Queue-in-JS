// Leetcode 496
function nextGreaterElement(nums1, nums2) {
    let res = [];   //SC=O(n)
    for (let i = 0; i < nums1.length; i++) {  //TC=O(n2)
        for (let j = 0; j < nums2.length; j++) {   //TC=O(n1)
            if (nums1[i] == nums2[j]) {
                for (let k = j; k < nums2.length; k++) {  //TC=O(n2)
                    if (nums2[k] > nums1[i]) {
                        res.push(nums2[k]);
                        break;
                    }
                }
                if ((i + 1) !== res.length) res.push(-1)
                break;
            }
        }
    }
    return res;
};

let nums1 = [4, 1, 2];
let nums2 = [1, 2, 3, 4];  //[-1,2,3]

console.log(nextGreaterElement(nums1, nums2));

// TC=O(n*n*n)
// SC=O(n)
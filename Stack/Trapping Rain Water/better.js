// leetcode 42

function trap(height) {
    // Function to find the rightmost tallest building
    function rightMax(height) {  //TC=O(n)
        let n = height.length;
        let prefix = [];
        prefix[n - 1] = (height[n - 1])

        for (let i = n - 2; i >= 0; i--) {
            prefix[i] = (Math.max(prefix[i + 1], height[i]))
        }
        return prefix;
    }
    let rightmax = rightMax(height) //SC=O(n)

    let total = 0;
    let leftMax = height[0]
    for (let i = 0; i < height.length; i++) {  //TC=O(n)

        let diff = (Math.min(leftMax, rightmax[i]) - height[i]);
        if (diff <= 0) {
            diff = 0
        }

        total = total + diff
        leftMax = Math.max(leftMax, height[i])
    }
    return total
};

let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
console.log(trap(height));

// TC=O(2n)
// SC=O(n)
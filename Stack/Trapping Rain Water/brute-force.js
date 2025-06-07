// leetcode 42

function trap(height) {
    // Function to find the rightmost tallest building
    function rightMax(height, idx) {  //TC=O(n)
        let rightmax = height[idx]
        for (let i = idx; i < height.length; i++) {
            rightmax = Math.max(rightmax, height[i])
        }
        return rightmax
    }

    let total = 0;
    let leftMax = height[0]
    for (let i = 0; i < height.length; i++) {  //TC=O(n)

        let diff = (Math.min(leftMax, rightMax(height, i)) - height[i]);
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

// TC=O(n*n)
// SC=O(1)
// Leetcode 735

function asteroidCollision(arr) {
    let stk = [];

    for (let i = 0; i < arr.length; i++) {
        let curr = arr[i];

        if (curr > 0) {
            stk.push(curr);
        } else {
            while (stk.length > 0 && stk[stk.length - 1] > 0) {
                let top = stk[stk.length - 1];
                if (Math.abs(curr) > top) {
                    stk.pop();
                } else if (Math.abs(curr) === top) {
                    stk.pop();
                    curr = 0;
                    break;
                } else {
                    curr = 0;
                    break;
                }
            }

            if (curr !== 0) {
                stk.push(curr);
            }
        }
    }

    return stk;
}
 
let asteroids = [4, 7, 1, 1, 2, -3, -7, 17, 15, -16, -18, -19];
console.log(asteroidCollision(asteroids)); // output: [-18, -19]

// TC=O(2n)
// SC=O(n)
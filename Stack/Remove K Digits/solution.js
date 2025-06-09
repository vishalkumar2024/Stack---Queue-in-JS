// leetcode 402
function removeKdigits(num, k) {
    let i = 0;
    let stk = [];
    while (i < num.length) {  //TC=O(n)
        while (stk[stk.length - 1] && num[i] < stk[stk.length - 1] && k > 0) {
            stk.pop();
            k--;
        }
        stk.push(num[i]);
        i++
    }

    while (k > 0) {   //TC=O(k)
        stk.pop();
        k--;
    }

    while (stk.length > 0 && stk[0] === '0') {  //TC=O(n)
        stk.shift();
    }

    if (stk.length == 0) {
        return "0";
    }

    let res = "";
    for (let j = 0; j < stk.length; j++) {  //TC=O(n)
        res += stk[j]
    }

    return res;
};
let num = "1432219", k = 3
console.log(removeKdigits(num, k))  // output:1219

// TC=O(3n+k)
// SC=O(n)
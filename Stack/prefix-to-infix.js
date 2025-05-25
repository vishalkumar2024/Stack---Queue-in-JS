class Solution {
    prefixToInfix(s) {
        let i = s.length-1;
        let stk = [];
        while (i >= 0) {
            if ((s[i] >= "A" && s[i] <= "Z") || (s[i] >= "a" && s[i] <= "z") || (s[i] >= "A" && s[i] <= "Z")) {
                stk.push(s[i]);
            } else {
                let t1 = stk[stk.length - 1] //Top ele of stack
                stk.pop()
                let t2 = stk[stk.length - 1];  // Top ele of stack after poping Top ele
                stk.pop();

                let mod="("+t1+s[i]+t2+")";
                stk.push(mod)
            }
            i--;
        }
        return stk[stk.length-1]
    }
}

let obj = new Solution();

let s = "*+pq-mn"  // output: ((p + q) * (m - n))
console.log(obj.prefixToInfix(s));

// TC=O(n)
// SC=O(n)
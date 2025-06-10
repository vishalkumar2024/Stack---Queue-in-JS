class Solution {
    PostfixToInfix(s) {
        let i = 0;
        let stk = [];
        while (i < s.length) {
            if ((s[i] >= "A" && s[i] <= "Z") || (s[i] >= "a" && s[i] <= "z") || (s[i] >= "A" && s[i] <= "Z")) {
                stk.push(s[i]);
            } else {
                let t1 = stk.pop()  //Top ele of stack
                let t2 =   stk.pop();  // Top ele of stack after poping Top ele

                let mod="("+t2+s[i]+t1+")";
                stk.push(mod)
            }
            i++;
        }
        return stk[stk.length-1]
    }
}

let obj = new Solution();

let s = "ab-de+f*/"  // output: ((a - b) / ((d + e) * f))
console.log(obj.PostfixToInfix(s));

// TC=O(n)
// SC=O(n)
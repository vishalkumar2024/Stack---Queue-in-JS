class Solution {
    PostfixToPrefix(s) {
        let i = 0;
        let stk = [];
        while (i < s.length) {
            if ((s[i] >= "A" && s[i] <= "Z") || (s[i] >= "a" && s[i] <= "z") || (s[i] >= "A" && s[i] <= "Z")) {
                stk.push(s[i]);
            } else {
                let t1 = stk[stk.length - 1] //Top element of stack
                stk.pop()
                let t2 = stk[stk.length - 1];  // Top element of stack after poping Top element
                stk.pop();

                let mod=s[i]+t2+t1;
                stk.push(mod)
            }
            i++;
        }
        return stk[stk.length-1];
    }
}

let obj = new Solution();

let s ="ab-de+f*/"  //output: /-ab*+def
console.log(obj.PostfixToPrefix(s));

// TC=O(n)
// SC=O(n)
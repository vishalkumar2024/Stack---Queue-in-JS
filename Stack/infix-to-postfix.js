class Solution {
    infixToPostfix(s) {
        let stk = [];
        let ans = [];
        
        //function to determine the priority of characters
        function priority(val) {
            if (val == "^") return 3
            else if (val == "*" || val == "/") return 2;
            else if (val == "+" || val == "-") return 1
            else {
                return -1;
            }
        }

        function top() {
            return stk[stk.length - 1];
        }

        let i = 0;
        while (i < s.length) {
            if ((s[i] >= "A" && s[i] <= "Z") || (s[i] >= "a" && s[i] <= "z") || (s[i] >= "A" && s[i] <= "Z")) {
                ans.push(s[i]);
            } else if (s[i] == "(") {
                stk.push(s[i]);
                console.log("object")
            } else if (s[i] == ")") {
                while (stk[stk.length - 1] !== "(") {
                    ans.push(stk.pop());
                }
                stk.pop()
            }
            else {
                if (stk.length == 0) {
                    stk.push(s[i]);
                } else {
                    if (priority(s[i]) > priority(stk[stk.length - 1])) {
                        stk.push(s[i]);
                    } else {

                        ans.push(stk.pop());
                        stk.push(s[i]);
                    }
                }
            }
            i++;

        }
        while (stk.length > 0) {
            ans.push(stk.pop());
        }
        return ans;
    }
}

let obj = new Solution();

let s = "a+b*(c^d-e)^(f+g*h)-i"
console.log(obj.infixToPostfix(s));


class Solution {
    infixToPostfix(s) {
        // Function to reverse he string
        function Reverse(str) {
            let n = str.length;
            let ReverseString = "";
            for (let i = n - 1; i >= 0; i--) {
                ReverseString += str[i];
            }
            return ReverseString;
        }
        s = Reverse(s);

        //converting "(" -> ")" & ")"-> "("
        s = s.split("");
        for (let i = 0; i < s.length; i++) {
            if (s[i] == "(") {
                s[i] = ")"
            }
            else if (s[i] == ")") {
                s[i] = "("
            }
        }
        s = s.join("");

        let stk = [];
        let ans = "";

        //function to determine the priority of characters
        function priority(val) {
            if (val == "^") return 3
            else if (val == "*" || val == "/") return 2;
            else if (val == "+" || val == "-") return 1
            else {
                return -1;
            }
        }

        let i = 0;
        while (i < s.length) {
            if ((s[i] >= "A" && s[i] <= "Z") || (s[i] >= "a" && s[i] <= "z") || (s[i] >= "A" && s[i] <= "Z")) {
                ans += s[i];
            } else if (s[i] == "(") {
                stk.push(s[i]);
            } else if (s[i] == ")") {
                while (stk.length !== 0 && stk[stk.length - 1] !== "(") {
                    ans += stk[stk.length - 1];
                    stk.pop();
                }
                stk.pop()
            }
            else {
                if (s[i] == '^') {
                    while (stk.length !== 0 && priority(s[i]) <= priority(stk[stk.length - 1])) {
                        ans += stk[stk.length - 1]
                        stk.pop();
                    }
                }
                else {
                    while (stk.length !== 0 && priority(s[i]) < priority(stk[stk.length - 1])) {
                        ans += stk[stk.push - 1]
                        stk.pop();
                    }
                }
                stk.push(s[i]);
            }
            console.log(ans)
            console.log(stk)
            i++;
        }
        while (stk.length > 0) {
            ans += stk[stk.length - 1]
            stk.pop();
        }
        return Reverse(ans);
    }
}

let obj = new Solution();

let s = "(a+b)*c-d+f" // output: "+ - * + a b c d f"
console.log(obj.infixToPostfix(s));


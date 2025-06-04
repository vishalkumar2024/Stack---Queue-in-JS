// You are given a string s. You need to reverse each word in it where the words are
// separated by spaces and return the modified string.

function reverseWords(s) {
    let stk = [];  //SC=O(k)  k=length of word
    let res = "";  //SC=O(n)
    let i = 0;
    while (i < s.length) {  //TC=O(n)
        if (s[i] !== " ") {
            stk.unshift(s[i]);
        } else {
            while (stk.length !== 0) {  //TC=O(k)
                res += stk.shift();
            }
            if (s[i - 1] !== undefined && s[i - 1] !== " " && s[i + 1] !== undefined) {
                res += " ";
            }
        }
        i++;
    }
    while (stk.length !== 0) {
        res += stk.shift();
    }

    return res;
}

let s = "i like this program ";
console.log(reverseWords(s));

// TC=O(n*k)
// SC=O(n+k)
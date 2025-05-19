class Solution {
    reverse(s) {
        let splitS = s.split("");
        let size=splitS.length
        let res = [];

        let i = 0;
        while (i < size) {
            res.push(splitS.pop());
            i++
        }
        return res.join("");
    }
}

let str = new Solution();
let s="GeeksForGeeks"
console.log(str.reverse(s)) //skeeGrofskee


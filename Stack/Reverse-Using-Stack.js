class Solution {
    reverse(s) {
        let splitS = s.split(""); //TC=O(n)
        let size=splitS.length
        let res = [];  //SC=O(n)

        let i = 0;
        while (i < size) {  //TC=O(n)
            res.push(splitS.pop());
            i++
        }
        return res.join(""); //TC=O(n)
    }
}

let str = new Solution();
let s="GeeksForGeeks"
console.log(str.reverse(s)) //skeeGroFskeeG

// TC=O(3n)
// SC=O(n)
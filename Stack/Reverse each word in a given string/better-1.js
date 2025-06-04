// You are given a string s. You need to reverse each word in it where the words are
// separated by spaces and return the modified string.

function reverseWords(s) {
    s += " "
    function reverse(str) {
        let n = str.length;
        let ReverseString = "";   //SC=O(n)
        for (let i = n - 1; i >= 0; i--) {   //TC=O(k)
            ReverseString += str[i];
        }
        return ReverseString;
    }

    let i = 0;
    let sentence = ""
    let word = ""   //SC=O(k)
    while (i < s.length) {  //TC=O(n)
        if (s[i] != " ") {
            word += s[i];
        }
        else {
            // If space is encountered, reverse the word and add to sentence
            if (word.length > 0) {
                sentence += reverse(word) + " ";
                word = "";
            }
        }
        i++;
    }
    return sentence.slice(0, -1)
}

let s = " I like this program";
console.log(reverseWords(s));

// TC=O(n*k)
// SC=O(n+k)
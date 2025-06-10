// You are given an array of strings arr that represents a valid arithmetic expression
// written Postfix Notation. Your task is to evaluate the expression and return an
// integer representing its value.

function evaluate(arr) {
    let i = 0;
    let stk = [];
    while (i < arr.length) {
        if ((arr[i] >= "0" && arr[i] <= "9")) {
            stk.push(arr[i])
        } else {
            let t1 = stk.pop();
            let t2 = stk.pop();

            if (arr[i] == "+") {
                calc = Number(t2) + Number(t1)
            }
            else if (arr[i] == "-") {
                calc = Number(t2) - Number(t1)
            }
            else if (arr[i] == "*") {
                calc = Number(t2) * Number(t1)
            }
            else if (arr[i] == "/") {
                calc = Number(t2) / Number(t1)
            }

            stk.push(calc);
        }
        i++;
    }
    return stk[stk.length - 1];

}
let arr =  ["100", "200", "+", "2", "/", "5", "*", "7", "+"]
console.log(evaluate(arr));

// Tc=O(n)
// SC=O(1)
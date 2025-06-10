// You are given an array of strings arr that represents a valid arithmetic expression
// written Postfix Notation. Your task is to evaluate the expression and return an
// integer representing its value.

function evaluate(arr) {
    let stk = [];

    for (let i = 0; i < arr.length; i++) {

        // If element is a number, push it onto the stk
        if (!isNaN(arr[i])) {
            stk.push(Number(arr[i]));
        } else {
            let val1 = stk.pop();
            let val2 = stk.pop();

            switch (arr[i]) {
                case "+":
                    stk.push(val2 + val1);
                    break;
                case "-":
                    stk.push(val2 - val1);
                    break;
                case "*":
                    stk.push(val2 * val1);
                    break;
                case "/":
                    stk.push(Math.trunc(val2 / val1));
                    break;
            }
        }
    }
    return stk.pop();

}
let arr = ["100", "200", "+", "2", "/", "5", "*", "7", "+"]
console.log(evaluate(arr));

// Tc=O(n)
// SC=O(1)
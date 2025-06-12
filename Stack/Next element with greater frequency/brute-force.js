// Given an array arr[ ] of n integers, for every element, find the closest 
// element on it's right that has a greater frequency than its own frequency.

function print_next_greater_freq(arr) {
    let map = new Map();  // SC=O(n)
    let res = [];  //SC=O(n)
    for (let i = 0; i < arr.length; i++) { //TC=O(n)
        if (map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1)
        } else {
            map.set(arr[i], 1);
        }
    }

    for (let i = 0; i < arr.length; i++) {  //TC=O(n)
        let j = i + 1
        for (; j < arr.length; j++) {  // TC=O(n)
            console.log(map.get(arr[i]), map.get(arr[j]))

            if (map.get(arr[i]) < map.get(arr[j])) {
                res.push(arr[j])
                break;
            }
        }
        if (j == arr.length) res.push(-1);
    }
    return res;

}
let arr = [2, 1, 1, 3, 2, 1]
console.log(print_next_greater_freq(arr));

// TC=O(n*n)+O(n)
// SC=O(2n)
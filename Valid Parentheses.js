function isValid(s) {
    let st = [];

    let i = 0
    while (i < s.length) {
        if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
            st.push(s[i]);
        }
        else if (s[i] == ")") {
            let p = st.pop();
            if (p !== "(") return false;
        }
        else if (s[i] == "}") {
            let p = st.pop();
            if (p !== "{") return false;
        }
        else if (s[i] == "]") {
            let p = st.pop();
            if (p !== "[") return false;
        }
        i++
    }
    if(st.length!==0) return false;
    return true
};
let s = "[(]"
console.log(isValid(s))

// let st = [1, 2,3];

//     let p= st.pop();
//     console.log(p)
//     console.log(st)

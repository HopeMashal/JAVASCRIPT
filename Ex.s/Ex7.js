const decodeString = s => {
    const stack = [];
    for (const char of s) {
        if (char !== "]") {
            stack.push(char);
            continue;
        }
        let currChar = stack.pop();
        let decoded = '';
        while (currChar !== '[') {
            decoded = currChar.concat(decoded);
            currChar = stack.pop();
        }
        let num = '';
        currChar = stack.pop();
        while (!Number.isNaN(Number(currChar))) {
            num = currChar.concat(num);
            currChar = stack.pop();
        }
        stack.push(currChar);
        stack.push(decoded.repeat(Number(num)));
    }
    return stack.join('');
};

console.log(decodeString("3[a]2[bc]"))
console.log(decodeString("3[a2[c]]"))
console.log(decodeString("2[abc]3[cd]ef"))
console.log(decodeString("abc3[cd]xyz"))

//! OR
var decodeString1 = function(s) {
    const stack = [];
    for(let i = 0; i < s.length; i++) {
        if(s[i] !== ']') {
            stack.push(s[i]);
            continue;
        }
        let str = '';
        let cur = stack.pop();
        while(cur !== '[') {
            str = cur + str;
            cur = stack.pop();
        }
        let num = '';
        cur = stack.pop();
        while(!Number.isNaN(Number(cur))) {
            num = cur + num;
            cur = stack.pop();
        }
        stack.push(cur);
        stack.push(str.repeat(Number(num)));
    }
    return stack.join('');
};
console.log(decodeString1("3[a]2[bc]"))
console.log(decodeString1("3[a2[c]]"))
console.log(decodeString1("2[abc]3[cd]ef"))
console.log(decodeString1("abc3[cd]xyz"))
console.log(decodeString1("10[h]"))
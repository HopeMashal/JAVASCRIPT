/* What is wrong with this code?
1. First find the line that contains the problem. Write it down.
    findSmalest(52,66, 2);
2. Which debug method did you use to find the bug?
    Sources (using Browser),  I found the Error
3. Explain the bug in your own words.
    The function name isn't the same
4. Fix the code and submit it all. */

function findSmallest(a, b, c){
    if (a > b){
        if(b > c) return c;
        else if (b < c) return b;
    } else if (a > c) {
        if(b > c) return c;
        else if (b < c) return b;
    } else {
    return a;
    }
    }
const result=findSmallest(52,66, 2);
console.log(result);
const result1=findSmallest(2,66, 52);
console.log(result1);
const result2=findSmallest(66,2, 52);
console.log(result2);
const result3=findSmallest(52,2, 66);
console.log(result3);

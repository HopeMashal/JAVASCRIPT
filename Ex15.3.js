/* What is wrong with this code?
1. First find the line that contains the problem. Write it down.
    I didn't find it
2. Which debug method did you use to find the bug?
3. Explain the bug in your own words.
4. Fix the code and submit it all. */

function getSumOfEven(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]%2==0) sum+=arr[i];
    }
    return sum;
    }
const result=getSumOfEven([1,2,3,4,5,6,7,8,9,10]);
console.log(result);
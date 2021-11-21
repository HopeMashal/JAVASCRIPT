/* What is wrong with this code?
1. First find the line that contains the problem. Write it down.
    for (let i=0; i < arr1.length; i++)
2. Which debug method did you use to find the bug?
    Sources (using Browser),  I found the Error
3. Explain the bug in your own words.
    The function getSum not return anything and [getSum([1,2,3][5,66,23])] without comma between two arrays
4. Fix the code and submit it all. */
function getSum(arr1, arr2){
let sum = 0;
for (let i=0; i < arr1.length; i++){
sum += arr1[i];
}
for (let i=0; i < arr2.length; i++){
sum += arr2[i];
}
return sum;
}
const result=getSum([1,2,3],[5,66,23]);
console.log(result);
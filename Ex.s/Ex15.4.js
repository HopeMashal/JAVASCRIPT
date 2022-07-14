/* What is wrong with this code?
1. First find the line that contains the problem. Write it down.
    I didn't find it
2. Which debug method did you use to find the bug?
3. Explain the bug in your own words.
4. Fix the code and submit it all. */

function calcAverage (arr){
var sum=0 ;
for ( var i = 0 ; i < arr .length; i ++ ){
sum += arr [ i ];
} return sum/arr.length ;
}
const result=calcAverage ([ 85 , 90 , 92 ]);
console.log(result);
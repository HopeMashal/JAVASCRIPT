/* What is wrong with this code?
1. First find the line that contains the problem. Write it down.
    I didn't find it
2. Which debug method did you use to find the bug?
3. Explain the bug in your own words.
4. Fix the code and submit it all. */
function countOccurrences (str, char){
let counter = 0 ;
for ( let i = 0 ; i < str.length; i ++ ){
if ( str.charAt(i) === char ){
counter+=1 ;
}} return counter ;
}
const result=countOccurrences ( "ini mini miny moe" , "n" );
console.log(result)
const result1=countOccurrences ( "ini mini miny moe" , "i" );
console.log(result1)
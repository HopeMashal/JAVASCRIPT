/* Create a function that takes one argument, an array.
Use this array:
to count over all the letters and return an object with the
letter as the key and the letter count as the value.
Expected output:
{ h: 3, e: 4, l: 3, o: 7, g: 3, d: 3, a: 2, y: 2, u: 2, r: 3, w: 1, c:
1, m: 2, t: 1, b: 1, s: 1 }
Note:
that it shouldn’t be case sensitive
const array = ["Hello", "Good Day", "Your Welcome", "hotdog",
"hamburgers"];
Extra:
return the letter with the most occurrences as well */

const array=["Hello","Good Day","Your Welcome","hotdog","hamburgers"];

function Count(arr) {
    const Letters = {};
    let result = ' ';
    let max = -1; 
    for (let team of arr) {
        team = team.replace(/\s/g, '');
        for (let caseletter of team.toLowerCase()) {
            if (Letters[caseletter] == undefined) {
                Letters[caseletter] = 0;
            }
            Letters[caseletter]++;
            if(max<Letters[caseletter]){
                max=Letters[caseletter];
                result=caseletter;
            }
        }
    }
    console.log('The letters and their count:');
    console.log(Letters);
    console.log("Max occurring character is " , result.toUpperCase());
}
Count(array);

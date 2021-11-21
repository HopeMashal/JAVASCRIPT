/* 1. Who can add key and value pairs faster in a for loop?
• Create an empty Object and assign it to a variable.
• Create a start timer for your object to be measured.
• Create a for loop that will iterate a million times. Inside
your for loop on each iteration create a new key, value
pair to your object using the variable I.
• Do the same procedure for a Map object.
• Compare the times.
You may be surprised from the results :)
2. Who can find faster a specific property from itself?
Now that we populated 100000 properties to our
object’s find the following:
• Find out how long time would it take for the Object to
find a specific property from itself.
• Find out how long time would it take for the Map to find
a specific property from itself.
3. Who is faster in adding a single entry?
4. Who is faster in deleting a single entry? */


let obj = {};
const maxCount = 1000000;
console.time("My operation");
for (i=0; i<maxCount; i++){
    obj[i] = "Hope";
}
console.timeEnd("My operation");

let map = new Map();
console.time("My operation two");
for(i=0; i<maxCount; i++){
    map.set(i, "Hope");
}
console.timeEnd("My operation two");

//! Object is faster than Map

const maxCount1 = 100000;
console.time("My operation1");
for (i=0; i<maxCount1; i++){
    obj[i];
}
console.timeEnd("My operation1");

console.time("My operation two1");
for(i=0; i<maxCount1; i++){
    map[i];
}
console.timeEnd("My operation two1");

//! Object is faster than Map


/* The following exercise contains the following subjects:
 map
 forEach
Instructions
Answer the questions below and use the map or the
forEach method :
1. Write a function called doubleValues which accepts an
array of integers and returns a new array with all the
values in the array passed to the function doubled.
2. Write a function called onlyEvenValues which accepts an
array and returns a new array with only the even values in
the array passed to the function.
3. Write a function called showFirstAndLast which accepts
an array as an argument and returns a new array with only
the first and last elements from the function’s argument
array. The returned array should only contain elements that
are strings.
4. Write a function called vowelCount which accepts a
string as an argument. The function should return an object
which has the count of the number of vowel’s that are in
the string. The key should be the vowel and the value
should be the count. e.g. {a:3, o:2,u:4}.
Should not be case sensitive.
5. Write a function capitalize that takes a string as an
argument and will return the whole string capitalized.
6. Write a function called shiftLetters that takes a string as
an argument and return’s an encoded string with each
letter shifted down the alphabet by one.
7. Create a function called swapCase that takes a string as
an argument and returns a string that every other word is
capitalized. (you can use the fifth’s exercise's function to
keep it dry) */


//! 1
function doubleValues(array){
    let newArray=[];
    array.forEach(function(n){
        newArray.push(n*2);
    })
    return newArray;
}
const myarray=[1,2,3,4,5,6,7,8,9,10];
console.log(doubleValues(myarray));


//! 2

function onlyEvenValues (array){
    let newArray=[];
    array.forEach(function(num){
        if (num%2===0) { newArray.push(num);}
    })
    return newArray;
}
console.log(onlyEvenValues(myarray));


//! 3

function showFirstAndLast(array){
    let newArray=[];
    array.forEach(function(value,idx){
        if (idx ===0 || idx === array.length-1){
            if (typeof(value) === 'string') {newArray.push(value);}
        } 
    })
    return newArray;
}
const myarray1=['Hope','Amal','Dina','Mashal'];
const myarray2=['Hope','Amal','Dina','Mashal',0];
const myarray3=[0,'Hope','Amal','Dina','Mashal'];
console.log(showFirstAndLast(myarray1));
console.log(showFirstAndLast(myarray2));
console.log(showFirstAndLast(myarray3));


//! 4

function vowelCount(string) {
    const vowelObject = {
        a: 0,
        e: 0, 
        i: 0, 
        o: 0, 
        u: 0 
    };
    string.toLowerCase().split("").forEach((char) => {
            if (char in vowelObject) {
                vowelObject[char] += 1;
            }
        });
    return vowelObject;
}
const myobject='Hello! My name is Amal or Hope. I am 24 old';
console.log(vowelCount(myobject));


//! 5

function capitalize(string){
    let newArray = string.split("");
    let newString ="";
    newArray.forEach(function(char){
        newString=newString + char.toUpperCase();
    })
    return newString;
}
console.log(capitalize(myobject));


//! 6

function shiftLetters(string){
    let newArray= string.split("");  
    let array = newArray.map(function(char){
        if (char.toUpperCase()!== char.toLowerCase()){ 
            char= char.charCodeAt()+1;
            char=String.fromCharCode(char);
        }
        return char;
    })
    return array.join("");
}
console.log(shiftLetters(myobject));


//! 7
function swapCase (string){
    let newArray = string.split(" ");
    let array = [];
    newArray.forEach(function(word, idx){
        if (idx%2===0)
        array.push(capitalize(word)); 
        else array.push (word);
    })
    return array.join(" ");
}
console.log(swapCase(myobject));


/* 1. Write a a function called ‘isString’ that receives 2
arguments, a string and a callback function.
The function checks that the string is indeed a string.
If the string is a string, pass the string to a callback
function which logs that string to the console.
2. Create a function called ‘firstWordUpperCase’ that
receives 2 arguments, a string and a callback function.
The function will capitalize the first word in the sentence
and pass the string to a callback function which will create
dashes between the words.
3. Call the ‘firstWordUpperCase’ function with a callback of
your choice.
4. Create your own function that will receive from one of its
arguments a callback function. */

function isString(string,callback){
    if(typeof(string)=="string") callback(string);
}
isString('Hello! My name is Hope',console.log);

function firstWordUpperCase(string,callback){
    var nam = string.split(' ');
    let firstword= nam[0].toUpperCase();
    let str='';
    for(let i=1;i<nam.length;i++){
        str=str+' '+nam[i];
    }
    let sentance=firstword+str;
    return callback(sentance);
}
function dashe(str) {
    return str.replace(/ /g, "-");
}
console.log(firstWordUpperCase('Hello! My name is Hope',dashe));

firstWordUpperCase('Hello! My name is Hope',console.log);

function Myfunction(string,callback){
    let nam=string.split(' ');
    let newnam=nam.join('*$*');
    callback(newnam);
}
Myfunction('Hello! My name is Hope',console.log);


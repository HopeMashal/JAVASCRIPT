/* 1. Create a function that receives 1 argument, an object and returns a new
object with the properties and values swapped. */

const object = {
    firstname: 'Hope',
    lastname: 'Mashal',
    yearofbirth: 1997,
    major: 'Mechatronics Engineering'
}

function newobject(obj) {
    const myobject = {};
    for(let i in obj) {
        myobject[obj[i]] = i;
    }
    return myobject;
}
console.log(newobject(object))
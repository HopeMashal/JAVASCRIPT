/* 1. Fill an array with 100 of a same object using array fill
method.
2. Create an array with numbers ranging from 1-100 using
the Array.from method.
3. Convert only values of an object into one array.
4. Convert an array into one object.
5. Find out if an array is an array.
6. Copy an array.
• Create a copy of an array that won’t effect the original
array if modified.
• Create a copy of an array that will effect the original
array if modified. */

const MyArray1=Array(100).fill(1);
console.log(MyArray1);

const MyArray2=Array.from({length: 100}, (v, i) => i+1);
console.log(MyArray2);

var obj = {a:'Japan',b:'Korea',c:'USA',d:'Lebanon',e:'UK',f:'China'}
console.log(Object.values(obj));

const myarray = [
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
    [4, 'four'],
    [5, 'five'],
    [6, 'six']
  ];
console.log(Object.fromEntries(myarray));
console.log(Array.isArray(Object.values(obj)));

let myarr1=[20,200,2000,20000,200000];
let myarr2=[...myarr1];
let myarr3=[].concat(myarr1);
let myarr4= myarr1.slice();
myarr2.push(4);
myarr3.push(44);
myarr4.push(444);
console.log(myarr1,myarr2,myarr3,myarr4);

let myarray1=[10,100,1000,10000,100000];
let myarray2=myarray1.copyWithin(0, 3, 4);
console.log(myarray1,myarray2);










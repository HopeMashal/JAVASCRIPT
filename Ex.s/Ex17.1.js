//!Block 1
var b = 1;
function someFunction(number) {
function otherFunction(input) {
return b;
}
b = 5;
return otherFunction;
}
var firstResult = someFunction(9);
var result = firstResult(2);
//* The output of result=5, because otherFunction return b then the value of b is changed

//!Block 2
var a = 1;
function b2() {
a = 10;
return;
function a() { }
}
b2();
console.log(a);
//* The output is : 1, because the function return nothing so the value of a is the first value

//!Block 3
let i;
for (i = 0; i < 3; i++) {
const log = () => {
console.log(i);
}
setTimeout(log, 100);
}
//* The output is:(I think) 0 \n 1 \n 2, but actually is  3 \n 3 \n 3 =>That's because the setTimeout is async
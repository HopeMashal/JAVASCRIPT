//!Block 1
var x = 10;
console.log(x); // print 10
if (true) {
var x = 20;
console.log(x); //print 20
}
console.log(x); //print 20

 
//!Block 2
var x = 10;
console.log(x); //print 10
if (true) {
(function() {
var x = 20;
console.log(x); //print 20
})();
}
console.log(x); //print 10



//!Block 3
var x = 10;
console.log(x); //print 10
function test()
{
var x = 20;
console.log(x); //print 20
if (x > 10) {
let x = 30;
console.log(x); //print 30
}
console.log(x); //print 20
}
test();
console.log(x); //print 10 



//!Block 4
var x;
x = 10;
function test()
{
var x;
if (x > 20) {
x = 50;
}
console.log(x); //print undefined, because in the function [var x] is not defined yet, if we remove it => print 10
}
test();



//!Block 5
function test()
{
var x, y;
if (false) {
x = 50;
}
console.log(x); //print undefined
console.log(y); //print undefined
y = 100;
console.log(y); //print 100
}
test();




//!Block 6
function test()
{
foo();
bar(); // error, function not defined
// Function defiened
// using function declaration
function foo()
{
console.log('foo'); //print foo
}
// Function defined
// using function expression
var bar = function() {
console.log('bar'); 
}
}
test(); 

//* Solution:
/* function test()
{
foo();
function foo()
{
console.log('foo'); //print foo
}
var bar = function() {
console.log('bar');  //print bar
}
bar();
}
test();  */
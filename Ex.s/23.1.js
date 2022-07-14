/* Question 1:
In your own words what will this point to and why?(Note
this is the global scope)
console.log(this); */
//! this is refering to window, it referces to the parent.*/

/* Question 2:
a. In your own words what will this point to and why.
b. How can you fix this code.
const myObj = {
name: "Timmy",
greet: () => {
console.log(`Hello ${this.name}`);
},
}; myObj.greet(); */
//! this.name is undefined because it referce to window, and window doesn't have a name variable */
const myObj = {
  name: "Timmy",
  greet(){
  console.log(`Hello ${this.name}`);
  },
  }; myObj.greet();


/* Question 3:
In your own words what will this point to and why?
const myFuncDec = function () {
console.log(this);
}; */
//! this refere to the window - the global scope, myFunDec isn't in any other scope.  */

/* Question 4:
In your own words what will this point to and why?
const myFuncArrow = () => {
console.log(this);
}; myFuncArrow(); */
//! this refere to the window - the global scope, myFuncArrow isn't in any other scope.  */

/* Question 5:
a. In your own words what will this point to and why.
b. How can you fix this code.
document.querySelector(".element").addEventListener(() => {
console.log(this);
}); */
//! this refere to the window - the global scope */
document.querySelector(".element").addEventListener('click',() => {
  let that = document.querySelector(".element");
  console.log(that);
});

//!Block 1
function funcA() {
console.log(a);
console.log(foo());
var a = 1;
function foo() {
return 2;
}
}
funcA();
//* The output is: undefined \n 2
//* undefined because the value of variable a is defined after printing it, so we must put [console.log(a);] after [var a = 1;]
//* Solution:
/*  function funcA() {
    var a = 1;
    console.log(a);
    console.log(foo());
    function foo() {
    return 2;
    }
    }
    funcA(); */

//!Block 2
var fullName = 'John Doe';
var obj = {
fullName: 'Colin Ihrig',
prop: {
fullName: 'Aurelio De Rosa',
getFullName: function () {
return this.fullName;
}
}
};
console.log(obj.prop.getFullName());
var test = obj.prop.getFullName;
console.log(test());
//* The output is: Aurelio De Rosa \n undefined
//* The solution for undefined is: [var test = obj.prop.getFullName();] then [console.log(test);]
//* Solution:
/* var fullName = 'John Doe';
var obj = {
fullName: 'Colin Ihrig',
prop: {
fullName: 'Aurelio De Rosa',
getFullName: function () {
return this.fullName;
}
}
};
console.log(obj.prop.getFullName());
var test = obj.prop.getFullName();
console.log(test); */

//!Block 3
function funcB() {
    let a = b = 0;
    a++;
    return a;
    }
    funcB();
    console.log(typeof a);
    console.log(typeof b);
//* The output is: undefined \n number

//!Block 4
function funcC() {
    console.log("1");
    }
    funcC();
    function funcC() {
    console.log("2");
    }
    funcC();
//* The output is: 2 \n 2
//* These two functions have the same name, so the result is for the second function, we need to change the function name for one of them 
//* Solution:
/*  function funcC() {
    console.log("1");
    }
    funcC();
    function funcC1() {
    console.log("2");
    }
    funcC1(); */

//!Block 5
function funcD1() {
    d = 1;
    }
    funcD1();
    console.log(d);
    function funcD2() {
    var e = 1;
    }
    funcD2();
    console.log(e);
//* The output is: 1 \n NOT DEFINED
//* The solution for NOT DEFINED is: [function funcD2() {e = 1;}]
//* Solution:
/* function funcD1() {
    d = 1;
    }
    funcD1();
    console.log(d);
    function funcD2() {
    e = 1;
    }
    funcD2();
    console.log(e); */


//!Block 6
function funcE() {
    console.log("Value of f in local scope: ", f);
    }
    console.log("Value of f in global scope: ", f);
    var f = 1;
    funcE();
//* The output is: Value of f in global scope:  undefined \n Value of f in local scope:  1
//* undefined because the value of variable f is defined after printing it, so we must put [console.log("Value of f in global scope: ", f);] after [var f = 1;]
//* Solution:
/* function funcE() {
    console.log("Value of f in local scope: ", f);
    }
    var f = 1;
    console.log("Value of f in global scope: ", f);
    funcE(); */
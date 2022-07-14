const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];

//! Alphabet
console.log('Alphabet');
const ascending1= foods.slice().sort();
console.log(ascending1);
const decending1= foods.slice().sort(function (a, b) {
    if (a > b) {
        return -1;
    }
    if (b > a) {
        return 1;
    }
    return 0;
});
console.log(decending1);

//! Word Length & Alphabet
console.log('Word Length & Alphabet');
const ascending2= foods.slice().sort().sort((a,b)=>a.length-b.length);
console.log(ascending2);
const decending2= foods.slice().sort(function (a, b) {
    if (a > b) {
        return -1;
    }
    if (b > a) {
        return 1;
    }
    return 0;
}).sort((a,b)=>b.length-a.length);
console.log(decending2);

const foodsWithUpperCase = [
    "falafel",
    "Sabich",
    "hummus",
    "pizza with extra pineapple",
    ];

//! Alphabet
console.log('Alphabet');
const ascending5= foodsWithUpperCase.slice().sort();
console.log(ascending5);
const decending5= foodsWithUpperCase.slice().sort(function (a, b) {
    if (a > b) {
        return -1;
    }
    if (b > a) {
        return 1;
    }
    return 0;
});
console.log(decending5);

//! Word Length & Alphabet
console.log('Word Length & Alphabet');
const ascending3= foodsWithUpperCase.slice().sort().sort((a,b)=>a.length-b.length);
console.log(ascending3);
const decending3= foodsWithUpperCase.slice().sort(function (a, b) {
    if (a > b) {
        return -1;
    }
    if (b > a) {
        return 1;
    }
    return 0;
}).sort((a,b)=>b.length-a.length);
console.log(decending3);

const words = ["apple", "supercalifragilisticexpialidocious",
"hi", "zoo"];

//! Word Length
console.log('Word Length');
const decending4=words.slice().sort((a,b)=>b.length-a.length);
console.log(decending4);
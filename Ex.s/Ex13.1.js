const numbers = [1, -5, 666, 2, 400, 11];

const ascending=numbers.slice().sort((a,b)=>a-b);
console.log(ascending);
const decending=numbers.slice().sort((a,b)=>b-a);
console.log(decending);

const Numbers=[20,25,30,35,40,45,50];

const max=Numbers.reduce((max,currVal)=>
(Math.max(max,currVal)));
console.log(`The maximum number is: ${max}`);

const sumofeven=Numbers.reduce((num,currVal)=>
{
    let sum=0;
    if (num%2==0) {
        sum+=num;}
    if(currVal%2==0){
        sum+=currVal;}
    return sum;
})
console.log(`The sum of even numbers is: ${sumofeven}`);

function Average(nums) {
    return nums.reduce((a, b) => (a + b)) / nums.length;
}
const average=Average(Numbers);
console.log(`The average is: ${average}`);
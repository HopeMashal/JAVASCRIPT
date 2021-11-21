/* Create array with numbers :
const arr = [1,7,3,0,-5,7,3,9];
1. Print with for loop all the number.
2. Create function “arrayLength” that return the array length (don’t use arr.length)
3. Create function “arraySum” , the function return the sum of all elements in array.
4. Create function “arrayMulti” , the function return the multiplication of all the
elements in array. */

const arr=[1,7,3,0,-5,7,3,9];
for(i=0;i<arr.length;i++){
    console.log(arr[i]);
}
function arrayLength(){
    let counter=0;
    for(i=0;i<arr.length;i++){
        counter++;
    }
    return counter;
}
console.log('The array length is: '+ arrayLength());

function arraySum(){
    let sum=0;
    for(i=0;i<arr.length;i++){
        sum += arr[i];
    }
    return sum;
}
console.log('The sum of all elements in array is: '+ arraySum());

function arrayMulti(){
    let mult=0;
    for(i=0;i<arr.length;i++){
        mult *= arr[i];
    }
    return mult;
}
console.log('The multiplication of all elements in array is: '+ arrayMulti());


/* Write down 3 different functions:
1. for
2. Recursion with if = 0
3. Without exit statement */

function DownCount(number){
    for(i=number;i>0;i--){
        console.log(i);
    }
}
console.log('1. for')
DownCount(6);

function downcount(number){
    if(number==0) return;
    console.log(number);
    downcount(number-1);
}
console.log('2. Recursion with if = 0')
downcount(6);

function downCount(number){
    for(i=number;i>0;i--){
        i;
    }
}
console.log('3. Without exit statement')
downCount(6);


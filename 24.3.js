/* 1. Build your own filter method with the help of prototypes
2. Build your own find method with the help of prototypes 
!Extra
3. Build your own reduce method with the help of prototypes */

let myarray = ['Hello!','My','Name','is','Hope','or','Amal','Mashal'];

Array.prototype.myFilter = function(string){
  let resultarray=[];
  for(let i=0; i< this.length; i++){
      if (this[i].includes(string)) resultarray.push(this[i]);
    }
  return (`The elements contain "${string}" in the array are: [${resultarray}]`);
}
console.log(myarray.myFilter('e'));
console.log(myarray.myFilter('r'));

Array.prototype.myFind = function(string){
    for(let i=0; i< this.length; i++){
        if (this[i]=== string) return (`True, the array contains ${string}`);
    }
return (`False, the array don't contain ${string}`);
}
console.log(myarray.myFind("Hope"));
console.log(myarray.myFind("hi"));

Array.prototype.myReduce = function(){
  let currentValue = this[0];
    for(let i=1; i<this.length; i++){
      currentValue = currentValue +' '+ this[i];
    }
    return currentValue;
}
console.log(myarray.myReduce());


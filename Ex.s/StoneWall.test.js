function solution(H) {
    
    let stack=[H[0]];
  let count=0;
  for(let i=1;i<H.length;i++){
    if(H[i]<stack[stack.length-1]){
     count=count+1;
     stack.pop();
     while(stack.length && stack[stack.length-1]>=H[i]){
        if(stack[stack.length-1]>H[i]){
          count=count+1;
          stack.pop();
        }else if(stack[stack.length-1]==H[i]){
          stack.pop();
        }
      }
    stack.push(H[i]);
    
    }else if(H[i]>stack[stack.length-1]){
    stack.push(H[i]);
   }

  }
 return count+stack.length;
}
console.log(solution([8, 8, 5, 7, 9, 8, 7, 4, 8]))

//! OR
function Solution(H) {
    var blocks=1
    var previousWall=[H[0]]
    var previousHeight=H[0];
    for(var i=1;i<H.length;i++){
        var currentHeight=H[i];
        var heightDiff=currentHeight-previousHeight;
        if(heightDiff>0){ //current wall heighter
            blocks++
            previousHeight+=heightDiff
            previousWall.push(heightDiff)
        }else{
            while(previousHeight>currentHeight){
            var lastBlock=previousWall.pop()
            previousHeight-=lastBlock;
            }
            heightDiff=currentHeight-previousHeight;
            if(heightDiff>0){ //current wall is highter
            blocks++
            previousWall.push(heightDiff)
            previousHeight+=heightDiff
            }
        }
    }
    return blocks
}
console.log(Solution([8, 8, 5, 7, 9, 8, 7, 4, 8]))
/* John and Mike both play basketball in different teams. In the latest 3 games,
John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94
and 123 points.
1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the
winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into
account there might be a draw (the same average score)
4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105
points. Like before, log the average winner to the console.
5. Like before, change the scores to generate different winners, keeping in
mind there might be draws. */

const John =/* [89,120,103] */ /* [97,134,105] */[100,134,105];
const Mike=/* [116,94,123] */ /* [97,134,105] */[120,134,105];
function JohnAverage() {
    var sum = 0;
    for(var i = 0; i < John.length;i++){
        sum += John[i];
    }
    return sum / John.length;
}
console.log('The average score for John\'s team '+ JohnAverage());
function MikeAverage() {
    var sum = 0;
    for(var i = 0; i < Mike.length;i++){
        sum += Mike[i];
    }
    return sum / Mike.length;
}
console.log('The average score for Mike\'s team '+ MikeAverage());

if(JohnAverage()>MikeAverage()){console.log('The winner group is John\'s team, the average is ' + JohnAverage());}
else if(JohnAverage()<MikeAverage()){console.log('The winner group is Mike\'s team, the average is ' + MikeAverage());}
else{console.log('The teams have the same average');}


const Mary=[97,134,105];
function MaryAverage() {
    var sum = 0;
    for(var i = 0; i < Mary.length;i++){
        sum += Mary[i];
    }
    return sum / Mary.length;
}
console.log('The average score for Mary\'s team '+ MaryAverage());
if((JohnAverage()>MikeAverage())&&(JohnAverage()>MaryAverage())){console.log('The winner group is John\'s team, the average is ' + JohnAverage());}
else if((JohnAverage()<MikeAverage())&&(MikeAverage()>MaryAverage())){console.log('The winner group is Mike\'s team, the average is ' + MikeAverage());}
else if((JohnAverage()<MaryAverage())&&(MikeAverage()<MaryAverage())){console.log('The winner group is Mary\'s team, the average is ' + MaryAverage());}
else{console.log('The teams have the same average');}
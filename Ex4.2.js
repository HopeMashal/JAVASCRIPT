/* Create a function that takes 1 argument, a number score.
Returns either “A”, ”B”, “C”, “D”, “F”.
score of:
0-64 is a “F”
65-69 is a “D”
70-79 is a “C”
80-89 is a “B”
90-100 is an “A*/

function Fun(a){
    if((a>=0)&&(a<=64)) return "F";
    else if((a>=65)&&(a<=69)) return "D";
    else if((a>=70)&&(a<=79)) return "C";
    else if((a>=80)&&(a<=89)) return "B";
    else if((a>=90)&&(a<=100)) return "A";
}
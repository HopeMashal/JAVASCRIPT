/* 1. The world population is 7900 million people. Create a
function declaration called 'percentageOfWorld1' which
receives a 'population' value, and returns the percentage of
the world population that the given population represents.
For example, China has 1441 million people, so it's about
18.2% of the world population.
2. To calculate the percentage, divide the given 'population'
value by 7900 and then multiply by 100
3. Call 'percentageOfWorld1' for 3 populations of countries
of your choice, store the results into variables, and log
them to the console
4. Create a function expression which does the exact same
thing, called 'percentageOfWorld2', and also call it with 3
country populations (can be the same populations) */

function percentageOfWorld1(population){
    let WorldPopulation=7900;
    let ThisPopulation=population;
    let result=(ThisPopulation/WorldPopulation)*100;
    return (result + "% of the world population");
}
const p1=percentageOfWorld1(1441);
const p2=percentageOfWorld1(332);
const p3=percentageOfWorld1(1339);
console.log(p1);
console.log(p2);
console.log(p3);


const percentageOfWorld1= population => ( population/7900)*100;
const p4=percentageOfWorld1(1441);
const p5=percentageOfWorld1(332);
const p6=percentageOfWorld1(1339);
console.log(p4);
console.log(p5);
console.log(p6);

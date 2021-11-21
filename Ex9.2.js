/* 1. Recreate the challenge from the exercise 6.4-
looping_with_arrays ,but this time using a while loop.
2. Reflect on what solution you like better for this task: the
for loop or the while loop? */
//! I like for loop for this task

const populations = [10, 1441, 332, 83];

const percentageOfWorld1 = (population) => {
  return (population / 7900) * 100;
};
const populationPercentages = (arr) => {
  const percentages = [];
  let i=0;
  while ( i < arr.length) {
    const percent = percentageOfWorld1(arr[i]);
    percentages.push(percent);
    i++;
  }
  return percentages;
};
console.log(populationPercentages(populations));
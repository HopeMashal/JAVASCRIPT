/* 1. Write a function called 'describeCountry' which takes
three parameters:
'country', 'population' and 'capitalCity'. Based on this input,
the
function returns a string with this format: 'Finland has 6
million people and its capital city is Helsinki' */
function describeCountry(country,population,capitalCity) {
    return(`${country} has ${population} people and its capital city is ${capitalCity}`);   
}


/* 2. Call this function 3 times, with input data for 3 different
countries. Store the returned values in 3 different variables,
and log them to the console. */
const p1= describeCountry('Finland','6 million','Helsinki');
const p2= describeCountry('Japan','12 million','Tokyo');
const p3= describeCountry('Lebanon','8 million','Beirut');
console.log(p1);
console.log(p2);
console.log(p3);




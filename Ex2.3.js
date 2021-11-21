/* Write a function that calculates the circle area by a given radius as an
argument. Print the area as it is calculated and then print it rounded to two
decimal places. */

function circlearea(r) {
    a= Math.PI*(r**2);
    return +(Math.round(a + "e+2")  + "e-2");
}




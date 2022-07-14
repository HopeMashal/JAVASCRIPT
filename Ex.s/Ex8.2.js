/* 1. Create an object called ‘mycountry’ for a country of your choice,
containing properties ‘country’, ‘capital’, ‘language’, ‘population’
and ‘neighbours’ (an array)
2. Add a method to the object called 'describe' to the 'myCountry'
object. With the help of the ‘this’ keyword, this method will log a
string like this to the console:
‘Finland has 6 million people, their mother tongue is Finnish, they
have 3 neighbouring countries and a capital called Helsinki’.
3. Call the ‘descrbie method’.
4. Add a method called 'checkIsland' to the 'myCountry' object.
This method will set a new property on the object, called 'isIsland'.
'isIsland' will be true if there are no neighbouring countries, and
false if there are. Use the ternary operator to set the property. */

const mycountry={
    country : 'Japan',
    capital : 'Tokyo',
    language : 'Japanese',
    population : 20,
    neighbours : ['Korea','China','Russia'],
    describe(){
        return`${this.country} has ${this.population} million people, their mother tongue is ${this.language}, they have ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`;
    },
    isIsland : function checkIsland(){
        return this.neighbours.length==0?true:false;
    }
}

const countrydescribe = mycountry.describe();
console.log(countrydescribe);

const countryisisland = mycountry.isIsland();
console.log(countryisisland); 

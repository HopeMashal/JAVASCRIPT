/* You are getting an array of objects of the recent video releases from
your database.(array below). We only care about the portion of data
we are getting.
1.Create a function that will loop over the array with the forEach
method. Return from the function an array of objects. Each object
will contain the id and name of the specific movie.
2. Create another function that will do the same thing expect now
use the map method. */

const newReleases = [
    {
    id: 70111470,
    title: "Die Hard",
    boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: [],
    },
    {
    id: 654356453,
    title: "Bad Boys",
    boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
    },
    {
    id: 65432445,
    title: "The Chamber",
    boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: [],
    },
    {
    id: 675465,
    title: "Fracture",
    boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
    },
    ];

//!FOREACH
const resultsforeach=[];
const foreach = newReleases.forEach(function (a){
    let x=a.id;
    let y=a.title;
    resultsforeach.push({ [x]:y })
})
console.log(resultsforeach);

const resultsforeach1=[];
const foreach1 = newReleases.forEach(function (a){
    let x=a.id;
    let y=a.title;
    resultsforeach1.push({ id : x , title : y })
})
console.log(resultsforeach1);

//! MAP
const map = newReleases.map(function (b){
    let z=b.id;
    let w=b.title;
    return { [z] : w }
})
console.log(map);

const map1 = newReleases.map(function (b){
    let z=b.id;
    let w=b.title;
    return { id : z , title : w }
})
console.log(map1);
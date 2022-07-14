/* 1. Create 3 separate objects that their key is called name
and their value is a string. Store them in separate
variables.
2. Create a new Map object that sets each object as a key
and assign an id number as the value.
3. Iterate over the Map object with the for..of loop.
- log the name and id */

let object1 = { name: "Hope" };
let object2 = { name: "Amal" };
let object3 = { name: "Dina" };

let map = new Map();
map.set(object1, 1);
map.set(object2, 2);
map.set(object3, 3);

for (const i of map) {
    console.log(i[0]['name'], i[1]);
}
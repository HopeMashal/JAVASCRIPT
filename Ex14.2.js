const hobbies = [
    {
        name: "Hope",
        hobby: "Drawing",
        age: 24,
    },
    {
        name: "Amal",
        hobby: "Swimming",
        age: 22,
    },
    {
        name: "Dina",
        hobby: "Reading",
        age: 23,
    },
];

function extractOnlyValue(array, key) {
    return array.reduce((newArray, value) => {
        newArray.push(value[key]);
        return newArray;
    }, []);
}

function countOnlyVowels(string) {
    return string.split("").reduce((prev, curr) => {
        let cur=curr.toLowerCase();
        if (["a", "e", "i", "o", "u"].includes(cur)) {
            cur in prev ? prev[cur]++ : (prev[cur] = 1);
        }
        return prev;
    }, {});
}

function addKeyAndValue(array, key, value) {
    return array.reduce((newArray, object) => {
        object[key] = value;
        return newArray;
    }, array)
}

console.log("Extract Only Values: ", extractOnlyValue(hobbies, "hobby"));
console.log("Count Only Vowels: ", countOnlyVowels("Hello! My name is Hope or Amal. I am 24 old ")); 
console.log("Add Key And Value: ", addKeyAndValue(hobbies, "like", "Galaxy")); 

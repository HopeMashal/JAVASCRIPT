const wonderWoman = {
  name: "Diana Prince",
};
const batman = {
  name: "Bruce Wayne",
};
const superHeroes = [wonderWoman, batman];

function printName() {
  console.log(`my name is ${this.name}`);
}

function printHeroes(heroesname, printFunction) {
  heroesname.forEach((heroname) => {
    printFunction.call(heroname);
  });
}

printHeroes(superHeroes, printName);
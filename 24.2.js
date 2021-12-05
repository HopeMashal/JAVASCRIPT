function Pokemon(pokemonName, pokemonType, pokemonAttackList){
  this.name = pokemonName;
  this.type = pokemonType;
  this.attackList = pokemonAttackList;
}

const Charizard = new Pokemon("Charizard", "Flying", ["Fire", "Ghost"]);
const Zapdos = new Pokemon("Zapdos", "Figthing", ["Electric", "Grass"]);
const Mantine = new Pokemon("Mantine", "Flying", ["Water", "Steel"]);
  
Pokemon.prototype.callPokemon = function(){
  console.log(`I choose you, ${this.name}`);
}
Charizard.callPokemon();
Zapdos.callPokemon();
Mantine.callPokemon();

Pokemon.prototype.attack = function(){
  console.log(`${this.name} used ${this.attackList[0]} and ${this.attackList[1]}`);
}
Charizard.attack();
Zapdos.attack();
Mantine.attack();
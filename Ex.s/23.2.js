const mystorm = {
  SuperPower: ["flying","controls the weather"],
  superPower(){
    const {SuperPower}=this;
    const idx=Math.floor(Math.random()*SuperPower.length);
    return SuperPower[idx];
  },
  printSuperPower() {
  console.log("my super power is " + this.superPower());
 }
}
mystorm.printSuperPower();

const storm = {
  SuperPower: ["flying","controls the weather"],
  superPower(){
    const {SuperPower}=this;
    const idx=Math.floor(Math.random()*SuperPower.length);
    return SuperPower[idx];
  },
  printSuperPower: printSuperPower
}
function printSuperPower() {
  console.log("my super power is " + this.superPower());
}
storm.printSuperPower();
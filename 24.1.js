function Square(a, b, c, d){
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
}

let mysq1 = new Square(1,1,1,1);
let mysq2 = new Square(2,1,1,1);

Square.prototype.isSquare = function (){
  return (this.a == this.b && this.b==this.c && this.c==this.d)? true:false;
}

console.log(mysq1.isSquare());
console.log(mysq2.isSquare());
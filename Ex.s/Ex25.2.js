let creatObject =  {
  name : "Hope",
  lastname :"Mashal",
   Fun1 : function (){
      console.log(`My name is ${this.name} ${this.lastname}`);
   },
   Fun2 : function (){
     return setTimeout(this.Fun1.bind(this), 1000);
   }
 }

creatObject.Fun1();
creatObject.Fun2();
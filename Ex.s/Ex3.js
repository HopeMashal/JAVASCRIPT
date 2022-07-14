function F(n) {
    if((n>=0)&&(n<=30)){
        if (n<=1) return n;
        return (F(n-1) + F(n-2));
    }
}
console.log(F(2));
console.log(F(3));
console.log(F(4));


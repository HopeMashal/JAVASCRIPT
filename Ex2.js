function reverseString(str) {
    if((str.length>=1)&&(str.length<=100)){
        var splitString = str.split("");
        let strreverse=splitString.reverse().join('');
        return console.log(strreverse);
    }
}
reverseString("hello");

function ReverseString(str) {
    if((str.length>=1)&&(str.length<=100)){
        let strreverse=str.reverse();
        return console.log(strreverse);
    }
}
ReverseString(['h','e','l','l','o']);

function reversestr(str){
    if((str.length>=1)&&(str.length<=100)){
        let newstr=[];
        for(i=str.length-1;i>=0;i--){
            newstr.push(str[i]);
        }
        return console.log(newstr);
    }
}
reversestr(['h','e','l','l','o']);
reversestr('Hello');


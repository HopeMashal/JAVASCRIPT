
function CurrentDate(){
    let str=new Date();
    months=new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
    weekday= new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
    str=`Today is ${weekday[str.getDay()]} the ${str.getDate()} of ${months[str.getMonth()]}, ${str.getFullYear()}`;
    return str.toString();
}
console.log(data=CurrentDate());
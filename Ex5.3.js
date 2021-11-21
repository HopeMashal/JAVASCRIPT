/* Create a simple password validation function that takes a
password string as an argument.
If the passwords length is more than 7 characters return
“Strong”. If it is less than 7 characters long return “Weak.
1) Create a function that uses a if/else conditional
expression.
2. Create a function that uses a ternary conditional
expression.
3. Create a function that uses a && logical operator.
4. Create an “advanced” password validation function that
takes a password string as an argument.
If the password length is more than 7 characters long and
has at least one capital letter return “Very Strong”.
If the password length in only 7 characters long return
“Strong”.
If the password length is less than 7 characters long return
“Weak”
Use only a ternary conditional expression. */
function ThePassword1(password){
    if (password.length >= 7) console.log('Strong');
    else console.log('Weak');
}
ThePassword1('palklkssword');
ThePassword1('psword');

function ThePassword(password){
    password.length >= 7 ? console.log('Strong') : console.log('Weak');
}
ThePassword('palklkssword');
ThePassword('psword');

function ThePassword2(password){
    if(password.length >= 7 && password) console.log('Strong');
    else console.log('Weak');
}
ThePassword2('palklkssword');
ThePassword2('psword');

function AdvancedPassword(password){
    const regex = /[A-Z]/;
    const doesItHaveLetter = regex.test(password);
    (password.length >= 7 && doesItHaveLetter==1) ? console.log('Very Strong'):  
    password.length >= 7 ? console.log('Strong') : console.log('Weak');
}
AdvancedPassword('palklkssword');
AdvancedPassword('pPLAalklkssword');
AdvancedPassword('pord');
AdvancedPassword('Pkjkjkpord12');
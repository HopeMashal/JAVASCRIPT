/* Create a function that receives one argument, a string color.
Create a switch statement that:
1. If the color is yellow, pink or orange return from the function “light color”.
2. If the color is blue, purple, brown return from the function “dark color”.
3. If the color is none of the above return “Unknown color”.
Note:
It shouldn’t be case sensitive */
function TheColor(color){
    let Colors=color.toLowerCase();
    switch(Colors){
        case 'yellow' : console.log(`${color} is light color`);break;
        case 'pink' : console.log(`${color} is light color`);break;
        case 'orange': console.log(`${color} is light color`);break;
        case 'blue' : console.log(`${color} is dark color`);break;
        case 'purple' : console.log(`${color} is dark color`);break;
        case 'brown' : console.log(`${color} is dark color`);break;
        default : console.log(`${color} is Unknown color`); break;
    }
}
TheColor('yellow');
TheColor('Pink');
TheColor('blue');
TheColor('Brown');
TheColor('black');
TheColor('Red');


function TheColor1(color){
    let Colors=color.toLowerCase();
    switch(Colors){
        case 'yellow' : case 'pink' :  case 'orange': console.log(`${color} is light color`);break;
        case 'blue' : case 'purple' : case 'brown' : console.log(`${color} is dark color`);break;
        default : console.log(`${color} is Unknown color`); break;
    }
}
TheColor1('yellow');
TheColor1('Pink');
TheColor1('blue');
TheColor1('Brown');
TheColor1('black');
TheColor1('Red');



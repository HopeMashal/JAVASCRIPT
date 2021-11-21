/* 1. Create a function that takes one parameter, a language.
2. Use a switch statement to log the following string for the
given 'language':
mandarin: 'MOST number of native speakers!'
spanish: '2nd place in number of native speakers'
english: '3rd place'
hindi: 'Number 4'
arabic: '5th most spoken language'
for all other simply log 'Not in the top 5' */

function TheLanguage(language){
switch(language){
    case 'mandarin': console.log(`${language} : MOST number of native speakers!`) ; break;
    case 'spanish': console.log(`${language} : 2nd place in number of native speakers`); break; 
    case 'english': console.log(`${language} : 3rd place`); break;
    case 'hindi' : console.log(`${language} : Number 4`); break;
    case 'arabic' : console.log(`${language} : 5th most spoken language`); break;
    default : console.log(`${language} : Not in the top 5`); break;
}
}
TheLanguage('english');
TheLanguage('mandarin');
TheLanguage('arabic');
TheLanguage('hindi');
TheLanguage('spanish');
TheLanguage('Japanese');
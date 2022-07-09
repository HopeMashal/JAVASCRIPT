var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var guessedLetters, letterToGuess;
const firstletter=document.querySelector('.thefirsttext');
const rightletter=document.querySelector('.theletter');
const lasttext=document.querySelector('.thesecondtext');
const mybtn=document.querySelector('.btn')

resetGame();
display();

document.onkeyup = function(event) {
  var guess = event.key;
  if (guess.toLowerCase() === letterToGuess) {
    win();
  } else if (guess.toLowerCase() !== letterToGuess) {
    firstletter.innerText="Nope, worng letter";
    firstletter.style.color="red";
    if(guessedLetters.includes(guess)){
      firstletter.innerText="Please enter a valid letter!!";
      firstletter.style.color="red";
    }
    else{
      guessedLetters.push(guess);
    }
  } 
  display();
}

function display() {
  var letterGuessed = document.getElementById("guessed");
  letterGuessed.innerHTML = guessedLetters.join(',');
}

function win() {
  firstletter.innerText="Right Letter!";
  firstletter.style.color="green";
  rightletter.innerHTML=`${letterToGuess}`;
  lasttext.innerText="Would you like to play again?";
  guessedLetters=[];
  mybtn.style.visibility="visible";
}

mybtn.addEventListener('click',function(){
  resetGame();
})

function resetGame() {
  mybtn.style.visibility="hidden";
  lasttext.innerText="Keys guessed";
  firstletter.innerText="Guess a letter";
  firstletter.style.color="black";
  rightletter.innerHTML='?';
  guessedLetters = [];
  letterToGuess = letters[Math.floor(Math.random() * letters.length)];
  console.log("Letter to guess: " + letterToGuess);
}
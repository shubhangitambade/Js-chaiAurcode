//console.log(parseInt(Math.random() * 100 + 1)) ;

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');

const userInput = document.querySelector("#guessField");

const guessSlot = document.querySelector(".guesses");

const remaining = document.querySelector(".lastResult");

const lowOrHi = document.querySelector(".lowOrHi");

const startOver = document.querySelector(".resultParas");

const p = document.createElement('p');


let prevGuess = [];
let numGuess = 1;

let palyGame = true;

if(palyGame){

    submit.addEventListener('click',function(e){
        
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);

        validateGuess(guess);
    })


}
//check valid number 
function validateGuess(guess){

    console.log(guess);

    if(isNaN(guess)){

        alert("Please enter valid number ....");
        userInput.innerHTML = '';
    }
    else if(guess<1)
    {
        alert("Please enter the number greater than 1 ....");
        guess = '';
    }
    else if(guess > 100 )
    {
        alert("Please enter the number less than 100 ....");
        userInput.innerHTML = '';
    }
    else
    {
        prevGuess.push(guess);

        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`Gane over.Random number was ${randomNumber}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
    
}

//check guess
function checkGuess(guess){

    if(guess === randomNumber)
    {
        displayMessage("You gused it right...");
        endGame();
    }
    else if(guess < randomNumber)
    {
        displayMessage("Number is too low....");
    }
    else if(guess > randomNumber)
    {
        displayMessage("Number is too high....");
    }
}


//You can use cleanUpGuess name to this method.
function displayGuess(guess){

    userInput.value = '';
    console.log(guess);
    guessSlot.innerHTML += `${guess} , `;

    numGuess++;

    remaining.innerHTML = `${11 - numGuess}`
}

//Display Message(DOM Manipulation will work herer)
function displayMessage(message)
{
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

//End Game
function endGame(){

    userInput.value = '';
    userInput.setAttribute('disabled','');

    p.classList.add('button');

    p.innerHTML = `<h2 id="newGame1"> Start New Game </h2>`

    startOver.appendChild(p);

    palyGame = false;
    newGame();
}

//Start NewGame
function newGame()
{
    console.log("Inside new Game....");
    const newGameButton = document.getElementById('#newGame1');
    console.log(newGameButton);
    newGameButton.addEventListener('click',function(e){

        randomNumber =  parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;

        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        palyGame = true;
    })
}



let randomNumber = parseInt(Math.random() * 100 + 1)
const submit = document.querySelector('#Submit')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultparse')

const p = document.createElement('p')

let preGuess = []
let NumGuess = 1;

let playGame = true
if(playGame){
submit.addEventListener('click', function (e) {
    e.preventDefault()

    const guess = parseInt(userInput.value);
    console.log(guess)
    validateGuess(guess)
})
}


function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('please enter  the number ')
    } else if (guess < 1) {
        alert('please enter the number more than 1')
    } else if (guess > 100) {
        alert('please enter the number less than  100')
    } else {
        preGuess.push(guess)
        if (NumGuess === 11) {
            displayGuess(guess)
            displayMessage(`game over.Random Number was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage('Your Guess is  totally correct')
        endGame()
    } else if (guess < randomNumber) {
        displayMessage('Your  Guess is close but its low ')
    } else if (guess > randomNumber) {
        displayMessage('Your guess is too close but  higher side')
    }
}

function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess},`
    NumGuess++;
    remaining.innerHTML = `${11 - NumGuess}`

}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id =newGame> Start New Game  </h2>`
    startOver.appendChild(p)
    playGame = false;
    newGame()

}
function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1)
        preGuess = []
        NumGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - NumGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame =true
    })
}





let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber)
const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guesseSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const StartOver = document.querySelector('.resultParas')


const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(typeof guess, guess)
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid num')
    } else if (guess < 1) {
        alert('Please enter a num more than 1')
    } else if (guess > 100) {
        alert('Please enter a num leass than 100')
    } else {
        prevGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game over. Random num  was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}
function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`you guessed it right`)
        endGame()
    } else if (guess < randomNumber) {
        displayMessage(`Number is TOOO low`)
    } else if (guess > randomNumber) {
        displayMessage(`Number is TOOO high`)
    }
}
function displayGuess(guess) {
    userInput.value = ''
    guesseSlot.innerHTML += `${guess},`
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}
function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}
function endGame(guess) {
    userInput.value = ''
    submit.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2> `;
    StartOver.appendChild(p)
    playGame = false
    newGame()
}
function newGame(guess) {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = []
        numGuess = 1
        guesseSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        submit.removeAttribute('disabled')
        StartOver.removeChild(p)
        playGame = true
    })
}
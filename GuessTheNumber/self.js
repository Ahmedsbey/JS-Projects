let randomNumber = Math.floor(Math.random() * 200 + 1)
console.log(randomNumber)

let userInput = document.querySelector('#guessField')
let subbtn = document.querySelector('#subt')
let prevGuesses = document.querySelector('.guesses')
let guessReamain = document.querySelector('.lastResult')
let lowOrHi = document.querySelector('.lowOrHi')
let  StartOver  =  document.querySelector('.resultParas')



let p = document.createElement('p')
let playGame = true

let prev = []

let remguess = 1


if (playGame) {
    subbtn.addEventListener('click', (e) => {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a number')
    } else
        if (guess < 1) {
            alert('Please enter a number more than 1')
        } else
            if (guess > 200) {
                alert('Please enter a number less than 100')
            } else {
                prev.push(guess)
                if (remguess === 11) {
                    displayGuess(guess)
                    displayMessege(`Game over and random number was ${guess}`)
                    endGame()
                } else {
                    displayGuess(guess)
                    checkGuess(guess)
                }
            }

}

function  checkGuess(guess){
if(guess  ===  randomNumber){
    displayMessege('You win You gessed it  right')
    endGame()
}else if  (guess  < randomNumber){
    displayMessege('Number is TOOO low')
}else if  (guess  > randomNumber){
    displayMessege('Number is TOOO high')
}
}

function  displayGuess(guess){
userInput.value  = ''
// prev += guess
prevGuesses.innerHTML +=  `${guess},`
remguess++
guessReamain.innerHTML = `${11 - remguess}` 
}

  function displayMessege(message){
      lowOrHi.innerHTML = `<h2>${message}<h2>`
  }


function endGame(){
userInput.value = ''
subbtn.disabled = true
p.classList.add('button')
p.innerHTML =  `<h2 id="new">Start new Game</h2>`
StartOver.appendChild(p)
playGame = false
newGame()
}

function newGame(){
    const  newGamebtn = document.querySelector('#new')
    newGamebtn.addEventListener('click',(e)=>{
        randomNumber = Math.floor(Math.random() * 100 + 1)
        prev = []
        remguess = 1
        prevGuesses.innerHTML = ''
        guessReamain.innerHTML =`${10 - remguess}` 
        subbtn.removeAttribute('disabled')
        StartOver.removeChild(p)
        displayMessege('')
        playGame= true
    })
}
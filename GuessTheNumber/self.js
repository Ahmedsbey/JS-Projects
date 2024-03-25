let randomNumber =Math.floor(Math.random() * 100 +  1)
console.log(randomNumber)

let userInput = document.querySelector('#guessField')
let submitBtn = document.querySelector('#subt')
let prevGuess = document.querySelector('.guesses')
let remainingGuess = document.querySelector('.lastResult')
let lowOrHi = document.querySelector('.lowOrHi')


let playGame = true
let numGuess = 1
if(playGame){
    submitBtn.addEventListener('click', (e)=>{
        e.preventDefault()
            const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a number')
    }else if (guess < 1){
        alert('Please enter a number more than 1')
    }else if (guess > 100){
        alert('Please enter a number less than 100')
    }else{
        if(numGuess === 11){
            
          endGame()
        }
    }
    
}



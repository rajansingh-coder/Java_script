const randomNumber = parseInt(Math.random() * 100 +1)
const submit = document.querySelector('#submit')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultparse')

const p = document.createElement('p')

let preGuess = []


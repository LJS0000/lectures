const rollBtn = document.querySelector('.btn_roll')
const holdBtn = document.querySelector('.btn_hold')
const newGameBtn = document.querySelector('.btn_new-game')
const player1Container = document.querySelector('.player_1')
const player2Container = document.querySelector('.player_2')
const player1Total = document.querySelector('.score_1-total')
const player2Total = document.querySelector('.score_2-total')
const player1Current = document.querySelector('.score_1-current')
const player2Current = document.querySelector('.score_2-current')
const diceDisplay = document.querySelector('.dice')
const resultContainer = document.querySelector('.result-container')
const result = document.querySelector('.result')
const progressbar = document.querySelector('.result-progressbar')

let currentPlayer = 0 // 0 = player1, 1 = player2
let temp1CurrentScore = 0
let temp2CurrentScore = 0
let isFirstRoll = true

const init = () => {
  player1Total.textContent = 0
  player2Total.textContent = 0
  player1Current.textContent = 0
  player2Current.textContent = 0
  diceDisplay.innerHTML = ''
  diceDisplay.style.display = 'none'
  currentPlayer = 0
  isFirstRoll = true
  activePlayer()
}

const activePlayer = () => {
  if (currentPlayer === 0) {
    player1Container.classList.add('active_player')
    player2Container.classList.remove('active_player')
  } else if (currentPlayer === 1) {
    player2Container.classList.add('active_player')
    player1Container.classList.remove('active_player')
  }
}

const showDiceDots = (diceValue) => {
  const dotConfigurations = {
    1: ['dot-middle'],
    2: ['dot-top-right', 'dot-bottom-left'],
    3: ['dot-top-right', 'dot-middle', 'dot-bottom-left'],
    4: ['dot-top-right', 'dot-top-left', 'dot-bottom-left', 'dot-bottom-right'],
    5: [
      'dot-middle',
      'dot-top-right',
      'dot-top-left',
      'dot-bottom-left',
      'dot-bottom-right',
    ],
    6: [
      'dot-top-right',
      'dot-top-left',
      'dot-middle-left',
      'dot-middle-right',
      'dot-bottom-left',
      'dot-bottom-right',
    ],
  }

  dotConfigurations[diceValue].forEach((dotClass) => {
    const dot = document.createElement('div')
    dot.classList.add('dot', dotClass)
    diceDisplay.appendChild(dot)
  })
}

const calculateScore = (diceValue) => {
  if (diceValue === 1 || diceValue === 2) {
    if (currentPlayer === 0) {
      temp1CurrentScore = 0
      player1Current.innerHTML = temp1CurrentScore
      currentPlayer = 1
    } else {
      temp2CurrentScore = 0
      player2Current.innerHTML = temp2CurrentScore
      currentPlayer = 0
    }
    activePlayer()
  } else {
    if (currentPlayer === 0) {
      temp1CurrentScore += diceValue
      player1Current.innerHTML = temp1CurrentScore
    } else {
      temp2CurrentScore += diceValue
      player2Current.innerHTML = temp2CurrentScore
    }
  }
}

const rollDice = () => {
  const diceValue = Math.floor(Math.random() * 6) + 1

  console.log('current player: ', currentPlayer)
  console.log('dice value: ', diceValue)

  diceDisplay.innerHTML = ''

  if (isFirstRoll) {
    diceDisplay.style.display = 'block'
    isFirstRoll = false
  }

  showDiceDots(diceValue)
  calculateScore(diceValue)
}

const alertResult = () => {
  resultContainer.style.display = 'block'

  setTimeout(() => {
    progressbar.style.width = '480px'
  }, 100)

  setTimeout(() => {
    init()
    progressbar.style.width = '0%'
    resultContainer.style.display = 'none'
  }, 3000)
}

const holdScore = () => {
  if (currentPlayer === 0) {
    player1Total.innerHTML = Number(player1Total.innerHTML) + temp1CurrentScore
    temp1CurrentScore = 0
    player1Current.innerHTML = temp1CurrentScore
    if (Number(player1Total.innerHTML) >= 50) {
      console.log('player 1 win')
      result.innerHTML = `🎉🎉🎉 Player 1 wins! 🎉🎉🎉`
      alertResult()
      return
    }
    currentPlayer = 1
  } else if (currentPlayer === 1) {
    player2Total.innerHTML = Number(player2Total.innerHTML) + temp2CurrentScore
    temp2CurrentScore = 0
    player2Current.innerHTML = temp2CurrentScore
    currentPlayer = 0
    if (Number(player2Total.innerHTML) >= 50) {
      console.log('player 2 win')
      result.innerHTML = `🎉🎉🎉 Player 2 wins! 🎉🎉🎉`
      alertResult()
      return
    }
    currentPlayer = 0
  }

  activePlayer()
}

activePlayer()
newGameBtn.addEventListener('click', init)
rollBtn.addEventListener('click', rollDice)
holdBtn.addEventListener('click', holdScore)

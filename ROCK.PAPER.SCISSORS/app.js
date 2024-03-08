let game =[ "ROCK", "PAPER", "SCISSORS"]
let playerEl = document.getElementById('player-el')
let opponentEl = document.getElementById('opponent-el')
let rockEl = document.getElementById('rock-el')
let paperEl = document.getElementById('paper-el')
let scissorsEl = document.getElementById('scissors-el')
let resultEl = document.getElementById('result-el')


    rockEl.addEventListener("click" ,function(){
        let a = Math.floor(Math.random()*3)
        console.log(game[a])
        playerEl.textContent = `PLAYER: ${game[0]}`
        opponentEl.textContent = game[a]

        if(opponentEl.textContent === "ROCK"){
            resultEl.textContent = "IT IS DRAW"
    
        }else if(opponentEl.textContent === "PAPER"){
            resultEl.textContent = "you lose"
        }else{
            resultEl.textContent ="you win"
        }
    })
    paperEl.addEventListener("click" ,function(){
        let a = Math.floor(Math.random()*3)

        playerEl.textContent =  `PLAYER: ${game[1]}`
        opponentEl.textContent = game[a]
        if(opponentEl.textContent === "PAPER"){
            resultEl.textContent = "IT IS DRAW"
    
        }else if(opponentEl.textContent === "SCISSORS"){
            resultEl.textContent = "you lose"
        }else{
            resultEl.textContent ="you win"
        }
        
        
        
    })
    scissorsEl.addEventListener("click" ,function(){
        let a = Math.floor(Math.random()*3)

        playerEl.textContent = `PLAYER: ${game[2]}`
        opponentEl.textContent =  game[a]
        if(opponentEl.textContent === "SCISSORS"){
            resultEl.textContent = "IT IS DRAW"
    
        }else if(opponentEl.textContent === "ROCK"){
            resultEl.textContent = "you lose"
        }else{
            resultEl.textContent ="you win"
        }
    
    })

   


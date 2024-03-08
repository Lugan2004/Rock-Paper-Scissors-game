let game =[ "ROCK", "PAPER", "SCISSORS"]
let playerEl = document.getElementById('player-el')
let opponentEl = document.getElementById('opponent-el')
let rockEl = document.getElementById('rock-el')
let paperEl = document.getElementById('paper-el')
let scissorsEl = document.getElementById('scissors-el')
let resultEl = document.getElementById('result-el')

let a = Math.floor(Math.random()*3)
let OpponentMove = game[a]


    rockEl.addEventListener("click" ,function(){
       
        
        
        console.log(game[a])
        playerEl.textContent = `PLAYER: ${game[0]}`
        opponentEl.textContent = `OPPONENT: ${game[a]}`

        if(OpponentMove == "ROCK"){
            resultEl.textContent = "IT IS A DRAW"
    
        }else if(OpponentMove == "PAPER"){
            resultEl.textContent = "you lose"
        }else{
            resultEl.textContent ="you win"
        }
    })
    paperEl.addEventListener("click" ,function(){
       

        playerEl.textContent =  `PLAYER: ${game[1]}`
        opponentEl.textContent = `OPPONENT: ${game[a]}`

        if(OpponentMove == "PAPER"){
            resultEl.textContent = "IT IS A DRAW"
    
        }else if(OpponentMove == "SCISSORS"){
            resultEl.textContent = "you lose"
        }else{
            resultEl.textContent ="you win"
        }
        
        
        
    })
    
    scissorsEl.addEventListener("click" ,function(){
        

        playerEl.textContent = `PLAYER: ${game[2]}`
        opponentEl.textContent =  `OPPONENT: ${game[a]}`
        if(OpponentMove == "SCISSORS"){
            resultEl.textContent = "IT IS A DRAW"
    
        }else if(OpponentMove == "ROCK"){
            resultEl.textContent = "you lose"
        }else{
            resultEl.textContent ="you win"
        }
    
    })

   


var playerGunting = document.getElementById("play-gunting")
var playerBatu = document.getElementById("play-batu")
var playerKertas = document.getElementById("play-kertas")
var result = document.getElementById("result")
var refresh = document.getElementById("refresh")
var pressButton = document.getElementById("pressButton")
var comChoice
var comMove
var gamePhase = 0


refresh.addEventListener("click", () => {
    playerGunting.style.backgroundColor = ""
    playerBatu.style.backgroundColor = ""
    playerKertas.style.backgroundColor = ""
    comChoice.style.backgroundColor = ""
    result.innerHTML = ""
    pressButton.innerHTML = ""
    comTurn()

    gamePhase = 0
})

const comTurn = () => {
    comMove = Math.floor(Math.random() * 3)
    comChoice = document.getElementById(com-$, {comMove})
}

comTurn()

var playerMove = -1

playerGunting.addEventListener("click", () => {
    if(gamePhase == 0){
        playerMove = 0
        playerGunting.style.backgroundColor = "#FF9E00"
        calc(playerMove, comMove)
    }
})

playerBatu.addEventListener("click", () => {
    if(gamePhase == 0){
        playerMove = 1
        playerBatu.style.backgroundColor = "#FF9E00"
        calc(playerMove, comMove)
    }
})

playerKertas.addEventListener("click", () => {
    if(gamePhase == 0){
        playerMove = 2
        playerKertas.style.backgroundColor = "#FF9E00"
        calc(playerMove, comMove)
    }
})

const calc = (a, b) => {
    let r

    if((a + 1) % 3 == b) r = "KALAH"
    else if(a == b) r = "SERI"
    else r = "MENANG"

    comChoice.style.backgroundColor = "#FF9E00"
    result.innerHTML = r
    pressButton.innerHTML = "<br><small>tekan tombol refresh</small>"
    
    gamePhase = 1
}
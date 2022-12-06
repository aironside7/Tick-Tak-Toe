console.log("Wellcome to tic tac toe")
let music = new Audio("")
let turnm = new Audio("rain_drop.mp3")
let gameover = new Audio("")

let turn="X"

const changeTurn = ()=>{
    return turn === "X"? "0": "X"
}

const cheakWin=()=>{
  let win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [3,4,5],
  ]
}


let boxes= document.getElementsByClassName("box")
Array.from(boxes).forEach(element=>{
    let boxtext = element.querySelector(".boxtext")
    element.addEventListener("click",()=>{
        if(boxtext.innerText===""){
            boxtext.innerText= turn
            turn = changeTurn()
            console.log(changeTurn)
            turnm.play()
            cheakWin()
            document.getElementsByClassName("info")[0].innerText="Turn for" +turn;
        }
    })
})
const gameLogic=()=>{

}
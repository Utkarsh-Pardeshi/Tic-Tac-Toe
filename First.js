let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetbtn");
let newGameBtn = document.querySelector("#newGameBtn");
let winnerMsg = document.querySelector(".Winner-msg");
let msg = document.querySelector("#msg");
let noWinner = true;
let clickCount = 1;
let chanceO = false;

const winPatterns = [
     [0,1,2],
     [3,4,5],
     [6,7,8],
     [0,3,6],
     [1,4,7],
     [2,5,8],
     [0,4,8],
     [2,4,6]
] 

const resetGame = () => {
     chanceO=false;
     noWinner = true;
     clickCount = 1;
     enableBoxes();
     winnerMsg.classList.add("hide");
}

boxes.forEach((box)=>{
     box.addEventListener("click",()=>{
          if(chanceO)
          {
               box.innerText = "O";
               chanceO = false;
               clickCount++;
          }
          else
          {
               box.innerText = "X";
               chanceO = true;
               clickCount++;
          }
          box.disabled = true;
          checkWinner();
     })
})
const disableBoxes = () => {
     for(box of boxes)
     {
          box.disabled = true;
     }
}

const enableBoxes = () => {
     for(box of boxes)
     {
          box.disabled = false;
          box.innerText = "";
     }
}

const showWinner = (winner) => {
     msg.innerText = `Congratulations, Winner is ${winner}`;
     winnerMsg.classList.remove("hide");
     disableBoxes();
}
const gameTie = () => {
     msg.innerText = "Game Tied";
     winnerMsg.classList.remove("hide");
     disableBoxes();
}

const checkWinner = ()=>{
     for(pattern of winPatterns)
     {
          let pos1Val = boxes[pattern[0]].innerText;
          let pos2Val = boxes[pattern[1]].innerText;
          let pos3Val = boxes[pattern[2]].innerText;
          if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
               if(pos1Val === pos2Val && pos2Val === pos3Val){
                    showWinner(pos1Val);
                    noWinner = false;
               }
          }
     }
     if(clickCount>9 && noWinner === true)
     {
          gameTie();
     }
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
let boxes=document.querySelectorAll('.box');
let resetButton=document.querySelector('#reset');
let newGameButton=document.querySelector('#new-game');
let msgContainer=document.querySelector('.msg-container');
let msg = document.querySelector('#msg');

let turnO =true;//playerX, playerO

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],  
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add('hide'); 
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){ //playerO
            box.innerText = "O";
            turnO=false; 
        } else { // playerX
            box.innerText = "X";
            turnO=true;
        }
        box.disabled = true; // Disable the box after clicking
        checkWin();
    });
});

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true; // Disable all boxes
    }
};

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false; // enable all boxes
        box.innerText = ""; // Clear the text in the boxes
    }
};

const showWinner = (winner) => {
    msg.innerText = `Cogratulations, Winner is ${winner}`;
    msgContainer.classList.remove('hide');
    disableBoxes();
};

const checkWin = () => {
    for(let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText; 

        if(pos1 != "" && pos2 != "" && pos3 != "") {
            if(pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1);
            }
        }
    }
};

// Event listeners for buttons
newGameButton.addEventListener('click', resetGame);
resetButton.addEventListener('click', resetGame);  
let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGmbtn=document.querySelector("#new-btn");
let msgCon=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");



let turnO=true; // playerX, plyaerO

const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]


const resetgame=()=>{
    turnO=true;
    enableBox();
    msgCon.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){//PlayerO
        box.innerText="O";
        turnO= false
    }else{//PlayerX
        box.innerText="X";
        turnO= true;
    }
    box.disabled=true;

    checkWinner();


    })
});


const disabledBox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}


const enableBox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}


const showWinnwer=(winner)=>{
    msg.innerText= `Congratulation, Winner is ${winner}`;
    msgCon.classList.remove("hide");
    disabledBox();
}



const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Vla=boxes[pattern[0]].innerText;
        let pos2Vla=boxes[pattern[1]].innerText;
        let pos3Vla=boxes[pattern[2]].innerText;
        if(pos1Vla !="" && pos2Vla !="" && pos3Vla !=""){
            if (pos1Vla === pos2Vla && pos2Vla === pos3Vla) {
                showWinnwer(pos1Vla);
                
            }
        }
    }
};


newGmbtn.addEventListener("click",resetgame);
resetBtn.addEventListener("click",resetgame);
console.log("Welcome to my Tic tac Toe")
let gameover = new Audio("over.mp3.wav")
let music = new Audio("bgmusic.mp3.mp3")
let playersound = new Audio("ting.mp3.wav")



let player = "X";
let over = false;

console.log(typeof(turn));


// fuction to change the turn

const changeTurn = ()=>{
    //alert("hello");
    return player === "X"? "0": "X";
    turnsound.play();    
}




//funtion to check for a win 

const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
      ]
      wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") )

            { document.querySelector('.info').innerText = boxtext[e[0]].innerText + " won"
                over = true;
            }
            
      })
}

// Game logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if (boxtext.innerText === '') {
            boxtext.innerText = player;
            player = changeTurn();
            playersound.play();
            checkWin();
            console.log(over + "  value of over ");
            if (!over)
            document.getElementsByClassName("info")[0].innerText = "Turn for " + player;
           
        }
    })
})

reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).Array.forEach(element =>{
        element.innerText = ""
    })
})

// sound button
const audio = document.getElementById('audio');
const playButton = document.getElementById('playButton');

playButton.addEventListener('click', function() {
  if (music.paused) {
    music.play();
    playButton.classList.remove('play');
    playButton.classList.add('pause');
  } else {
    music.pause();
    playButton.classList.remove('pause');
    playButton.classList.add('play');
  }
});

  

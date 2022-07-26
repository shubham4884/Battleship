const leftPanel = document.querySelector(".leftPanel")
const rightPanel = document.querySelector('rightPanel')
const usernameInput = document.getElementById('usernameInput')
const startGameBtn = document.getElementById('startGameBtn')
const player1name = document.querySelector(".player1name")
const mainLeft = document.querySelector(".mainLeft")
const mainRight = document.querySelector(".mainRight")
const enemyName = document.querySelector(".rightHeader")
const hitStatus = document.querySelector(".status")
const logsWindow = document.querySelector(".status")
const shipC1 = document.querySelector(".ship1counter")
const shipC2 = document.querySelector(".ship2counter")
const shipC3 = document.querySelector(".ship3counter")
const shipC4 = document.querySelector(".ship4counter")

            

let players = [];
let gameboards = [];
let gameOver = false;
let isStarted = false;
let direction = 'v';
function Gameboard(){
    this.missedAttacks = [];
    this.areShipsSunken = false;
    this.board = [
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0]
    ]
    this.totalHits = 0;
}
function Player(username){
    this.username = username;
    this.hits = 0;
    this.ships = {
        ship1: 1,
        ship2: 2,
        ship3: 2,
        ship4: 2
    }
}
function createUIgameboard(who){
    //p is the player
    let p;
    const boardUI = document.createElement('div')
    boardUI.classList.add('board')
    if(who ==="COMPUTER"){
        mainRight.appendChild(boardUI)
        p = 'COMPUTER';
    } else {

        
        mainLeft.appendChild(boardUI)
        p = 'player';
    }

    for(let i=0;i<=9;i++){
        for(let j=0;j<=9;j++){
                const cell = document.createElement('div')
                cell.classList.add('cells')
                cell.setAttribute('id',`cell${i}x${j}x${p}`);
                cell.setAttribute('onclick',`handleHit(${i},${j},'${p}')`)
                boardUI.appendChild(cell)
        }
    }
}
function startGame(){
    logsWindow.innerHTML = "Place your ships!"
    //checks if the game is already started
    if(isStarted==false){
        //created player object
    let player1 = new Player(usernameInput.value);
    players.push(player1)
    player1name.innerHTML = usernameInput.value;
    let  = new Player(' COMPUTER');
    players.push()
    enemyName.innerHTML = " COMPUTER";
    createUIgameboard('player');
    let playerGameboard = new Gameboard('player');
    let enemyGameboard = new Gameboard('COMPUTER');
    createUIgameboard('COMPUTER')
    gameboards.push(playerGameboard)
    gameboards.push(enemyGameboard)
    COMPUTER();
    isStarted = true;
    } else{
        //if the game is already started, show an error
        hitStatus.innerHTML = "The game has already started!";
    }
    //shows the numbers of ships left for the player
    shipC1.innerHTML = players[0].ships.ship1;
    shipC2.innerHTML = players[0].ships.ship2;
    shipC3.innerHTML = players[0].ships.ship3;
    shipC4.innerHTML = players[0].ships.ship4;
    

    
}
let shipCounter = 0;





function handleHit(i,j,p){
    if(shipCounter==7||p=='player'){
    if(p=="COMPUTER"){
    }else if(p=="player"){console.log('player')}


    //it uses ship counter to know which ship is selected currently and which are left to be placed
    if(p==='player'){
    if(shipCounter === 0){
            //checks if the move is a valid one
            let move = checkValidMove(i,j,4,p);
            if(move==true){
                //places the ship
                placeShipVertically(i,j,p,4);
            }else {
                //show an error if the move is not valid
                logsWindow.innerHTML = "Not a valid move";
            }
        
            } else if(shipCounter === 1 || shipCounter === 2){
                

                let move = checkValidMove(i,j,3,p);
                if(move==true){
    
                    placeShipVertically(i,j,p,3);
                }else {
                    logsWindow.innerHTML = "Not a valid move";
                }            }else if(shipCounter === 3 || shipCounter === 4){

                    let move = checkValidMove(i,j,2,p);
                    if(move==true){
        
                        placeShipVertically(i,j,p,2);
                    }else {
                        logsWindow.innerHTML = "Not a valid move";
                    }            }else if(shipCounter === 5 || shipCounter === 6){
                        let move = checkValidMove(i,j,1,p);
                        if(move==true){
            
                            placeShipVertically(i,j,p,1);
                            logsWindow.innerHTML = "Attack your target!"
                        }else {
                            logsWindow.innerHTML = "Not a valid move";
                        }            }else if(shipCounter === 7){
                startRound();
            } 
}else if(p=='COMPUTER'){
    //if the gameboard that is clicked is COMPUTER's board, it runs the code that handles hits
    if(gameboards[1].board[i][j]=='s'){
        //sets cell's background to green if the hit is successful
        document.getElementById(`cell${i}x${j}x${p}`).style.cssText = "background-color: green";
        hitStatus.innerHTML = "You hit!";
        gameboards[1].board[i][j]= 'x';
        document.getElementById(`cell${i}x${j}x${p}`).removeAttribute('onclick')
        players[1].hits++;
        checkWinStatus();
        aiHit();
     

    } else {
        //it turns the background red if you miss the shot
        document.getElementById(`cell${i}x${j}x${p}`).style.cssText = "background-color: red";
        hitStatus.innerHTML = "You missed!";
        gameboards[1].board[i][j]= 'm';
        document.getElementById(`cell${i}x${j}x${p}`).removeAttribute('onclick');
        checkWinStatus();
        aiHit();
 
}
    } else {
        //if you haven't places all ships, you get an error
        hitStatus.innerHTML = `Please place all your ships`
    }

}
}


let aiShipCounter = 0;
function COMPUTER(){
    let p='COMPUTER'
    //gets 2 random numbers that are used for COMPUTER's position
    i = Math.floor(Math.random() * (8 - 2 + 1) + 2);    
    j = Math.floor(Math.random() * (8 - 2 + 1) + 2);  
        function getNumbers(){
            i = Math.floor(Math.random() * (8 - 2 + 1) + 2);    
            j = Math.floor(Math.random() * (8 - 2 + 1) + 2);
        }
        
        if(aiShipCounter === 0){
            getNumbers();
            console.log(i,j)
            if(gameboards[1].board[i][j] === 's' || gameboards[1].board[i-1][j] === 's' || gameboards[1].board[i-2][j] === 's' || gameboards[1].board[i-3][j] === 's' || i<4){
                console.log("You can't place your ship there!");
                getNumbers();
                COMPUTER();
            }else {
         
        
                aiShipPlace(i,j,p,4);

                }
            

        }else if(aiShipCounter === 1||aiShipCounter===2){
            getNumbers();
            console.log(i,j)
            if(gameboards[1].board[i][j] === 's' || gameboards[1].board[i-1][j] === 's' || gameboards[1].board[i-2][j] === 's'){
                console.log("You can't place your ship there!");
                getNumbers();

                COMPUTER()
            }else {
      
        
                aiShipPlace(i,j,p,3);

                
            }   

        }else if(aiShipCounter === 3||aiShipCounter===4){
            getNumbers();
            console.log(i,j)
            if(gameboards[1].board[i][j] === 's' || gameboards[1].board[i-1][j] === 's'){
                console.log("You can't place your ship there!");
                getNumbers();

                COMPUTER()
            }else {
  
            aiShipPlace(i,j,p,2);
                
            }   

        }else if(aiShipCounter === 5||aiShipCounter===6){
            getNumbers();
            console.log(i,j)
            if(gameboards[1].board[i][j] === 's'){
                console.log("You can't place your ship there!");
                getNumbers();

                COMPUTER()
            }else {
        
                aiShipPlace(i,j,p,1);

            }   

        }

}
function checkIfAIWords(){
    let ships = countShipsAI();
    if(ships<6){
        COMPUTER();
    }
}
function aiShipPlace(i,j,p,l){
    console.log(aiShipCounter)
    for(let a=l;a>0;a--){
        
        gameboards[1].board[i][j] = 's';

        i--;
        aiShipCounter++;
        gameboards[1].totalHits++;
        checkIfAIWords();

        COMPUTER();
    }
    
}

function aiHit(){
    console.log("The COMPUTER made his move!")
    let p = 'player';
    let i;
    let j;
    function getNumbers(){
        i = Math.floor(Math.random() * (9 - 0 + 1) + 0);    
        j = Math.floor(Math.random() * (9 - 0 + 1) + 0);    
    }
    getNumbers();
    if(gameboards[0].board[i][j]==0){
        console.log("COMPUTER missed!")
        document.getElementById(`cell${i}x${j}x${p}`).style.cssText = "background-color: pink";
        gameboards[0].board[i][j] = 'm';
        checkWinStatus();
    }else if(gameboards[0].board[i][j]=='s'){
        console.log("COMPUTER hit your ship!")
        document.getElementById(`cell${i}x${j}x${p}`).style.cssText = "background-color: blue";
        gameboards[0].board[i][j] = 'x';
        players[0].hits++;
        checkWinStatus();

    }else if(gameboards[0].board[i][j]=='m'|| gameboards[0].board[i][j]=='x'){
        aiHit();
    }
}


function startRound(){
    console.log('The round has started!')
    logsWindow.innerHTML = "The round has started! Attack your target!"
   
}
function countShipsAI(){
    let count = 0;
    for(let i=0;i<9;i++){
        for(let j=0;j<9;j++){
            if(gameboards[1].board[i][j]=='s'){
                count++
            }
        }
    }
    return count;
}
function checkWinStatus(){
    let count = countShipsAI();
    if(players[0].hits==16){
        finishGame(players[1].username);
    }else if(count==0){
        finishGame(players[0].username)
    }
    
}
function finishGame(name){
    const cells = document.getElementsByClassName('cells');
    for(let i=0;i<cells.length;i++){
        cells[i].removeAttribute('onclick');
    }
    hitStatus.innerHTML = "Game over!";
    logsWindow.innerHTML = `${name} won!`
    

}
function placeShipVertically(i,j,p,l){
    let aiships = countShipsAI();
    if(aiships==0){
        aiShipCounter = 0;
        COMPUTER();
    }
    if(direction == 'v'){
        let move = checkValidMove(i,j,l,p);
        if(move==true){

        
    for(let h=l;h>0;h--){
        gameboards[0].board[i][j] = 's';
        document.getElementById(`cell${i}x${j}x${p}`).style.cssText = "background-color: lightgray";
        i--;
    }
    //updates ship counter
    handleCounter(l);
    shipCounter++;
    }else {
        logsWindow.innerHTML = "Not a valid move"
    }
}else if(direction == 'h'){

    checkValidMove(i,j,l,p)
    for(let h=l;h>0;h--){
        gameboards[0].board[i][j] = 's';
        document.getElementById(`cell${i}x${j}x${p}`).style.cssText = "background-color: lightgray";
        j--;
    }
    //updates ship counter
    shipCounter++;
    handleCounter(l);
    }
}


function checkValidMove(i,j,l,p){
    let isValid = true;
    if(direction=='v'){
        for(let n=l;n>0;n--){
            
            if(i<=2&&l==4){
                isValid = false;
            }else if(i<=1&&l==3){
                isValid = false;
            }else if(i<=0&&l==2){
                isValid = false;
            }else if(l==1){
                isValid = true;
            }

            if(gameboards[0].board[i-(n-1)][j]=='s'){
                isValid = false;
            }
            
        }
    }else if(direction=='h'){
        for(let n=l;n>0;n--){
            
            if(j<=2&&l==4){
                isValid = false;
            }else if(j<=1&&l==3){
                isValid = false;
            }else if(j<=0&&l==2){
                isValid = false;
            }else if(l==1){
                isValid = true;
            }

            if(gameboards[0].board[i][j-(n-1)]=='s'){
                isValid = false;
            }
            
        }
    }
    
    return isValid;
}



function handleCounter(l){
    if(l==4){
        players[0].ships.ship1--;
        shipC1.innerHTML = players[0].ships.ship1;
    }else  if(l==3){
        players[0].ships.ship2--;
        shipC2.innerHTML = players[0].ships.ship2;
    }else  if(l==2){
        players[0].ships.ship3--;
        shipC3.innerHTML = players[0].ships.ship3;
    }else  if(l==1){
        players[0].ships.ship4--;
        shipC4.innerHTML = players[0].ships.ship4;
    }
    
}

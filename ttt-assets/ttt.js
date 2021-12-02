var gridContainer = document.getElementById("ttt-grid-container");
// define container element

var gridArray = [
    [document.getElementById("pos-0-0"),document.getElementById("pos-0-1"),document.getElementById("pos-0-2")],
    [document.getElementById("pos-1-0"),document.getElementById("pos-1-1"),document.getElementById("pos-1-2")],
    [document.getElementById("pos-2-0"),document.getElementById("pos-2-1"),document.getElementById("pos-2-2")]
];
//define a 2D-array of tile elements

var winner = false;

//define a 2D-array to keep track of who picked what
const pSafe = [
    [-1,-1,-1],
    [-1,-1,-1],
    [-1,-1,-1]
];


var player = 0; //0-indexing
var playerColour = ["player-one","player-two"]
//lazy css class establishment

var turn = 0; //define turn counter (0-indexed)
var moves = [0,0];
var menuBar = document.getElementById("menu-bar")
resetGame();

function switchPlayer(){
    if(player == 0){player=1}
    else{player=0}
    turn++;
}
//function to switch between players



function tileCheck(x,y){
    tile = gridArray[x][y]; // local assignment
    if(!winner){
        if(!tile.classList.contains("locked")){
            //tile.innerText = "This is tile: ["+x+","+y+"]";
            //tile.innerText = "\nIt was pressed by player: "+player;
            tile.classList.add(playerColour[player]);
            tile.classList.add("locked");
            pickArray[x][y] = player
            moves[player]++;
            check = checkVictory();
            
            console.log(check)
            if(check[1] == (-2)){
                winner=true;
                alert("No victor!")
            }else if(check[0] === true){
                winner = true;
                alert("Victory achieved by "+(playerColour[check[1]]).replace("-"," ")+" in "+moves[player]+" moves!");
            }else{
                switchPlayer();
            }
        }
    }else{
        // console.log("NO")
        resetGame();
    }
}

gridArray[0][0].addEventListener("click",function(){tileCheck(0,0)});
gridArray[0][1].addEventListener("click",function(){tileCheck(0,1)});
gridArray[0][2].addEventListener("click",function(){tileCheck(0,2)});
gridArray[1][0].addEventListener("click",function(){tileCheck(1,0)});
gridArray[1][1].addEventListener("click",function(){tileCheck(1,1)});
gridArray[1][2].addEventListener("click",function(){tileCheck(1,2)});
gridArray[2][0].addEventListener("click",function(){tileCheck(2,0)});
gridArray[2][1].addEventListener("click",function(){tileCheck(2,1)});
gridArray[2][2].addEventListener("click",function(){tileCheck(2,2)});

function checkVictory () {
    //Long-ass logic to check each object
    //check line 100 for explanation
    if(checkEquals(pickArray[0][0],pickArray[0][1],pickArray[0][2])){return [true,pickArray[0][0]]}
    if(checkEquals(pickArray[1][0],pickArray[1][1],pickArray[1][2])){return [true,pickArray[1][0]]}
    if(checkEquals(pickArray[2][0],pickArray[2][1],pickArray[2][2])){return [true,pickArray[2][0]]}
    
    if(checkEquals(pickArray[0][0],pickArray[1][0],pickArray[2][0])){return [true,pickArray[0][0]]}
    if(checkEquals(pickArray[0][1],pickArray[1][1],pickArray[2][1])){return [true,pickArray[0][1]]}
    if(checkEquals(pickArray[0][2],pickArray[1][2],pickArray[2][2])){return [true,pickArray[0][2]]}
    
    if(checkEquals(pickArray[0][0],pickArray[1][1],pickArray[2][2])){return [true,pickArray[0][0]]}
    if(checkEquals(pickArray[0][2],pickArray[1][1],pickArray[2][0])){return [true,pickArray[0][2]]}
    
    if(turn >= 8){
        return [false,-2]
    }else{
        return [false,-1]
    }
}

function checkEquals(x,y,z){
    if((x+y+z) >= 0){
        return (x==y&&y==z); // return true if x==y==z
    }
}


function resetGame(){
    pickArray = [[...pSafe[0]],[...pSafe[1]],[...pSafe[2]]];
    var tmp = document.getElementsByClassName("grid-box");
    for(var i = 0; i<tmp.length;i++){
        tmp[i].classList.remove(playerColour[0]);
        tmp[i].classList.remove(playerColour[1]);
        tmp[i].classList.remove("locked");
    }
    winner=false;
    turn=0;
    moves=[0,0];
    // player = 0;
}










/*
Checking for patterns:

L68: | L69: | L72: | L73: | L74: | L76: | L77: | L78:
xxx  | ---  | ---  | x--  | -x-  | --x  | x--  | --x 
---  | xxx  | ---  | x--  | -x-  | --x  | -x-  | -x- 
---  | ---  | xxx  | x--  | -x-  | --x  | --x  | x-- 

*/
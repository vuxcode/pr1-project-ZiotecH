var gridContainer = document.getElementById("ttt-grid-container");
var gridArray = [
    [document.getElementById("pos-0-0"),document.getElementById("pos-0-1"),document.getElementById("pos-0-2")],
    [document.getElementById("pos-1-0"),document.getElementById("pos-1-1"),document.getElementById("pos-1-2")],
    [document.getElementById("pos-2-0"),document.getElementById("pos-2-1"),document.getElementById("pos-2-2")]
];

var player = 0
var playerColour = ["player-one","player-two"]

function switchPlayer(){
    if(player == 0){player=1}
    else{player=0}
}



function tileDebug(x,y){
    tile = gridArray[x][y];
    if(!tile.classList.contains("locked")){
        tile.innerText = "This is tile: ["+x+","+y+"]";
        tile.innerText = "\nIt was pressed by player: "+player;
        tile.classList.add(playerColour[player]);
        tile.classList.add("locked");
        
        switchPlayer()
    }
}

gridArray[0][0].addEventListener("click",function(){tileDebug(0,0)});
gridArray[0][1].addEventListener("click",function(){tileDebug(0,1)});
gridArray[0][2].addEventListener("click",function(){tileDebug(0,2)});
gridArray[1][0].addEventListener("click",function(){tileDebug(1,0)});
gridArray[1][1].addEventListener("click",function(){tileDebug(1,1)});
gridArray[1][2].addEventListener("click",function(){tileDebug(1,2)});
gridArray[2][0].addEventListener("click",function(){tileDebug(2,0)});
gridArray[2][1].addEventListener("click",function(){tileDebug(2,1)});
gridArray[2][2].addEventListener("click",function(){tileDebug(2,2)});
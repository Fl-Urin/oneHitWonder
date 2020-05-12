function Map(){

  this.MAP_SIZE = 20;

  this.generate = function(){
    tiles = [];
    for (i = 0; i < this.MAP_SIZE; i++){
      tiles[i] = [];
      for (j = 0; j < this.MAP_SIZE; j++) {
        tiles[i][j] = new Tile(0, i, j);
      }
    }
  }
}

function Tile(tileType, posX, posY){
  this.tileType = tileType;
  this.posX = posX;
  this.posY = posY;
}
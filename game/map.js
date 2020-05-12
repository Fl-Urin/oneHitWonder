


export default class Map {
  const MAP_SIZE = 20;
  var tiles;
  constructor() {
    tiles = [];
  }
  function generate() {
    tiles = [];
    for (i=0; i<MAP_SIZE; i++){
      tiles[i] = [];
      for (j=0; j<MAP_SIZE; j++) {
        tiles[i][j] = new Tile(0,i,j);
      }
    }
  }
}


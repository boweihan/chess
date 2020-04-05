import { Sides, BoardSquareNumber } from './constants';

const initBoard = () => ({
  pieces: new Array(BoardSquareNumber), // pieces
  side: Sides.WHITE, // current side
  fiftyMove: 0, // count before fifty move draw
  hisPly: 0, // count of half moves
  ply: 0, // number of half moves played in the search tree
  castlePerm: 0, // permission to castle
  material: new Array(2), // white / black material
});

export default initBoard;

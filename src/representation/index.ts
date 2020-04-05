import { Representation } from './interface';
import initBoard from './src/board';

class RepresentationImpl implements Representation {
  board: any = null;

  constructor() {
    this.board = initBoard();
  }
  ascii: string;
  getBoard: Function;
  clear: Function;
  fen: Function;
  complete: Function;
  get: Function;
  history: Function;
  in_check: Function;
  in_checkmate: Function;
  in_draw: Function;
  in_stalemate: Function;
  in_threefold_repetition: Function;
  insufficient_material: Function;
  load: Function;
  move: Function;
  moves: Function;
  put: Function;
  remove: Function;
  reset: Function;
  square_color: Function;
  turn: Function;
  undo: Function;
}

export default RepresentationImpl;

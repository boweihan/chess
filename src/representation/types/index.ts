import { Side } from '../src/constants';

interface Board {
  pieces: object[];
  side: Side;
  fiftyMove: number;
  hisPly: number;
  ply: number;
  castlePerm: number;
  material: string[];
}

export { Board };

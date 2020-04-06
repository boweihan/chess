enum Side {
  BLACK = 'black',
  WHITE = 'white',
}

enum Piece {
  EMPTY = 'empty',
  PAWN = 'pawn',
  KNIGHT = 'knight',
  BISHOP = 'bishop',
  ROOK = 'rook',
  QUEEN = 'queen',
  KING = 'king',
}

enum PieceValues {
  'empty' = 0,
  'pawn' = 100,
  'knight' = 325,
  'bishop' = 325,
  'rook' = 550,
  'queen' = 1000,
  'king' = 50000,
}

enum Ranks {
  A = 0,
  B = 1,
  C = 2,
  D = 3,
  E = 4,
  F = 5,
  G = 6,
}

enum Files {
  _0_ = 0,
  _1_ = 1,
  _2_ = 2,
  _3_ = 3,
  _4_ = 4,
  _5_ = 5,
  _6_ = 6,
  _7_ = 7,
}

enum Squares {
  A1 = 21,
  B1 = 22,
  C1 = 23,
  D1 = 24,
  E1 = 25,
  F1 = 26,
  G1 = 27,
  H1 = 28,
  A8 = 91,
  B8 = 92,
  C8 = 93,
  D8 = 94,
  E8 = 95,
  F8 = 96,
  G8 = 97,
  H8 = 98,
  NOSQUARE = 99,
  OFFBOARD = 100,
}

enum CastleBit {
  WHITE_KING_SIDE = 1, // 0001
  WHITE_QUEEN_SIDE = 2, // 0010
  BLACK_KING_SIDE = 4, // 0100
  BLACK_QUEEN_SIDE = 8, // 1100
}

// prettier-ignore
const FilesBoard =
  [100,100,100,100,100,100,100,100,100,100
  ,100,100,100,100,100,100,100,100,100,100
  ,100, 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ,100
  ,100, 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ,100
  ,100, 2 , 2 , 2 , 2 , 2 , 2 , 2 , 2 ,100
  ,100, 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 ,100
  ,100, 4 , 4 , 4 , 4 , 4 , 4 , 4 , 4 ,100
  ,100, 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 ,100
  ,100, 6 , 6 , 6 , 6 , 6 , 6 , 6 , 6 ,100
  ,100,100,100,100,100,100,100,100,100,100
  ,100,100,100,100,100,100,100,100,100,100
  ,100,100,100,100,100,100,100,100,100,100];

// prettier-ignore
const RanksBoard =
  [100,100,100,100,100,100,100,100,100,100
  ,100,100,100,100,100,100,100,100,100,100
  ,100, 0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 ,100
  ,100, 0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 ,100
  ,100, 0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 ,100
  ,100, 0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 ,100
  ,100, 0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 ,100
  ,100, 0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 ,100
  ,100, 0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 ,100
  ,100,100,100,100,100,100,100,100,100,100
  ,100,100,100,100,100,100,100,100,100,100
  ,100,100,100,100,100,100,100,100,100,100];

const BoardSquareNumber = 120;

export {
  Side,
  Piece,
  PieceValues,
  Ranks,
  Files,
  Squares,
  CastleBit,
  FilesBoard,
  RanksBoard,
  BoardSquareNumber,
};

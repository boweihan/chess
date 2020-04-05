export interface Representation {
  /*
   * Private state
   */
  board?: any;

  /*
   * @returns the ascii representation of the board
   */
  ascii: string;

  /*
   * @returns a jagged array representing the board
   */
  getBoard: Function;

  /*
   * clear and reset the board state
   * @returns a jagged array representing the board
   */
  clear: Function;

  /*
   * @returns the FEN string for the current position
   */
  fen: Function;

  /*
   * @returns a boolean representing whether the game has ended via
   * checkmate, stalemate, draw, threefold repetition or insufficient material
   */
  complete: Function;

  /*
   * @returns the piece on the specified square
   */
  get: Function;

  /*
   * @returns a list containing the moves of the current game
   */
  history: Function;

  /*
   * @returns a boolean representing whether the side to move is in check
   */
  in_check: Function;

  /*
   * @returns a boolean representing whether the side to move is in checkmate
   */
  in_checkmate: Function;

  /*
   * @returns a boolean representing whether the game is drawn
   */
  in_draw: Function;

  /*
   * @returns a boolean representing whether the side to move has been stalemated
   */
  in_stalemate: Function;

  /*
   * @returns a boolean representing whether the current board position has occured
   * 3 or more times
   */
  in_threefold_repetition: Function;

  /*
   * @returns a boolean representing whether the game is drawn due to insufficient material
   */
  insufficient_material: Function;

  /*
   * Clear the board and load a FEN string
   * @returns a boolean representing whether the position was successfully loaded
   */
  load: Function;

  /*
   * Attempt to make a move
   * @returns the move object if the move was legal, otherwise null
   */
  move: Function;

  /*
   * List of legal moves
   * @returns the list of legal moves from the current position
   */
  moves: Function;

  /*
   * Put a piece on a square
   * @returns a boolean representing if the piece was placed successfully
   */
  put: Function;

  /*
   * Remove a piece from a square
   * @returns the removed piece or null
   */
  remove: Function;

  /*
   * Reset the board to the initial starting position
   * @returns null
   */
  reset: Function;

  /*
   * Get the color of a square
   * @returns the color of the square ('light' or 'dark')
   */
  square_color: Function;

  /*
   * Get the current side to move
   * @returns 'w' or 'b', the current side to move
   */
  turn: Function;

  /*
   * Undo the last half-move
   * @returns the move object if successful, otherwise null
   */
  undo: Function;
}

export default Representation;

class Board {
  constructor(side, character) {
    this.side = side
    this.character = character
    Board.all.push(this)
  }
}

Board.all = []

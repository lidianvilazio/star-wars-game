class Board {
  constructor(side, character) {
    this.side = side
    this.character = character
    Board.all.push(this)
  }

  static getBoard() {
    var found = Board.all.find(board => board.side !== Play.all[0].user.side)
    Play.all[0].board = found
  }

}

Board.all = []

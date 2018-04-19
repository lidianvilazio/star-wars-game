class Board {
  constructor(side, character) {
    this.side = side
    this.character = character
    this.x = 200
    this.y = 75
    Board.all.push(this)
  }

  static getBoard() {
    var found = Board.all.find(board => board.side !== Play.all[0].user.side)
    Play.all[0].board = found
  }

  renderBoard(ctx) {
    let enemy = new Image()
    enemy.src = this.character
    if(this.side === "bad") {
      ctx.drawImage(enemy, this.x, this.y, 400,400);
    } else {
      ctx.drawImage(enemy, this.x, this.y, 300,400);
    }
  }

}

Board.all = []

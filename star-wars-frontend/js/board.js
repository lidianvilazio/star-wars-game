class Board {
  constructor(side, character) {
    this.side = side
    this.character = character
    this.x = 20
    this.y = 20
    this.speed = 100
    this.right = true
    this.life = 10
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
      ctx.drawImage(enemy, this.position(), this.y, 80,80);
    } else {
      ctx.drawImage(enemy, this.position(), this.y, 80,80);
    }
  }

  position() {
    if (this.x >= 600) {
      this.right = false
    } else if (this.x <= 15) {
      this.right = true
    }

    if (this.right) {
      return this.x += 4
    } else {
      return this.x -= 4
    }
  }



}

Board.all = []

class Play {

  constructor(user, board) {
    this.user = user
    this.board = board
    Play.all.push(this)
  }

  static getCtx() {
    var canvas = document.getElementById('canvasPlay')
    var ctx = canvas.getContext('2d')
    return ctx
  }

  static getCanvas(img) {
    var ctx = Play.getCtx()
    var background = new Image()
    background.src = img
    ctx.drawImage(background, 10, 10);
    Board.getBoard()
    Play.renderUserCharacter()
    Play.renderBoardCharacter()
  }

  static renderUserCharacter(x=0,y=0) {
    x = 1600
    y = 3380
    let ctx = Play.getCtx()
    let character = new Image()
    character.src = Play.all[0].user.character
    ctx.scale(0.2, 0.2);
    ctx.drawImage(character, x, y);
    EventListener.canvasListener()
  }

  static renderBoardCharacter() {
    let board =  Play.all[0].board
    let ctx = Play.getCtx()
    let enemy = new Image()
    enemy.src = board.character
    if(board.side === "bad") {
      ctx.drawImage(enemy, 200, 75, 400,400);
    } else {
      ctx.drawImage(enemy, 200, 75, 300,400);
    }
  }

  static moveUser(key) {
    debugger
    if(key === "ArrowRight") {
      Play.renderUserCharacter(1600,2380)
    } else if(key === "ArrowLeft") {
      Play.renderUserCharacter(1600,4380)
    } else if(key === "ArrowUp") {
      Play.renderUserCharacter(2600,3380)
    }
  }

}

Play.all = []

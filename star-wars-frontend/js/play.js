class Play {

  constructor(user, board) {
    this.user = user
    this.board = board
    this.shoot = false
    this.x = 0
    this.y = 590
    Play.all.push(this)
  }

  static getCanvas(img) {
    var canvas = document.getElementById('canvasPlay')
    var ctx = canvas.getContext('2d')
    var background = new Image()
    background.src = img
    ctx.drawImage(background, 10, 10);
    Board.getBoard()
    Play.renderUserCharacter()
    Play.renderBoardCharacter()
      Shoot.all.forEach(shoot => {
        shoot.renderShoot(ctx)
      })

    Bullet.all.forEach(bullet => {
      bullet.renderShoot(ctx)
    })
    // Bullet.all.forEach(bullet => {
    //   console.log(bullet.x);
    // })
  }

  static renderUserCharacter() {
    var canvas = document.getElementById('canvasPlay')
    var ctx = canvas.getContext('2d')
    Play.all[0].user.renderUser(ctx);
  }

  static renderBoardCharacter() {
    let board =  Play.all[0].board
    var canvas = document.getElementById('canvasPlay')
    var ctx = canvas.getContext('2d')
    let canvasObj = board.renderBoard(ctx)
  }

  // static checkCollisionsBullets() {
  //   debugger
  //   Bullet.all.forEach(bullet => {
  //     if(Math.round(bullet.x) === Play.all[0].user.x) {
  //       console.log(Play.all[0].user.x)
  //       console.log(bullet.x)
  //       console.log(":)")
  //     }
  //   })
  // }

}

Play.all = []

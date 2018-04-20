class Shoot {
  constructor(x,y) {
    this.x = x
    this.y = y
    this.img = './images/shoot.png'
    Shoot.all.push(this)
  }

  renderShoot(ctx) {
    let shoot = new Image()
    shoot.src = this.img
    ctx.drawImage(shoot, this.x, this.y-=5);
    this.checkCollisionsShoots()
  }

  checkCollisionsShoots() {
    let boardX = Play.all[0].board.x
    if(this.y === Play.all[0].board.y && this.x > boardX && this.x < boardX+80) {
      if(Play.all[0].board.life === 0) {
        clearInterval(Play.all[0].interval)
        Form.renderWin()
      } else {
        Play.all[0].board.life--
        Play.all[0].user.score += 10
      }
      for(var i = 0; i < Shoot.all.length; i++) {
        Shoot.all.pop()
      }
      for(var i = 0; i < Bullet.all.length; i++) {
        Bullet.all.pop()
      }
    }

  }
}
Shoot.all = []

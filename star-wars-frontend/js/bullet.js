
class Bullet {
  constructor(x,y) {
    this.x = x
    this.y = y
    this.img = './images/shoot.png'
    Shoot.all.push(this)
  }

  renderShoot(ctx) {
    let shoot = new Image()
    shoot.src = this.img
    ctx.drawImage(shoot, this.x, this.y+=5);
    this.checkCollisionsBullets()
  }

  checkCollisionsBullets() {
    let userX = Play.all[0].user.x
    if(this.y === Play.all[0].user.y && this.x > userX && this.x < userX+80) {
      if(Play.all[0].user.life === 0) {
        clearInterval(Play.all[0].interval)
        Play.all[0].audio.stop()
        Form.renderGameOver()
      } else {
        Play.all[0].user.life--
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

Bullet.all = []

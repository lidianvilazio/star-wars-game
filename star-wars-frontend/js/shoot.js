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
  }
}
Shoot.all = []

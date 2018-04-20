class User {

  constructor(id, user_name, side, character, score=0) {
    this.id = id
    this.user_name = user_name
    this.side = side
    this.score = score
    this.x = 10
    this.y = 670
    this.life = 5
    this.character = character
    User.all.push(this)
  }

  static findUser(user) {
    var ar = User.all;
    var found = ar.find(u => u.user_name === user)
    return found
  }

  renderUser(ctx) {
    let character = new Image()
    character.src = this.character
    ctx.drawImage(character, this.x, this.y, 80,80);
  }

  canvasListener() {
    var x = this
    document.addEventListener( 'keydown', e => {
      User.moveUser(e.keyCode,x)
  })
  }

  static moveUser(key,x) {
    let user = User.findUser(x.user_name)
    if(key === 37) {
      if(user.x === 10) {
        user.x = user.x
      } else {
        new Bullet(Play.all[0].board.x, Play.all[0].board.y+70)
        user.x -= 20
      }
    } else if(key === 39) {
      if(user.x === 610) {
        user.x = user.x
      } else {
        new Bullet(Play.all[0].board.x, Play.all[0].board.y+70)
        user.x += 20
      }
    } else if (key === 38) {
      let shootAudio = new Audio()
      shootAudio.src = './music/shoot.mp3'
      shootAudio.play()
      new Shoot(user.x, 650)
      new Bullet(Play.all[0].board.x, Play.all[0].board.y+70)
      Play.all[0].shoot = true
    }
  }


}

User.all = []

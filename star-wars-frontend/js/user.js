class User {

  constructor(id, user_name, side, score, character) {
    this.id = id
    this.user_name = user_name
    this.side = side
    this.score = score
    this.x = 1600
    this.y = 3380
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
    ctx.drawImage(character, this.x, this.y, 400,400);
    this.canvasListener()
  }

  static fUser() {
    return this
  }

  canvasListener() {
    document.addEventListener( 'keyup', e => {
      User.moveUser(e.key)
  })
}

  static moveUser(key) {
    User.fUser()
    console.log(':)')
    debugger
  }

}

User.all = []

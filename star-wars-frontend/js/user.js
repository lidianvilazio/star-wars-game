class User {

  constructor(id, user_name, side, score, character) {
    this.id = id
    this.user_name = user_name
    this.side = side
    this.score = score
    this.character = character
    User.all.push(this)
  }

  static findUser(user) {
    var ar = User.all;
    var found = ar.find(u => u.user_name === user)
    return found
  }

}

User.all = []

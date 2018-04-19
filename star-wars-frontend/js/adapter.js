class Adapter {
  static getJson() {
    fetch('http://localhost:3000/api/v1/users').then(r=> r.json()).then(json=> {
      json.forEach(user => {
        new User(user.id, user.user_name, user.side, user.character)
      })
    })
  }

  static createUser() {
    let user = User.all[User.all.length-1]
    var config = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({user_name: user.user_name, side: user.side, character: user.character})
    }
    fetch('http://localhost:3000/api/v1/users', config).then(r => r.json()).then(json => {
      let play = new Play()
      play.user = User.all[User.all.length-1]
    })
    Form.renderBackground()
  }

  static getBoard() {
    fetch('http://localhost:3000/api/v1/boards').then(r=> r.json()).then(json=> {
      json.forEach(board => {
        new Board(board.side, board.character)
      })
    })
  }

}

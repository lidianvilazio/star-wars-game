class Game {

  static welcome() {
    Game.signIn()
    Game.signUp()

  }

  static signIn() {
    let signIn = document.createElement('button')
    signIn.type = 'button'
    signIn.id = 'in'
    signIn.className = "btn btn-secondary btn-lg active"
    signIn.innerHTML = 'SignIn'
    let center = document.getElementById('center')
    center.appendChild(signIn)
  }

  static signUp() {
    let signUp = document.createElement('button')
    signUp.type = 'button'
    signUp.id = 'up'
    signUp.className = "btn btn-secondary btn-lg active"
    signUp.innerHTML = 'SignUp'
    let center = document.getElementById('center')
    center.appendChild(signUp)
  }

  

}

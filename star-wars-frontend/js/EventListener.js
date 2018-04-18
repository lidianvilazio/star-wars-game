class EventListener {

  static firstListener() {
    EventListener.signInListener()
    EventListener.signUpListener()
  }

  static signInListener() {
    let signIn = document.getElementById('in')
    signIn.addEventListener('click', e => {
      Form.renderFirst(e.target.id)
    })
  }

  static signUpListener() {
    let signUp = document.getElementById('up')
    signUp.addEventListener('click', e => {
      Form.renderFirst(e.target.id)
    })
  }

  static formListener() {
    let submit = document.getElementById('firstForm')
    submit.addEventListener('submit', (e) => {
      if(e.target.firstElementChild.id === 'in') {
        console.log(User.findUser(e.target.children[1].value))
      } else if(e.target.firstElementChild.id === 'up') {
        if(User.findUser(e.target.children[1].value) === undefined){
          let newUser = new User()
          newUser.user_name = e.target.children[1].value
          Form.renderSide()
        } else {
          alert("That name already exists in the galaxy. Please be original!!");
          Form.renderFirst('up')
        }
      }
      e.preventDefault()
    })
  }

  static sideListener() {
    let side = document.getElementById('side')
    side.addEventListener('click', e => {
      if(e.target.id === 'good'){
        User.all[User.all.length-1].side = 'good'
        Form.renderGoodCharacter()
      } else if(e.target.id === 'bad') {
        User.all[User.all.length-1].side = 'bad'
        Form.renderBadCharacter()
      }
    })
  }

  static characterListener() {
    let character = document.getElementById('character')
    character,addEventListener('click', e => {
      if(e.target.id === "xwing") {
        User.all[User.all.length-1].character = "xwing"
        Adapter.createUser()
      } else if(e.target.id === "ywing") {
        User.all[User.all.length-1].character = "ywing"
        Adapter.createUser()
      } else if(e.target.id === "falcon") {
        User.all[User.all.length-1].character = "falcon"
        Adapter.createUser()
      }else if(e.target.id === "tiefighter") {
        User.all[User.all.length-1].character = "falcon"
        Adapter.createUser()
      }else if(e.target.id === "tiefighter2") {
        User.all[User.all.length-1].character = "falcon"
        Adapter.createUser()
      }else if(e.target.id === "deathstar") {
        User.all[User.all.length-1].character = "falcon"
        Adapter.createUser()
      }
      e.preventDefault()
    })
  }

<<<<<<< HEAD
  static destinationListener() {
    let destination = document.getElementById('board')
    destination.addEventListener('click', e => {
      if(e.target.id === "tatooine") {
        Form.renderGame('url("./images/tatooine.jpg")')
      } else if (e.target.id === "backstar") {
        Form.renderGame('url("./images/backstar.jpg")')
      }
      e.preventDefault()
    })
  }
=======







>>>>>>> bad_side
}

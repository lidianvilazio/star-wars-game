class Form {

  static renderFirst(value) {
    let form = document.createElement('form')
    form.id = 'firstForm'
    form.innerHTML = '<h3 id="value">UserName</h3><input type="text" name="" value=""><br><br><button class="btn btn-secondary btn-lg active"type="submit" name="button">Submit</button>'
    let center = document.getElementById('center')
    center.innerHTML = ''
    center.appendChild(form)
    let h = document.getElementById('value')
    h.id = value
    EventListener.formListener()
  }

  static renderSide() {
    let newDiv = document.createElement('div')
    newDiv.id = 'side'
    newDiv.innerHTML = '<img id="choose" src="./images/choose.png" alt=""><img id="good"src="./images/light.png" alt=""><img id="bad"src="./images/dark.png" alt="">'
    center.innerHTML = ''
    center.appendChild(newDiv)
    EventListener.sideListener()
  }

  static renderGoodCharacter() {
    let character = document.createElement('div')
    character.id = 'character'
    character.innerHTML = '<img id="xwing" src="./images/xwing.png" alt=""><img id="ywing"src="./images/ywing.png" alt=""><img id="falcon"src="./images/falcon.png" alt="">'
    center.innerHTML = ''
    center.appendChild(character)
    EventListener.characterListener()
  }

  static renderBadCharacter() {
    let character = document.createElement('div')
    character.id = 'character'
    character.innerHTML = '<img id="tiefighter" src="./images/tiefighter.png" alt=""><img id="tiefighter2"src="./images/tiefighter2.png" alt=""><img id="deathstar" src="./images/deathstar.png" alt="">'
    center.innerHTML = ''
    center.appendChild(character)
    EventListener.characterListener()
  }

  static renderBackground() {
    let boardBackground = document.createElement('div')
    boardBackground.id = 'board'
    boardBackground.innerHTML = '<img id="chooseDestination" src="./images/chooseDestination.png" alt=""><img id="tatooine"src="./images/tatooine.jpg" alt=""><img id="backstar"src="./images/backstar.jpg" alt="">'
    center.innerHTML = ''
    center.appendChild(boardBackground)
    EventListener.destinationListener()
  }

  static renderGame(img) {
    let game = document.createElement('div')
    game.id = 'gameBoard'
    game.innerHTML = '<canvas id="canvasPlay" width="700" height="770"></canvas>'
    let center = document.getElementById('center')
    center.innerHTML = ''
    center.appendChild(game)
    Play.all[0].interval = setInterval(() => {Play.getCanvas(img);}, 50)
    Play.all[0].user.canvasListener()
    let audio = new Audio()
    audio.src = './music/music.mp3'
    Play.all[0].audio = audio
    setInterval(() => {Play.all[0].audio.play()}, 1200)
    // setTimeout(function(){Play.all[0].audio.play()}, 12000);
    // setInterval(() => {Play.all[0].audio.play()}, 120000)
  }

  static renderGameOver() {
    let gameOver = document.createElement('div')
    gameOver.id = 'gameOver'
    gameOver.innerHTML = '<img id="chooseDestination" src="./images/gameOver.png" alt="">'
    let center = document.getElementById('center')
    center.innerHTML = ''
    center.appendChild(gameOver)
  }

  static renderWin() {
    let win = document.createElement('div')
    win.id = 'gameOver'
    win.innerHTML = '<img id="chooseDestination" src="./images/win.png" alt="">'
    let center = document.getElementById('center')
    center.innerHTML = ''
    center.appendChild(win)
  }
}

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
    newDiv.innerHTML = '<img id="choose"src="./images/choose.png" alt=""><img id="good"src="./images/light.png" alt=""><img id="bad"src="./images/dark.png" alt="">'
    center.innerHTML = ''
    center.appendChild(newDiv)
    EventListener.sideListener()
  }

  static renderGoodCharacter() {
    let character = document.createElement('div')
    character.id = 'character'
    character.innerHTML = '<img id="xwing"src="./images/ship.png" alt=""><img id="ywing"src="./images/ship2.png" alt=""><img id="falcon"src="./images/ship3.png" alt="">'
    center.innerHTML = ''
    center.appendChild(character)
    EventListener.characterListener()
  }

  static renderBadCharacter() {
    let character = document.createElement('div')
    character.id = 'character'
    character.innerHTML = '<img id="choose"src="./images/choose.png" alt="">'
    center.innerHTML = ''
    center.appendChild(character)
  }

  static renderBackground() {
    let boardBackground = document.createElement('div')
    boardBackground.id = 'board'
    boardBackground.innerHTML = '<img id="chooseDestination"src="./images/chooseDestination.png" alt=""><img id="tatooine"src="./images/tatooine.jpg" alt=""><img id="backstar"src="./images/backstar.jpg" alt="">'
    center.innerHTML = ''
    center.appendChild(boardBackground)
    EventListener.destinationListener()
  }

  static renderGame(img) {
    let game = document.createElement('div')
    game.id = 'gameBoard'
    game.innerHTML = ''
    game.style.backgroundImage = img
    let center = document.getElementById('center')
    center.innerHTML = ''
    center.appendChild(game)
  }
}

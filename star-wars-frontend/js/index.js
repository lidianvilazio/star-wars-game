
document.addEventListener('DOMContentLoaded', () => {
  Adapter.getJson();
  Adapter.getBoard();
  Game.welcome();
  EventListener.firstListener();
})

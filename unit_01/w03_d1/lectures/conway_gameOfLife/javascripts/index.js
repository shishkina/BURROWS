const $gameBoardNode = $('div.board');
const app = new App(25, 25, $gameBoardNode);
app.tick();

// setInterval(() => {
//   app.tick();
//   console.log('ICK');
// }, 500);  // <- Once working, try this at some different rates

function gameLoop() {
  window.requestAnimationFrame(() => {
    app.tick();
    gameLoop();
  });
}

gameLoop();

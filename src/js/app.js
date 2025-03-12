import Game from "./game";

document.addEventListener("DOMContentLoaded", () => {
  const game = new Game();
  console.log(game);
  console.log(game.points.textContent);
});

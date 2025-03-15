import Goblin from "./goblin";

export default class Game {
  constructor() {
    this.points = document.querySelector(".success");
    this.failes = document.querySelector(".failes");
    this.click = false;
    this.goblin = new Goblin();

    this.onItemClick = this.onItemClick.bind(this);
    this.checkScore = this.checkScore.bind(this);

    this.start();
  }

  start() {
    this.goblin.field.addEventListener("click", this.onItemClick);
    this.goblin.activateField();
    this.interval = setInterval(() => {
      this.goblin.activateField();
      if (!this.click) {
        this.addFail();
      }
    }, 2000);
    this.click = false;
  }

  onItemClick(e) {
    if (e.target.closest("img") != null) {
      this.addPoint();
      this.click = true;
    } else {
      this.addFail();
    }
  }

  checkScore() {
    if (this.points.textContent >= 5) {
      alert("Вы победили!");
      this.clearPoints();
    } else if (this.failes.textContent >= 5) {
      alert("Вы проиграли!");
      this.clearPoints();
    }
  }

  clearPoints() {
    this.points.textContent = 0;
    this.failes.textContent = 0;
  }

  addPoint() {
    this.points.textContent++;
    this.goblin.deactivateField();
    this.checkScore();
  }

  addFail() {
    this.failes.textContent++;
    this.checkScore();
  }
}

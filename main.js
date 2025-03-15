/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/img/goblin.png
const goblin_namespaceObject = __webpack_require__.p + "2dbd01ce16c0fa83cb67.png";
;// CONCATENATED MODULE: ./src/js/goblin.js

class Goblin {
  constructor() {
    this.img = document.createElement("img");
    this.img.src = goblin_namespaceObject;
    this.div = document.createElement("div");
    this.div.className = "field-container";
    document.body.append(this.div);
    for (let i = 0; i < 16; i++) {
      const item = document.createElement("div");
      item.className = "field-item";
      this.div.append(item);
    }
    this.field = document.querySelector(".field-container");
    this.fieldItems = Array.from(document.querySelectorAll(".field-item"));
  }
  getItem() {
    let generateIndex = Math.floor(1 + Math.random() * this.fieldItems.length - 1);
    return this.fieldItems[generateIndex];
  }
  activateField() {
    const activeItem = this.getItem();
    activeItem.append(this.img);
  }
  deactivateField() {
    const img = document.querySelector("img");
    img.remove();
  }
}
;// CONCATENATED MODULE: ./src/js/game.js

class Game {
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
;// CONCATENATED MODULE: ./src/js/app.js

document.addEventListener("DOMContentLoaded", () => {
  const game = new Game();
  console.log(game);
  console.log(game.points.textContent);
});
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;
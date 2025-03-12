import image from "../img/goblin.png";

export default class Goblin {
  constructor() {
    this.img = document.createElement("img");
    this.img.src = image;

    this.div = document.createElement("div");
    this.div.className = "field-container";
    document.body.append(this.div);
    for (let i = 0; i < 16; i++) {
      const item = document.createElement("div");
      item.className = "field-item";
      this.div.append(item);

      this.field = document.querySelector(".field-container");
      this.fieldItems = Array.from(document.querySelectorAll(".field-item"));
    }
  }

  getItem() {
    let currentIndex = 0;
    let generateIndex = Math.floor(
      1 + Math.random() * this.fieldItems.length - 1,
    );
    do {
      currentIndex = generateIndex;
      return this.fieldItems[currentIndex];
    } while (currentIndex != generateIndex);
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

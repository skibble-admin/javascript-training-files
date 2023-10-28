class Gallery {
  constructor(imgsArr) {
    this.container = document.createElement("div");
    this.container.classList.add("gallery");
    document.body.append(this.container);

    for (const elem of imgsArr) {
      new Image(elem, this.container);
    }
  }
}

class Image {
  constructor(img, container) {
    this.container = container;
    this.updateUI(img, this.container);
  }

  updateUI(imageObj, container) {
    this.imagItem = document.createElement("div");
    this.img = document.createElement("img");
    this.title = document.createElement("p");
    this.title.innerHTML = imageObj.title;
    this.img.src = imageObj.imgSrc;
    this.imagItem.appendChild(this.img);
    this.imagItem.appendChild(this.title);
    container.appendChild(this.imagItem);
  }
}

let db = {
  catImages: [
    {
      title: "Cat",
      imgSrc:
        " https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      title: "Cat1",
      imgSrc:
        " https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      title: "Cat3",
      imgSrc:
        " https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ],

  natureImages: [
    {
      title: "Nature",
      imgSrc:
        "https://images.pexels.com/photos/5929944/pexels-photo-5929944.jpeg",
    },
    {
      title: "Nature1",
      imgSrc:
        "https://images.pexels.com/photos/5929944/pexels-photo-5929944.jpeg",
    },
    {
      title: "Nature 2",
      imgSrc:
        "https://images.pexels.com/photos/5929944/pexels-photo-5929944.jpeg",
    },
    {
      title: "Nature 3",
      imgSrc:
        "https://images.pexels.com/photos/5929944/pexels-photo-5929944.jpeg",
    },
  ],
};

const natureGallery = new Gallery(db.natureImages);

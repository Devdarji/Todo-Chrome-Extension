(() => {
  fetch("https://pixabay.com/api/?key=35157615-a7623e97741c09611cd02f92d&image_type=illustration&colors=white")
    .then((res) => res.json())
    .then((image) => {
      const img = image.hits[Math.floor(Math.random() * 20)].largeImageURL;
      document.querySelector(".mainbg").style.backgroundImage = `url(${img})`;
    });
})();
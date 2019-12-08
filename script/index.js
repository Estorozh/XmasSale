let changing = false;
setInterval(changeBG,5000);

function changeBG() {
  if (changing) {
    document.body.style.backgroundImage = "url('image/back_book.png')";
    changing = false;
  } else {
    console.log(document.body.style.backgroundImage)
    document.body.style.backgroundImage = "url('image/back_merryXmas.png')";
    changing = true;
  }
}

let changing = false;
setInterval(changeBG,5000);

function changeBG() {
  if (changing) {
    document.body.style.backgroundImage = "url('image/back_book.png')";
    changing = false;
  } else {
    document.body.style.backgroundImage = "url('image/back_merryXmas.png')";
    changing = true;
  }
}

$(document).ready(function(){
  $(fir).snowfall({image :"image/banner/snow.png", minSize: 20, maxSize:50, flakeCount: 3, minSpeed:0.9, maxSpeed:1});
});
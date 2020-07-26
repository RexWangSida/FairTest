var videoTracks;
var video = document.querySelector("#videoElement");


export function altImg() {
  var img = document.getElementById("face");

  var path = img.src;

  setInterval(() => {
    console.log(img.src);
    img.src = path;
  }, 333);
}

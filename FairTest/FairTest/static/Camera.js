export function altImg() {
  var img = document.getElementById("face");

  var path = img.src;

  setInterval(() => {
    img.src = path;
  }, 333);
}

var videoTracks;
var video = document.querySelector("#videoElement");

export function openCamera() {
  if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(function (stream) {
        video.srcObject = stream;
        videoTracks = stream.getVideoTracks();
      })
      .catch(function (err0r) {
        console.log(err0r);
      });
  }
}

export function closeCamera() {
  videoTracks.forEach(function (track) {
    track.stop();
  });
}

export function altImg() {
  var img = document.getElementById("face");

  var path = img.src;

  setInterval(() => {
    img.src = path;
  }, 100);
}

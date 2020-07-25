export default function Timer(duration) {
  //   duration comes in min
  var current = 0;
  var date = new Date();
  var startTime = date.getTime();
  document.getElementById("timer").innerHTML = "00:00:00";
  setInterval(function () {
    var now = new Date().getTime();
    current = (now - startTime) / 1000;
    var hours = (current / 3600).toFixed(0);
    var minutes = ((current - hours * 3600) / 60).toFixed(0);
    var seconds = ((current % 3600) % 60).toFixed(0);
    document.getElementById("timer").innerHTML =
      hours.toString().padStart(2, "0") +
      ":" +
      minutes.toString().padStart(2, "0") +
      ":" +
      seconds.toString().padStart(2, "0");
  }, 1000);
}

import { testSubmitted } from "./TestAction.js";
export default function Timer(duration) {
  var timer = duration * 60;
  var interval = setInterval(function () {
    var hours = parseInt(timer / 3600, 10);
    var minutes = parseInt((timer - hours * 3600) / 60, 10);
    var seconds = parseInt((timer % 3600) % 60, 10);

    document.getElementById("timer").innerHTML =
      hours.toString().padStart(2, "0") +
      ":" +
      minutes.toString().padStart(2, "0") +
      ":" +
      seconds.toString().padStart(2, "0");

    if (--timer < 0) {
      clearInterval(interval);
      testSubmitted();
    }
  }, 1000);
}

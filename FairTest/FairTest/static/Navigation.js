import TestGenerator from "./TestGenerator.js";
import { getAns, testSubmitted, refresh } from "./TestAction.js";
$("#after-submit").toggle();
$("#after-fail").toggle();
$("#test-room").toggle();
var progBar = document.getElementById("progBar");
$(".home-btn").on("click", function () {
  if ($("#after-submit").is(":visible")) $("#after-submit").toggle();
  if ($("#after-fail").is(":visible")) $("#after-fail").toggle();
  refresh();
  $("#test-list").toggle();
});

export function navBtn() {
  $("#prev-q").on("click", function () {
    getAns();
    if (questionIndex <= 0) {
    } else {
      var questionNum = Object.keys(testSet).length;
      questionIndex -= 1;
      TestGenerator(testSet[questionIndex]);
      progBar.setAttribute(
        "style",
        "width:" + (questionIndex / questionNum) * 100 + "%"
      );
    }
  });

  $("#next-q").on("click", function () {
    getAns();
    var questionNum = Object.keys(testSet).length;
    if (questionIndex >= questionNum - 1) {
    } else {
      questionIndex += 1;
      TestGenerator(testSet[questionIndex]);
      progBar.setAttribute(
        "style",
        "width:" + (questionIndex / (questionNum - 1)) * 100 + "%"
      );
    }
  });

  $("#submit-btn-1").on("click", function (e) {
    getAns();
    $("#submit-modal").modal("toggle");
    $("#exampleModal").modal("toggle");
  });

  $("#submit-btn-2").on("click", function (e) {
    $("#submit-modal").modal("toggle");
    $("#exampleModal").modal("toggle");
    testSubmitted();
  });
}

export function toggleTest() {
  $("#test-room").toggle();
}

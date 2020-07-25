import TestGenerator from "./TestGenerator.js";
import { getAns, testSubmitted, refresh } from "./TestAction.js";
import testList from "./TestSet.js";
import Chat from "./Chat.js"

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
      questionIndex -= 1;
      TestGenerator(testSet["question"][questionIndex]);
      progBar.setAttribute(
        "style",
        "width:" + (questionIndex / (testSet["questionNum"] - 1)) * 100 + "%"
      );
    }
    console.log(questionIndex);
  });

  $("#next-q").on("click", function () {
    getAns();
    if (questionIndex >= testSet["questionNum"] - 1) {
    } else {
      questionIndex += 1;
      TestGenerator(testSet["question"][questionIndex]);
      progBar.setAttribute(
        "style",
        "width:" + ((questionIndex + 1) / testSet["questionNum"]) * 100 + "%"
      );
    }
  });

  $("#submit-btn-1").on("click", function (e) {
    getAns();
    $("#submit-modal").modal("toggle");
    $("#exampleModal").modal("toggle");
  });

  $("#submit-btn-2").on("click", function (e) {
    testList[window.currentTest]["status"] = 1;
    $("#submit-modal").modal("toggle");
    $("#exampleModal").modal("toggle");
    toggleTest();
    testSubmitted();
  });
}

export function toggleTest() {
  $("#test-room").toggle();
  $(".chat-container").toggle();
}
Chat();

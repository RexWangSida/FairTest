import testFailed from "./TestAction.js";
import testList from "./TestSet.js";
import { navBtn } from "./Navigation.js";
import TestGenerator from "./TestGenerator.js";
import Timer from "./Timer.js";
import { openCamera } from "./Camera.js";

navBtn();
window.currentTest = -1;
export function generateTestList(testList) {
  document.getElementById("list").innerHTML = "";
  for (var test in testList) {
    addItem(testList[test]);
    if (testList[test]["status"] == 0) {
      document
        .getElementById(testList[test]["testId"])
        .addEventListener("click", function (e) {
          var testIndex = parseInt(e.srcElement.id.replace("t", ""));
          startTest(testIndex);
          currentTest = testIndex;
        });
    }
  }
}

function addItem(test) {
  var item = document.createElement("a");
  item.classList.add("list-group-item");
  item.classList.add("list-group-item-action");
  item.id = test["testId"];
  if (test["status"] != 0) {
    item.classList.add("disabled");
    item.innerHTML = test["name"];
    if (test["status"] == 1) {
      item.innerHTML = test["name"] + " (Submitted)";
    } else if (test["status"] == 2) {
      item.innerHTML = test["name"] + " (Failed)";
    } else {
      item.innerHTML = test["name"] + " (Expired)";
    }
  } else {
    item.innerHTML = test["name"];
  }

  document.getElementById("list").appendChild(item);
}

function startTest(testIndex) {
  openCamera();
  $("#test-list").toggle();
  $("#test-room").toggle();
  window.questionIndex = 0;
  window.totWarning = 2;
  window.testSet = testList[testIndex]["testSet"];

  TestGenerator(testList[testIndex]["testSet"]["question"][questionIndex]);
  Timer(testList[testIndex]["duration"]);
  progBar.setAttribute(
    "style",
    "width:" + questionIndex + (1 / testSet["questionNum"]) * 100 + "%"
  );
  window.onblur = function () {
    if (totWarning > 0) {
      totWarning -= 1;
      document.getElementById("warning-msg").innerHTML =
        "You are not allowed to leave the site! " + totWarning + " times left!";
      $("#warning-modal-shade").modal("toggle");
    } else {
      window.onblur = "";
      testFailed();
    }
  };
}

function trigger() {
  setTimeout(function () {
    $.post({
      url: "/face_roc",
      data: {
        message: true,
      },
      success: function (callback) {
        alert("BHHHH");
      },
      error: function (callback) {
        alert("asda");
      },
    });
  }, 300);
}

trigger();
generateTestList(testList);

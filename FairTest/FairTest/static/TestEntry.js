import testFailed from "./TestAction.js";
// import testList from "./TestSet.js";
import { navBtn } from "./Navigation.js";
import TestGenerator from "./TestGenerator.js";
import Timer from "./Timer.js";
import { altImg } from "./Camera.js";
import Chat from "./Chat.js";
window.testList;
setTimeout(function () {
  $.post({
    url: "/getTest",
    headers: { "X-CSRFtoken": $.cookie("csrftoken") },
    data: {
      name: name,
    },
    success: function (newData) {
      newData["testInfos"];
      window.testList = newData["testInfos"];
    },
    error: function () {
      alert("failed");
    },
  });
}, 0);
window.currentTest = -1;
export function generateTestList(testList) {
  document.getElementById("list").innerHTML = "";
  for (var test in testList) {
    addItem(testList[test]);
    if (testList[test]["status"] == 0) {
      document
        .getElementById(testList[test]["tid"])
        .addEventListener("click", function (e) {
          var testIndex = parseInt(e.srcElement.id.replace("t", "") - 1);
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
  item.id = test["tid"];
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
  Chat();
  $("#test-list").toggle();
  $("#test-room").toggle();
  window.questionIndex = 0;
  window.totWarning = 3;
  window.testSet = testList[testIndex]["questionSet"];
  triggerStart();
  currentTest = testIndex;
  TestGenerator(testList[testIndex]["questionSet"][questionIndex]);
  Timer(testList[testIndex]["duration"]);
  progBar.setAttribute("style", "width:" + questionIndex * 100 + "%");
  window.onblur = function () {
    if (totWarning > 0) {
      if (totWarning == 3) {
        totWarning -= 1;
        document.getElementById("warning-msg").innerHTML =
          "You wil  l not be allowed to leave the site during the test ";
      } else {
        totWarning -= 1;
        document.getElementById("warning-msg").innerHTML =
          "You are not allowed to leave the site! " +
          totWarning +
          " times left!";
      }
      $("#warning-modal-shade").modal("toggle");
    } else {
      window.onblur = "";
      testFailed();
    }
  };
}

function triggerStart() {
  setTimeout(function () {
    $.post({
      url: "/face",
      headers: { "X-CSRFtoken": $.cookie("csrftoken") },

      data: {
        message: true,
      },
      success: function (newData) {
        console.log(newData["msg"]);
      },
      error: function () {
        console.log("Failed");
      },
    });
  }, 300);
  altImg();
}

setTimeout(function () {
  generateTestList(testList);
  navBtn();
}, 300);

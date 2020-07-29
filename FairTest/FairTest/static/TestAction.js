import { toggleTest } from "./Navigation.js";
import { generateTestList } from "./TestEntry.js";

export default function testFailed() {
  testList[currentTest]["status"] = 2;
  toggleTest();
  triggerEnd();
  $("#after-fail").toggle();
}

export function getAns() {
  if (testSet[questionIndex]["choices"][0] === null) {
    var ans = document.getElementById("textAns").value;
  } else {
    var ans = document.querySelector("input[name=mc]:checked");
    ans = ans == null ? -1 : ans.value;
  }

  testSet[questionIndex]["ans"] = ans;
}

export function testSubmitted() {
  testList[currentTest]["status"] = 1;
  toggleTest();
  triggerEnd();
  $("#after-submit").toggle();
  window.onblur = "";
}

export function refresh() {
  generateTestList(testList);
}

function triggerEnd() {
  setTimeout(function () {
    $.post({
      url: "/face",
      headers: { "X-CSRFtoken": $.cookie("csrftoken") },
      data: {
        message: false,
      },
      success: function () {
        console.log("Ended");
      },
      error: function () {
        console.log("Connection Failed");
      },
    });
  }, 300);

  setTimeout(function () {
    $.post({
      url: "/updateTest",
      headers: {
        "X-CSRFtoken": $.cookie("csrftoken"),
      },
      data: {
        msg: JSON.stringify(testList),
      },
      success: function (newData) {
        console.log(newData["msg"]);
      },
      error: function (newData) {
        console.log(newData["msg"]);
      },
    });
  }, 300);
}

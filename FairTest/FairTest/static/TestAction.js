import { toggleTest } from "./Navigation.js";
import testList from "./TestSet.js";
import { generateTestList } from "./TestEntry.js";
import TestGenerator from "./TestGenerator.js";
export default function testFailed() {
  testList[window.currentTest]["status"] = 2;
  toggleTest();
  $("#after-fail").toggle();
}

export function getAns() {
  if (testSet["question"][questionIndex]["type"] == 1) {
    var ans = document.getElementById("textAns").value;
  } else if (testSet["question"][questionIndex]["type"] == 0) {
    var ans = document.querySelector("input[name=mc]:checked");
    ans = ans == null ? -1 : ans.value;
  }

  testSet["question"][questionIndex]["ans"] = ans;
}

export function testSubmitted() {
  $("#after-submit").toggle();
  window.onblur = "";
}

export function refresh() {
  generateTestList(testList);
}

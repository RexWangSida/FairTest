// 0 multiple choice, 1 short answer
export default function TestGenerator(question) {
  setTitle(question);
  if (question["choices"][0] !== null) {
    multiChoice(question["choices"]);
    if (question["ans"] !== null && question["ans"] >= 0) {
      document
        .getElementById(question["ans"])
        .setAttribute("checked", "checked");
    }
  } else {
    shortAns();
    if (question["ans"] !== null) {
      document.getElementById("textAns").value = question["ans"];
    }
  }
}

function multiChoice(choices) {
  document.getElementById("shortAns").hidden = true;
  var form = document.getElementById("mc-form");
  form.innerHTML = "";
  for (var choice in choices) {
    var container = addNode("div", {});
    var radio = addNode("input", {
      type: "radio",
      id: choice,
      name: "mc",
      value: choice,
    });
    var label = addNode("label", { for: choice });
    label.innerHTML = choices[choice];
    container.appendChild(radio);
    container.appendChild(label);
    form.appendChild(container);
  }
}

function setTitle(questionInfo) {
  var question = document.getElementById("question");
  question.innerHTML = "<h3>" + questionInfo["title"] + "<h3/>";
}

function shortAns() {
  document.getElementById("mc-form").innerHTML = "";
  var ansBox = document.getElementById("shortAns");
  document.getElementById("textAns").value = "";
  ansBox.hidden = false;
}

function addNode(tagName, attrs) {
  var tag = document.createElement(tagName);
  for (var attr in attrs) {
    tag.setAttribute(attr, attrs[attr]);
  }
  return tag;
}

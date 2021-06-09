const inputArea = document.querySelector(".input-box");
const outputArea = document.querySelector(".output-box");
const test = document.querySelector(".selected");
const byChar = document.getElementById("byChar");
const byLine = document.getElementById("byLine");
openButton = document.getElementById("sel_option");

function revByChar(string) {
  let reverse = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
  }
  return reverse;
}

function revByLine(string) {
  let reverse = "";
  let subs = string.split("\n");
  for (let i = subs.length - 1; i >= 0; i--) {
    reverse += subs[i];
    reverse += "\n";
  }
  return reverse;
}

function Reverse() {
  const string = inputArea.value;
  if (byChar.checked == true) {
    outputArea.value = revByChar(string);
  } else if (byLine.checked == true) {
    outputArea.value = revByLine(string);
  }
}

function Replace() {
  const string = inputArea.value;
  const findBox = document.querySelector(".find_box");
  const replaceBox = document.querySelector(".replace_box");
  const findString = findBox.value;
  const replaceString = replaceBox.value;
  const yesLabel = document.querySelector(".yesOp");
  const noLabel = document.querySelector(".noOp");
  var newString = "default";
  if (yesLabel.classList.contains("sel_boolean")) {
    newString = string.replaceAll(findString, replaceString);
  } else if (noLabel.classList.contains("sel_boolean")) {
    const newIg = new RegExp(findString, "ig");
    newString = string.replaceAll(newIg, replaceString);
  }
  outputArea.value = newString;
}

function CaseTransform() {
  const string = inputArea.value;
  const upper = document.getElementById("upper");
  const lower = document.getElementById("lower");
  const capitalize = document.getElementById("capitalize");
  const alternating = document.getElementById("alternating");
  const invert = document.getElementById("invert");
  if (upper.checked) {
    outputArea.value = string.toUpperCase();
  } else if (lower.checked) {
    outputArea.value = string.toLowerCase();
  } else if (capitalize.checked) {
    var words = string.split(" ");
    var capitalizedWords = [];
    words.forEach((element) => {
      capitalizedWords.push(
        element.charAt(0).toUpperCase() + element.slice(1, element.length)
      );
    });
    outputArea.value = capitalizedWords.join(" ");
  } else if (alternating.checked) {
    var newString = string.toLowerCase();
    var output = "";
    for (let index = 0; index < newString.length; index++) {
      if (index % 2 != 0) {
        output += newString.charAt(index).toUpperCase();
      } else {
        output += newString.charAt(index);
      }
    }
    outputArea.value = output;
  } else if (invert.checked) {
    var newString = "";
    for (let index = 0; index < string.length; index++) {
      if (string.charAt(index) == string.charAt(index).toUpperCase()) {
        newString += string.charAt(index).toLowerCase();
      } else {
        newString += string.charAt(index).toUpperCase();
      }
    }
    outputArea.value = newString;
  }
}

function MorseCode() {
  const string = inputArea.value;
  const morse = {
        A: ".-",B: "-...",C: "-.-.",D: "-..",E: ".",F: "..-.",G: "--.",H: "....",I: "..",J: ".---",K: "-.-",
        L: ".-..",M: "--",N: "-.",O: "---",P: ".--.",Q: "--.-",R: ".-.",S: "...",T: "-",U: "..-",W: ".--",
        X: "-..-",Y: "-.--",Z: "--.."," ": "/","\n": "/", 1: ".----",2: "..---",3: "...--",4: "....-",5: ".....",6: "-....",
        7: "--...",8: "---..",9: "----.",0: "-----",",": "--..--",".": ".-.-.-","?": "..--..",";": "-.-.-.",
        ":": "---...", "/": "-..-.","-": "-....-","'": ".----.",'"': ".-..-.","_": "..--.-","(": "-.--.",
        ")": "-.--.-","=": "-...-","+": ".-.-.","*": "-..-","@": ".--.-."
  };
  let output = ""
  for (let i = 0; i < string.length; i++) {
      var letter = string[i].toUpperCase()
      if (morse[letter]) {
        output += morse[letter] + " "
      }
  }
  outputArea.value = output
}

var checkInterval = setInterval(function () {
  var funName = openButton.innerText + "()";
  funName = funName.split(" ").join("");
  eval(funName);
}, 100);

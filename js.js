let btns = document.querySelectorAll(".btn");
let h3 = document.querySelector(".display h3");
let p = document.querySelector(".display p");

let varebles = 0;
let accumator = "";
let amal = "";

btns.forEach((element) => {
  element.addEventListener("click", () => {
    // to long
    if (h3.textContent.length > 9) {
      if (h3.textContent.length > 12) h3.style.fontSize = "2rem";
      else h3.style.fontSize = "4rem";
    } else {
      h3.style.fontSize = "6rem";
    }
    if (element.textContent === "C") {
      h3.textContent = null;
      p.textContent = null;
      varebles = "";
      accumator;
    } else if (h3.textContent.length > 16 || h3.textContent.includes("Max")) {
      h3.textContent = "MaxNumLength 15";
    } else {
      if (element.textContent === "del") {
        h3.textContent = h3.textContent.slice(0, -1);
        varebles = varebles.slice(0, -1);
      } else if (element.textContent === "=") {
        switch (amal) {
          case "*":
            accumator = accumator ? accumator * +varebles : +varebles;
            break;
          case "/":
            accumator = accumator ? accumator / +varebles : +varebles;
            break;
          case "+":
            accumator = accumator ? accumator + +varebles : +varebles;
            break;
          case "-":
            accumator = accumator ? accumator - +varebles : +varebles;
            break;
        }
        p.textContent = h3.textContent;
        h3.textContent = accumator;
        varebles = h3.textContent ? h3.textContent : "";
        accumator = "";
        varebles = h3.textContent;
        amal = "";
      } else if (element.textContent === "√") {
        p.textContent ="√"+h3.textContent;
        h3.textContent = varebles ** (1 / 2);
        varebles = h3.textContent;
      } else if (element.textContent === "+") {
        accumator = accumator ? accumator + +varebles : +varebles;
        varebles = "";
        amal = "+";
        h3.textContent = h3.textContent + element.textContent;
      } else if (element.textContent === "-") {
        h3.textContent = h3.textContent + element.textContent;
        amal = "-";
        accumator = accumator ? accumator - +varebles : +varebles;
        varebles = "";
      } else if (element.textContent === "÷") {
        h3.textContent = h3.textContent + element.textContent;
        amal = "/";
        accumator = accumator ? accumator / +varebles : +varebles;
        varebles = "";
      } else if (element.textContent === "×") {
        h3.textContent = h3.textContent + element.textContent;
        accumator = accumator ? accumator * +varebles : +varebles;
        amal = "*";
        varebles = "";
      } else if (element.textContent === ".") {
        if (!varebles.includes(".")) {
          if (!varebles) {
            varebles = "0.";
            h3.textContent = h3.textContent + "0.";
          } else {
            h3.textContent = h3.textContent + element.textContent;
            varebles = varebles + element.textContent;
          }
        }
      } else {
        h3.textContent = h3.textContent + element.textContent;
        varebles = varebles + element.textContent;
      }
    }
  });
});

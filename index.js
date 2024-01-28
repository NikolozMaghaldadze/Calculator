let numberButtons = document.querySelectorAll(".number");
let greyButtons = document.querySelectorAll(".grey");
let yellowButtons = document.querySelectorAll(".yellow");
let prevOpperand = document.querySelector(".previous-opperand");
let display = document.querySelector(".display");

let number = "";
let numberPrev = "";
let opperation = "";
let clickCount = 1;
let final = "";
//! All the textContetn values are string types , we have to convert into numbers !!

//previous opperand
console.log(prevOpperand.textContent);
prevOpperand.textContent = " ";
//current opperand
console.log(display.textContent);
display.textContent = " ";

// {AC , + and %} keys
greyButtons.forEach((el) => {
  el.addEventListener("click", function () {
    if (el.textContent === "AC") {
      number = "";
      display.textContent = " ";
      prevOpperand.textContent = " ";
    } else if (el.textContent === "+/-") {
      if (clickCount % 2 === 1) {
        opperation = "+";
        clickCount++;
      } else {
        opperation = "-";
        clickCount++;
      }
      display.textContent = " ";
      prevOpperand.textContent = number;
      numberPrev = number;
      number = "";
    }
  });
  console.log(el.textContent);
});

//number keys
numberButtons.forEach((el) => {
  console.log(el.textContent);
  el.addEventListener("click", function () {
    if (number.length >= 7) {
      return;
    }
    number += el.textContent;
    display.textContent = number;
  });
});

//opperation keys
yellowButtons.forEach((el) => {
  el.addEventListener("click", function () {
    if (el.textContent === "=") {
      if (opperation === "+") {
        prevOpperand.textContent = "";
        display.textContent = stringToTypePlus(numberPrev, number);
      } else {
        prevOpperand.textContent = "";
        display.textContent = stringToTypeMinus(numberPrev, number);
      }
    }
  });
});

function stringToTypePlus(number1, number2) {
  let toNumber1 = Number(number1);
  let toNumber2 = Number(number2);
  let final = toNumber1 + toNumber2;
  console.log(final);
  return final;
}

function stringToTypeMinus(number1, number2) {
  let toNumber1 = Number(number1);
  let toNumber2 = Number(number2);
  let final = toNumber1 - toNumber2;
  console.log(final);
  return final;
}
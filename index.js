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
      opperation = " ";
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
    } else if (el.textContent === "%") {
      opperation = "%";
    }
    prevOpperand.textContent = `${number} ${opperation}`;
    display.textContent = " ";
    numberPrev = number;
    number = "";
  });
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
      } else if (opperation === "-") {
        prevOpperand.textContent = "";
        display.textContent = stringToTypeMinus(numberPrev, number);
      } else if (opperation === "%") {
        prevOpperand.textContent = "";
        display.textContent = modulousDivision(numberPrev, number);
      } else if (opperation === "/") {
        prevOpperand.textContent = " ";
        display.textContent = division(numberPrev, number);
      } else if (opperation === "X") {
        prevOpperand.textContent = " ";
        display.textContent = multiply(numberPrev, number);
      } else if (opperation === "+") {
        prevOpperand.textContent = " ";
        display.textContent = add(numberPrev, number);
      } else if (opperation === "-") {
        prevOpperand.textContent = " ";
        display.textContent = minus(numberPrev, number);
      }
    } else if (el.textContent === "/") {
      opperation = "/";
      prevOpperand.textContent = `${number} ${opperation}`;
      display.textContent = " ";
      numberPrev = number;
      number = "";
    } else if (el.textContent === "X") {
      opperation = "X";
      prevOpperand.textContent = `${number} ${opperation}`;
      display.textContent = " ";
      numberPrev = number;
      number = "";
    } else if (el.textContent === "+") {
      opperation = "+";
      prevOpperand.textContent = `${number} ${opperation}`;
      display.textContent = " ";
      numberPrev = number;
      number = "";
    } else if (el.textContent === "-") {
      opperation = "-";
      prevOpperand.textContent = `${number} ${opperation}`;
      display.textContent = " ";
      numberPrev = number;
      number = "";
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

function modulousDivision(number1, number2) {
  let toNumber1 = Number(number1);
  let toNumber2 = Number(number2);
  return toNumber1 % toNumber2;
}

function division(number1, number2) {
  let toNumber1 = Number(number1);
  let toNumber2 = Number(number2);
  return toNumber1 / toNumber2;
}

function multiply(number1, number2) {
  let toNumber1 = Number(number1);
  let toNumber2 = Number(number2);
  return toNumber1 * toNumber2;
}

function add(number1, number2) {
  let toNumber1 = Number(number1);
  let toNumber2 = Number(number2);
  return toNumber1 + toNumber2;
}

function minus(number1, number2) {
  let toNumber1 = Number(number1);
  let toNumber2 = Number(number2);
  return toNumber1 - toNumber2;
}

console.log(2.5 + 2.5);

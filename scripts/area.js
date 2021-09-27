const sides = document.querySelectorAll(".side-input");
const calculateBtn = document.querySelector("#calculate-btn");
const errorMsg = document.querySelector("#error-message");
const ouput = document.querySelector("#output");

const setErrorMsg = (msg) => {
  errorMsg.innerText = msg;
};

const resetErrorMsg = () => {
  errorMsg.innerText = "";
};
const resetOutput = () => {
  resetErrorMsg();
  output.innerText = "";
};
const setOutput = (text) => {
  output.innerText = text;
};

const isInputValid = () => {
  let isValid = true;
  for (side of sides) {
    if (side.value === "") {
      setErrorMsg("Please enter all the fields");
      isValid = false;
    } else if (side.value <= 0) {
      setErrorMsg("Length of all sides should be greater than 0");
      isValid = false;
    }
  }
  return isValid;
};
const calculate = () => {
  const firstSide = Number(sides[0].value);
  const secondSide = Number(sides[1].value);
  const thirdSide = Number(sides[2].value);

  if (
    firstSide + secondSide > thirdSide &&
    secondSide + thirdSide > firstSide &&
    firstSide + thirdSide > secondSide
  ) {
    const semiPerimeter = (firstSide + secondSide + thirdSide) / 2;

    return Math.sqrt(
      semiPerimeter *
        (semiPerimeter - firstSide) *
        (semiPerimeter - secondSide) *
        (semiPerimeter - thirdSide)
    ).toFixed(2);
  } else {
    setErrorMsg(
      "sum of any two side lengths must be greater than the third side length"
    );
  }
};
calculateBtn.addEventListener("click", () => {
  if (isInputValid()) {
    const area = calculate();
    if (area) {
      setOutput("Area of Triangle is " + area);
    }
  }
});

for (side of sides) {
  side.addEventListener("click", resetOutput);
}

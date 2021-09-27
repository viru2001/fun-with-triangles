const base = document.querySelector("#base");
const height = document.querySelector("#height");
const calculateBtn = document.querySelector("#calculate-btn");
const errorMsg = document.querySelector("#error-message");
const output = document.querySelector("#output");

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

const isInputValid = (baseValue, heightValue) => {
  // console.log(baseValue);
  if (baseValue === "" || heightValue === "") {
    setErrorMsg("Please enter all the fields");
  } else if (Number(baseValue) <= 0) {
    setErrorMsg("Length of base should be greater than 0");
  } else if (Number(heightValue) <= 0) {
    setErrorMsg("Length of height should be greater than 0");
  } else {
    return true;
  }
};
const setOutput = (text) => {
  output.innerText = text;
};

const calculate = (baseValue, heightValue) => {
  const b = Number(baseValue);
  const h = Number(heightValue);
  return Math.sqrt(b * b + h * h).toFixed(2);
};
calculateBtn.addEventListener("click", () => {
  if (isInputValid(base.value, height.value)) {
    const hypo = calculate(base.value, height.value);
    setOutput("The length of the hypotenuse is " + hypo);
  }
});

base.addEventListener("click", resetOutput);
height.addEventListener("click", resetOutput);

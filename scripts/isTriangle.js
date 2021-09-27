const angles = document.querySelectorAll(".angle-input");
const checkBtn = document.querySelector("#is-triangle-btn");
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

const isInputValid = () => {
  let isValid = true;
  for (angle of angles) {
    if (angle.value === "") {
      setErrorMsg("Please enter all the fields");
      isValid = false;
    } else if (angle.value <= 0) {
      setErrorMsg("Angles should be greater than 0");
      isValid = false;
    }
  }
  return isValid;
};

const getSum = () => {
  let sum = 0;
  for (angle of angles) {
    sum += Number(angle.value);
  }
  return sum;
};

const setOutput = (text)=>{
  output.innerText = text
}
checkBtn.addEventListener("click", () => {
  if (isInputValid()) {
    const sum = getSum();
    if (sum === 180) {
      setOutput("These angles make a triangle :)");
    } else {
      setOutput("These angles don't make a triangle :(");
    }
  }
});

for (angle of angles) {
  angle.addEventListener("click", resetOutput);
}

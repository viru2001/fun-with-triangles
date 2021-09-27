const answers = [
  "90°",
  "right angled",
  "one right angle",
  "12, 16, 20",
  "Equilateral triangle",
  "100°",
  "30°",
  "a + b + c",
  "no",
  "45°",
];

const quiz = document.querySelector(".quiz-form");
const submitBtn = document.querySelector("#submit-btn");
const output = document.querySelector("#output");
const errorMsg = document.querySelector("#error-message");

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

function isEntireQuizAttempted(input_values) {
  let value,
    count = 0;
  for (value of input_values) {
    count += 1;
  }

  if (count === answers.length) {
    return true;
  } else {
    setErrorMsg("Please attempt the entire quiz.");
  }
}
const calculate = (formResults) => {
  let score = 0;
  let index = 0;

  for (let answer of formResults.values()) {
    if (answer === answers[index]) {
      score = score + 1;
    }
    index = index + 1;
  }
  return score;
};
const setOutput = (text) => {
  output.innerText = text;
};
submitBtn.addEventListener("click", () => {
  let formResults = new FormData(quiz);
  if (isEntireQuizAttempted(formResults.values())) {
    let finalScore = calculate(formResults);
    setOutput("You Scored " + finalScore + "/10");
  }
});
quiz.addEventListener("click",()=>{
    resetErrorMsg();
    resetOutput();
})

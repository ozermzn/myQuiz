var questionIndex = 1;
const quiz = new Quiz(questions);
const ui = new UI();
ui.btnStart.addEventListener("click", function () {
  ui.quizBox.classList.add("active");
  ui.btnReplay.classList.add("active");
  ui.btnFinish.classList.add("active");
  ui.showQuestions(quiz.getQuestions());
  timerLine();
  ui.nextBtn.classList.remove("show");
  ui.showQuestionIndex(quiz.questionIndex + 1, quiz.questions.length);
  startTimer(10);
});
ui.nextBtn.addEventListener("click", function () {
  if (quiz.questions.length != quiz.questionIndex + 1) {
    quiz.questionIndex++;
    clearInterval(counter);
    clearInterval(counterLine);
    timerLine();
    startTimer(10);
    ui.showQuestions(quiz.getQuestions());
    ui.showQuestionIndex(quiz.questionIndex + 1, quiz.questions.length);
  } else {
    clearInterval(counter);
    clearInterval(counterLine);
    ui.scoreBox.classList.add("active");
    ui.quizBox.classList.remove("active");
    ui.showScore(quiz.questions.length, quiz.correctAnswerCount);
  }
});
ui.optionList;

//Choosing Answers Method
function optionSelected(option) {
  let answer = option.querySelector("span b").textContent;
  let question = quiz.getQuestions();

  if (question.isCorrectAnswer(answer)) {
    option.classList.add("correct");
    quiz.correctAnswerCount++;
    option.insertAdjacentHTML("beforeend", ui.correctIcon);
  } else {
    option.classList.add("incorrect");
    option.insertAdjacentHTML("beforeend", ui.incorrectIcon);
  }
  for (let i = 0; i < ui.optionList.children.length; i++) {
    ui.optionList.children[i].classList.add("disabled");
  }
  ui.nextBtn.classList.add("show");
  clearInterval(counterLine);
  clearInterval(counter);
}
console.log(quiz.questionIndex);
//score box
let counter;
function startTimer(time) {
  counter = setInterval(timer, 1000);
  function timer() {
    ui.timeSecond.textContent = time;
    time--;
    if (time < 0) {
      clearInterval(counter);
      let answer = quiz.getQuestions().correctAnswer;

      for (let option of ui.optionList.children) {
        if (option.querySelector("span b").textContent == answer) {
          option.classList.add("correct");
          option.insertAdjacentHTML("beforeend", ui.correctIcon);
        } else {
          option.classList.add("incorrect");
          option.insertAdjacentHTML("beforeend", ui.incorrectIcon);
        }
        option.classList.add("disabled");
      }
      ui.nextBtn.classList.add("show");
    }
  }
}
let counterLine;

function timerLine() {
  let lineWidth = 0;
  counterLine = setInterval(timer, 10);

  function timer() {
    lineWidth += 0.5;
    ui.timeLine.style.width = lineWidth + "px";
    if (lineWidth > 548) {
      clearInterval(counterLine);
    }
  }
}

ui.btnFinish.addEventListener("click", function () {
  window.location.reload();
});
ui.btnReplay.addEventListener("click", function () {
  quiz.questionIndex = 0;
  quiz.correctAnswerCount = 0;
  clearInterval(counter);
  clearInterval(counterLine);
  ui.btnStart.click();
  ui.scoreBox.classList.remove("active");
});

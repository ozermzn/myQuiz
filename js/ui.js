function UI() {
  this.btnStart = document.querySelector(".btn-start");
  this.nextBtn = document.querySelector(".nextBtn");
  this.quizBox = document.querySelector(".quizBox");
  this.optionList = document.querySelector(".option_list");
  this.btnReplay = document.querySelector(".btn_replay");
  this.btnFinish = document.querySelector(".btn_finish");
  this.scoreBox = document.querySelector(".score_box");
  this.correctIcon = `<div class="icon"><i class="fas fa-check"></i></div>`;
  this.incorrectIcon = `<div class="icon"><i class="fas fa-times"></i></div>`;
  this.timeText = document.querySelector("time_text");
  this.timeSecond = document.querySelector(".time_second");
  this.timeLine = document.querySelector(".time_line");
  this.btnReplay = document.querySelector(".btn_replay");
  this.btnFinish = document.querySelector(".btn_finish");
}

UI.prototype.showQuestions = function (questions) {
  let question = `<span>${questions.questionText}</span>`;
  let options = ``;
  for (let answer in questions.answerOptions) {
    options += `
    <div class="option">
    <span> <b>${answer}</b>: ${questions.answerOptions[answer]}</span>
    </div>
    `;
  }
  document.querySelector(".question_text").innerHTML = question;
  this.optionList.innerHTML = options;
  console.log(questions.questionText);
  const option = this.optionList.querySelectorAll(".option");

  for (let opt of option) {
    opt.setAttribute("onclick", "optionSelected(this)");
  }
  this.nextBtn.classList.remove("show");
};

UI.prototype.showQuestionIndex = function (questionIndex, totalQuestion) {
  let tag = `<span class="question_index badge ">${questionIndex} / ${totalQuestion}</span>`;
  document.querySelector(".quizBox .question_index").innerHTML = tag;
};

UI.prototype.showScore = function (totalQuestion, correctAnswer) {
  let tag = `<div>Total Question: ${totalQuestion} </div> <div>Correct Answer: ${correctAnswer}</div>`;
  document.querySelector(".score_text").innerHTML = tag;
};

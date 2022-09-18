function Questions(questionText, answerOptions, correctAnswer) {
  this.questionText = questionText;
  this.answerOptions = answerOptions;
  this.correctAnswer = correctAnswer;
}

function Quiz(questions) {
  this.questions = questions;
  this.questionIndex = 0;
  this.correctAnswerCount = 0;
}
Questions.prototype.isCorrectAnswer = function (answer) {
  return answer === this.correctAnswer;
};
var questions = [
  new Questions(
    "<b>1 -</b> Which animal loves banana?",
    { a: "Tiger", b: "Lion", c: "Monkey", d: "Cat" },
    "c"
  ),
  new Questions(
    "<b>2 -</b> What is our planet name?",
    { a: "Mars", b: "Pluto", c: "Earth", d: "Moon" },
    "c"
  ),
  new Questions(
    "<b>3 -</b> 4 + 4 x 2?",
    { a: "12", b: "16", c: "10", d: "32" },
    "b"
  ),
];

Quiz.prototype.getQuestions = function () {
  return this.questions[this.questionIndex];
};

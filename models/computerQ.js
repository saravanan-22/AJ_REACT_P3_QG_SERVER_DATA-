import mongoose from "mongoose";

const quizSchema = new mongoose.Schema(
  {
    category: {
      type: String,
    },
    question: {
      type: String,
    },
    correct_answer: {
      type: String,
    },
    // Use an array for incorrect_answers
    incorrect_answers: [{
      type: String,
    }],
  },
  {
    timestamps: true,
  }
);

const ComputerQuiz = mongoose.model("ComputerQuiz", quizSchema);

export default ComputerQuiz;

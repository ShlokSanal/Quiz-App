import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import questionsData from "../data/questions";
import "./QuizEngine.css";

function QuizEngine() {
  const player = JSON.parse(localStorage.getItem("quiz-player"));
  const navigate = useNavigate();

  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [questionTimes, setQuestionTimes] = useState([]);

  const questions = questionsData[player.category]?.[player.difficulty] || [];

  const question = questions[currentQIndex];

  useEffect(() => {
    if (questions.length === 0 || !question) return;
    if (timeLeft === 0) {
      handleNext();
      return;
    }
    const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, questions.length, question]);

  const handleOptionClick = (option) => {
    if (showAnswer) return;

    setSelectedOption(option);
    setShowAnswer(true);

    const timeTaken = 15 - timeLeft;
    setQuestionTimes([...questionTimes, timeTaken]);

    if (option === question.answer) {
      setScore((prev) => prev + 1);
      setCorrectCount((prev) => prev + 1);
    }

    setTimeout(() => {
      handleNext();
    }, 1000);
  };

  const handleNext = () => {
    if (currentQIndex + 1 < questions.length) {
      setCurrentQIndex(currentQIndex + 1);
      setSelectedOption(null);
      setShowAnswer(false);
      setTimeLeft(15);
    } else {
      const result = {
        name: player.name,
        score: score+1,
        correct: correctCount+1,
        total: questions.length,
        time: questionTimes.reduce((a, b) => a + b, 0),
        date: new Date().toLocaleString(),
      };

      const pastScores = JSON.parse(localStorage.getItem("quiz-scores")) || [];
      localStorage.setItem("quiz-scores", JSON.stringify([...pastScores, result]));

      navigate("/score");
    }
  };

  if (questions.length === 0 || !question) {
    return (
      <div style={{ marginTop: "100px", textAlign: "center" }}>
        <h2>No questions found for this category/difficulty.</h2>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <h2>Question {currentQIndex + 1} of {questions.length}</h2>
        <p>Time Left: {timeLeft}s</p>
      </div>
      <div className="quiz-question">{question.question}</div>
      <div className="quiz-options">
        {question.options.map((option) => (
          <button
            key={option}
            onClick={() => handleOptionClick(option)}
            className={`option-btn ${
              showAnswer
                ? option === question.answer
                  ? "correct"
                  : option === selectedOption
                  ? "wrong"
                  : ""
                : ""
            }`}
            disabled={showAnswer}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuizEngine;
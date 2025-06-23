import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ScoreSummary.css";

function ScoreSummary() {
  const [result, setResult] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const scores = JSON.parse(localStorage.getItem("quiz-scores")) || [];
    const latest = scores[scores.length - 1];
    setResult(latest);
  }, []);

  const getMessage = (score, total) => {
    const ratio = score / total;
    if (ratio === 1) return "Quiz Champion! 🏆";
    if (ratio >= 0.7) return "Well Done! 💪";
    if (ratio >= 0.4) return "Not Bad! Try Again! 🔄";
    return "More caffeine, maybe? ☕";
  };

  const handleRestart = () => {
    localStorage.removeItem("quiz-player");
    window.location.href = "/";
  };

  if (!result) return <div>Loading...</div>;

  return (
    <div className="score-summary">
      <h2>Well Played, {result.name}!</h2>
      <p>Score: <strong>{result.score}</strong> / {result.total}</p>
      <p>Correct Answers: {result.correct}</p>
      <p>Total Time: {result.time}s</p>
      <p className="motivational">{getMessage(result.score, result.total)}</p>
      <button onClick={handleRestart}>Play Again</button>
    </div>
  );
}

export default ScoreSummary;
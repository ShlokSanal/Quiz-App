import React, { useState, useEffect } from "react";
import "./Leaderboard.css";

function Leaderboard() {
  const [scores, setScores] = useState([]);
  const [sortBy, setSortBy] = useState("score");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("quiz-scores")) || [];
    setScores(stored);
  }, []);

  const handleReset = () => {
    localStorage.removeItem("quiz-scores");
    setScores([]);
  };

  const sortedScores = [...scores].sort((a, b) => {
    if (sortBy === "score") return b.score - a.score;
    if (sortBy === "time") return a.time - b.time;
    return 0;
  });

  return (
    <div className="leaderboard">
      <h2>Leaderboard</h2>
      <div className="sort-buttons">
        <button onClick={() => setSortBy("score")}>Sort by Score</button>
        <button onClick={() => setSortBy("time")}>Sort by Time</button>
        <button onClick={handleReset} style={{ backgroundColor: "#dc3545", color: "white" }}>Reset Scores</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
            <th>Time (s)</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {sortedScores.map((entry, index) => (
            <tr key={index}>
              <td>{entry.name}</td>
              <td>{entry.score}</td>
              <td>{entry.time}</td>
              <td>{entry.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
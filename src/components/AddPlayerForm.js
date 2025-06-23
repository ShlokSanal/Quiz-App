import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddPlayerForm.css";

function AddPlayerForm() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const navigate = useNavigate();

  const isFormValid = name && category && difficulty;

  const handleSubmit = (e) => {
    e.preventDefault();
    const playerData = { name, category, difficulty, date: new Date().toLocaleString() };
    localStorage.setItem("quiz-player", JSON.stringify(playerData));
    navigate("/quiz/start");
  };

  return (
    <div className="form-container">
      <h2>Enter Player Details</h2>
      <form onSubmit={handleSubmit} className="player-form">
        <label>Name:<input type="text" value={name} onChange={(e) => setName(e.target.value)} /></label>
        <label>Category:
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Select category</option>
            <option value="general">General Knowledge</option>
            <option value="sports">Sports</option>
            <option value="science">Science</option>
          </select>
        </label>
        <label>Difficulty:
          <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
            <option value="">Select difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </label>
        <button type="submit" disabled={!isFormValid}>Start Quiz</button>
      </form>
    </div>
  );
}

export default AddPlayerForm;

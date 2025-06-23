// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// ✅ Import all components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AddPlayerForm from './components/AddPlayerForm';
import QuizEngine from './components/QuizEngine';
import ScoreSummary from './components/ScoreSummary';
import Leaderboard from './components/Leaderboard';
import AboutPage from './components/AboutPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/add-player" element={<AddPlayerForm />} />
        <Route path="/quiz/start" element={<QuizEngine />} />
        <Route path="/score" element={<ScoreSummary />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<h2 style={{ textAlign: 'center', marginTop: '100px' }}>404 - Page Not Found</h2>} />
      </Routes>
    </Router>
  );
}

export default App;

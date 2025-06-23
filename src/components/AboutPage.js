import React from "react";
import "./AboutPage.css";

function AboutPage() {
  return (
    <div className="about-page">
      <h1>About This Quiz App</h1>
      <p>
        This interactive quiz application was built as part of the KTJ WebD Workshop Assignment-3.
        It lets users choose categories, take timed quizzes, and track their performance.
      </p>

      <h2>Technologies Used</h2>
      <ul>
        <li>ReactJS (with Create React App)</li>
        <li>React Router DOM</li>
        <li>JavaScript & JSX</li>
        <li>CSS (Responsive design + animations)</li>
        <li>LocalStorage for persistent data</li>
      </ul>

      <h2>What I Learned</h2>
      <ul>
        <li>How to build dynamic forms and handle state</li>
        <li>React component architecture and routing</li>
        <li>Timer logic, scoring logic, conditional rendering</li>
        <li>Persisting and retrieving data from localStorage</li>
        <li>Responsive design and user experience fundamentals</li>
      </ul>

      <h2>Meme Time!</h2>
      <img
        src={process.env.PUBLIC_URL + "/meme.jpg"}
        alt="Funny Coding Meme"
        className="meme-img"
      />

      <p className="footer-msg">Thanks for checking out the app!</p>
    </div>
  );
}

export default AboutPage;

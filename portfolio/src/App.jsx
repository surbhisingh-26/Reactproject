import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Surbhi's Portfolio</h1>
        <p>Frontend Developer | React.js Enthusiast</p>
      </header>

      <section id="projects">
        <h2>My Projects</h2>
        <div className="project-card">
          <h3>Todo App</h3>
          <p>A simple app to manage daily tasks</p>
          <a href="https://your-live-link.com" target="_blank">Live Demo</a>
          <a href="https://github.com/your-github/todo-app" target="_blank">GitHub</a>
        </div>
        {/* More projects like this */}
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <ul>
          <li>React.js</li>
          <li>JavaScript (ES6)</li>
          <li>HTML & CSS</li>
          <li>Git & GitHub</li>
        </ul>
      </section>

      <section id="contact">
        <h2>Contact Me</h2>
        <p>Email: surbhi@example.com</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/connectsurbhisingh">linkedin.com/in/yourprofile</a></p>
      </section>
    </div>
  );
}

export default App;

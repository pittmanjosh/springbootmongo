import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [joke, setJoke] = useState("");
  const log = () => {
    fetch("/api/dadjokes")
      .then((response) => response.text())
      .then((message) => {
        setJoke(message);
      });
  };

  useEffect(() => {
    log();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {joke}
        </a>
      </header>
    </div>
  );
}

export default App;

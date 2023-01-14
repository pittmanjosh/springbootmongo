import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [joke, setJoke] = useState("");
  const log = () => {
    fetch("/api/dadjokes")
      .then((response) => response.text())
      .then((message) => {
        console.log(message);
        setJoke(JSON.stringify(message));
      });
  };

  useEffect(() => {
    log();
  }, []);

  return (
    <div className="App">
      <header className="App-header">{joke}</header>
    </div>
  );
}

export default App;

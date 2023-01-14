import React, { ChangeEvent, FormEvent, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

interface Person {
  name: string;
}

function App() {
  const [name, setName] = useState("");
  const [display, setDisplay] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  function fetchName() {
    fetch(`/api/person?name=${name}`)
      .then((response) => response.json())
      .then((person: Person) => setDisplay(person.name))
      .then(() => setName(""))
      .catch(() => "error");
  }

  const updateDisplay = (e: FormEvent) => {
    e.preventDefault();
    fetchName();
  };

  return (
    <div className="App">
      <div className="App-header container-fluid">
        <form className="container" onSubmit={updateDisplay}>
          <h1>{display || "Please add and submit some text"}</h1>
          <input
            className="form-control"
            value={name}
            onChange={handleChange}
          />
          <button type="submit" className="btn btn-primary">
            UPDATE
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;

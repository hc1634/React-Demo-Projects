import { useState } from "react";
import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";

const App = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  const changeHandler = (event) => {
    if (event.target.value === "") {
      setResult(0);
    }
    setInput(event.target.value);
  };
  const calaculationHandler = (event) => {
    setResult(eval(input));
  };
  const resultHandler = (event) => {
    calaculationHandler();
  };
  const keyHandler = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      calaculationHandler();
    }
  };
  return (
    <div className="main-container">
      <center>
        <h2>Simple Calaculator</h2>

        <input
          type="text"
          name="input"
          value={input}
          onChange={changeHandler}
          onKeyDown={keyHandler}
          className="input-element"
          placeholder="Math operation"
          autoComplete="off"
        />
        <br />

        <Button variant="success" onClick={resultHandler}>
          Result
        </Button>
        <br />

        <p className="description p-3">
          The Result is : <span>{result}</span>
        </p>

        <div className="button-row">
          <button className="calc-button" onClick={() => setInput(input + "0")}>
            0
          </button>
          <button className="calc-button" onClick={() => setInput(input + "1")}>
            1
          </button>
          <button className="calc-button" onClick={() => setInput(input + "2")}>
            2
          </button>
          <button className="calc-button" onClick={() => setInput(input + "3")}>
            3
          </button>
          <button className="calc-button" onClick={() => setInput(input + "4")}>
            4
          </button>
        </div>
        <div className="button-row">
          <button className="calc-button" onClick={() => setInput(input + "5")}>
            5
          </button>
          <button className="calc-button" onClick={() => setInput(input + "6")}>
            6
          </button>
          <button className="calc-button" onClick={() => setInput(input + "7")}>
            7
          </button>
          <button className="calc-button" onClick={() => setInput(input + "8")}>
            8
          </button>
          <button className="calc-button" onClick={() => setInput(input + "9")}>
            9
          </button>
        </div>
        <div className="button-row">
          <button className="calc-button" onClick={() => setInput(input + "*")}>
            *
          </button>
          <button className="calc-button" onClick={() => setInput(input + "+")}>
            +
          </button>
          <button className="calc-button" onClick={() => setInput(input + "/")}>
            /
          </button>
          <button className="calc-button" onClick={() => setInput(input + "-")}>
            -
          </button>
          <button
            className="calc-button"
            onClick={() => {
              setInput("");
              setResult(0);
            }}
          >
            clr
          </button>
        </div>
      </center>
    </div>
  );
};

export default App;

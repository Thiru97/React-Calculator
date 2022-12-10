import React, { useState } from "react";
import "./styles.css";

function App() {
  const [val, setVal] = useState(0);
  function backspace() {
    setVal(val.slice(0, -1));
  }
  function calculate() {
    try {
      setVal(eval(val));
    } catch (error) {}
  }
  function clearAll() {
    setVal("");
  }
  return (
    <div className="calculator-grid">
      <input type="text" className="output" value={val}></input>
      <button className="span-two" onClick={() => clearAll()}>
        AC
      </button>
      <button onClick={() => backspace()}>DEL</button>
      <button
        value="/"
        onClick={((e) => clearAll(), (e) => setVal(val + e.target.value))}
      >
        /
      </button>
      <button value="7" onClick={(e) => setVal(val + e.target.value)}>
        7
      </button>
      <button value="8" onClick={(e) => setVal(val + e.target.value)}>
        8
      </button>
      <button value="9" onClick={(e) => setVal(val + e.target.value)}>
        9
      </button>
      <button value="*" onClick={(e) => setVal(val + e.target.value)}>
        *
      </button>
      <button value="4" onClick={(e) => setVal(val + e.target.value)}>
        4
      </button>
      <button value="5" onClick={(e) => setVal(val + e.target.value)}>
        5
      </button>
      <button value="6" onClick={(e) => setVal(val + e.target.value)}>
        6
      </button>
      <button value="+" onClick={(e) => setVal(val + e.target.value)}>
        +
      </button>
      <button value="3" onClick={(e) => setVal(val + e.target.value)}>
        3
      </button>
      <button value="2" onClick={(e) => setVal(val + e.target.value)}>
        2
      </button>
      <button value="1" onClick={(e) => setVal(val + e.target.value)}>
        1
      </button>
      <button value="-" onClick={(e) => setVal(val + e.target.value)}>
        -
      </button>
      <button value="." onClick={(e) => setVal(val + e.target.value)}>
        .
      </button>
      <button value="0" onClick={(e) => setVal(val + e.target.value)}>
        0
      </button>
      <button className="span-two" onClick={() => calculate()}>
        =
      </button>
    </div>
  );
}

export default App;

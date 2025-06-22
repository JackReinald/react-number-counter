import { useState } from "react";
import "./App.css";

function App() {
  const [conteo, setConteo] = useState(100);

  function handleAdd() {
    setConteo(conteo + 1);
  }
  function handleSubstract() {
    setConteo(conteo - 1);
  }
  function handleReset() {
    setConteo(0);
  }

  return (
    <>
      <div className="container">
        <h1>Counter: {conteo}</h1>
        <hr></hr>
        <button onClick={handleAdd}>+</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleSubstract}>-</button>
      </div>
    </>
  );
}

export default App;

import { useState } from "react";
// import "./Counter.css";

export default function Counter() {
  const [count, setCount] = useState(0);
  const incrementCount = () => setCount(count + 1);

  return (
    <div className="counter">
      <h1>Counter App</h1>
      <button id="incrementBtn" onClick={incrementCount}>
        Increment
      </button>
      <p id="counterValue">Count: {count}</p>
    </div>
  );
}

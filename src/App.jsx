import { useState } from "react";

function Square() {
  const [value, setValue] = useState("");

  function handleClick() {
    setValue("X");
  }

  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}

export default function board() {
  return (
    <div className="main-content">
      <div className="board-container">
        <div className="board">
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
        </div>
      </div>
      <footer>
        <p>
          &copy; Mei 2026 - <span>LINGGAR RAMADHAN</span>
        </p>
      </footer>
    </div>
  );
}

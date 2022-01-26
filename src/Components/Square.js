import { useState } from "react";

function Square({ id, newState }) {
  const [status, setStatus] = useState(null);
  const XorO = ["O", "X"];

  return (
    <button
      onClick={e => {
        let nextPlayer = newState(id);
        setStatus(nextPlayer);
      }}
    >
      <h1 className="square-button">{XorO[status]}</h1>
    </button>
  );
}

export default Square;

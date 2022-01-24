import { useState } from "react";

function Square({ id, player, newState }) {
  const [status, setStatus] = useState(null);
  //x's are 1, o's are 0
  const XorO = ["O", "X"];

  return (
    <button
      onClick={(e) => {
        let nextPlayer = newState(id);
        setStatus(nextPlayer);
        console.log(`status is ${nextPlayer}`);
      }}
    >
      <h1 className="square-button">{XorO[status]}</h1>
    </button>
  );
}

export default Square;

import { useState } from "react";
import Square from "./Square";

function Board() {
  // 1st player is 1
  // State keeps track of next player
  const [player, setPlayer] = useState(1);
  const [state, setState] = useState(Array(9).fill(null)); //overall state of game - as things are clicked, add to array

  let turn;
  player == 1 ? turn = `X's turn` : turn = `O's turn`
  let winner = checkWinner(state);
  console.log(state);
  if (winner && winner != "draw") {
    winner == 1 ? turn = `X wins!` : turn = `O wins!`;
  } else if (winner && winner === "draw") {
    turn = `It's a ${turn}`;
  } else {
    player == 1 ? turn = `X's turn` : turn = `O's turn`
  }

  // define newState function
  const newState = (idOfSquare) => {
    let thePlayer = player; //present player
    state[idOfSquare] = player;
    setState(state);
    let nextplayer = (player + 1) % 2;
    setPlayer(nextplayer);
    return thePlayer; //we need to return the present player
  };

  function checkWinner(state) {
    const win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < win.length; i++) {
      const [a, b, c] = win[i];
      if (state[a] === state[b] && state[a] === state[c] && state[a]) {
        console.log(`${state[a]}`);
        return state[a];
      } else if (!state.includes(null)) {
        return "draw";
      }
    }
    return null;
  }

  function renderSquare(i) {
    // use properties to pass callback function takeTurn and id to Child
    return <Square id={i} player={player} newState={newState}></Square>;
  }
  return (
    <div className="game-board">
      <div className="grid-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="grid-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="grid-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <div id="info">
        <h1 id="status-bar">{turn}</h1>
      </div>
    </div>
  );
}

export default Board;

import './Game.css';
import Board from './Components/Board';

function Game() {

  return (
    <div className="game">
      <h1 id="title">React Tic Tac Toe </h1>
      <Board></Board>
    </div>
  );
};

export default Game;

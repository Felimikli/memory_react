import React, { useState, useEffect } from "react";
import "./App.css";
import Board from "./components/Board";
import Hud from "./components/Hud";

function App() {
  const [board, setBoard] = useState([]);
  const showTime = 2000;
  useEffect(cardSort, []);

  const [redTurnedCards, setRedTurnedCards] = useState(0);
  const [blueTurnedCards, setBlueTurnedCards] = useState(0);
  const [redPoints, setRedPoints] = useState(0);
  const [bluePoints, setBluePoints] = useState(0);
  const [turn, setTurn] = useState("red");

  const handleIncrementTurnedCards = () => {
    turn === "red"
      ? setRedTurnedCards(redTurnedCards + 1)
      : setBlueTurnedCards(blueTurnedCards + 1);
  };
  const handleIncrementPoints = () => {
    turn === "red"
      ? setRedPoints(redPoints + 1)
      : setBluePoints(bluePoints + 1);
  };

  const handleTurn = () => {
    setTurn(turn === "red" ? "blue" : "red");
  };

  const redStats = { Turn: redTurnedCards, Points: redPoints };
  const blueStats = { Turn: blueTurnedCards, Points: bluePoints };

  const stats = { Red: redStats, Blue: blueStats };

  function cardSort() {
    let rows = 3;
    let cols = 6;
    let numbers = (rows * cols) / 2;
    let data = [];

    for (let i = 0; i < 2; i++) {
      for (let number = 0; number < numbers; number++) {
        data.push(number + 1);
      }
    }
    for (let i = data.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const k = data[i];
      data[i] = data[j];
      data[j] = k;
    }

    for (let i = 0; i < rows; i++) {
      data.push(data.splice(0, cols));
    }

    setBoard(data);
  }

  return (
    <>
      <Hud stats={stats} turn={turn} />
      {board.length > 0 && (
        <Board
          data={board}
          handleIncrementTurnedCards={handleIncrementTurnedCards}
          handleIncrementPoints={handleIncrementPoints}
          handleTurn={handleTurn}
          showTime={showTime}
          stats={stats}
        />
      )}
    </>
  );
}
export default App;

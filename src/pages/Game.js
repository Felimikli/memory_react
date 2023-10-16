import React, { useState, useEffect } from "react";
import "../App.css";
import Hud from "../components/Hud";
import Board from "../components/Board";
import WinModal from "../components/WinModal";
import { Button } from "react-bootstrap";

export default function Game() {
  const [board, setBoard] = useState([]);
  const showTime = 1000;
  useEffect(cardSort, []);

  const [player1TurnedCards, setPlayer1TurnedCards] = useState(0);
  const [player2TurnedCards, setPlayer2TurnedCards] = useState(0);
  const [player1Points, setPlayer1Points] = useState(0);
  const [player2Points, setPlayer2Points] = useState(0);
  const [turn, setTurn] = useState("player1");

  const [found, setFound] = useState([]);

  const handleFound = (newFound) => {
    setFound(newFound);
  };

  const handleTurn = () => {
    setTurn(turn === "player1" ? "player2" : "player1");
  };

  const handleIncrementTurnedCards = () => {
    turn === "player1"
      ? setPlayer1TurnedCards(player1TurnedCards + 1)
      : setPlayer2TurnedCards(player2TurnedCards + 1);
  };
  const handleIncrementPoints = () => {
    turn === "player1"
      ? setPlayer1Points(player1Points + 1)
      : setPlayer2Points(player2Points + 1);
  };
  const handleRestart = () => {
    cardSort();
    setFound([]);
    setPlayer1TurnedCards(0);
    setPlayer2TurnedCards(0);
    setPlayer1Points(0);
    setPlayer2Points(0);
  };

  const player1Stats = {
    name: "P1",
    turn: player1TurnedCards,
    points: player1Points,
  };
  const player2Stats = {
    name: "P2",
    turn: player2TurnedCards,
    points: player2Points,
  };

  const stats = { player1: player1Stats, player2: player2Stats };

  let rows = 3;
  let cols = 6;
  let numbers = (rows * cols) / 2;

  function cardSort() {
    let data = [];

    // create data array with duplicate of each number
    for (let i = 0; i < 2; i++) {
      for (let number = 0; number < numbers; number++) {
        data.push(number + 1);
      }
    }
    // randomly sort data array
    for (let i = data.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const k = data[i];
      data[i] = data[j];
      data[j] = k;
    }
    // separate data array into rows
    for (let i = 0; i < rows; i++) {
      data.push(data.splice(0, cols));
    }
    setBoard(data);
  }

  return (
    <>
      <WinModal stats={stats} numbers={numbers} restart={handleRestart} />
      <Hud stats={stats} turn={turn} />
      {board.length > 0 && (
        <Board
          data={board}
          handleIncrementTurnedCards={handleIncrementTurnedCards}
          handleIncrementPoints={handleIncrementPoints}
          handleTurn={handleTurn}
          showTime={showTime}
          stats={stats}
          turn={turn}
          handleFound={handleFound}
          found={found}
        />
      )}
    </>
  );
}

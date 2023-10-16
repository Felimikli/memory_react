import React from "react";

export default function Counter({ stats }) {
  return (
    <div className="counter">
      Counter:
      <div className="counterWrapper">
        <div className="counterPlayer1">
          {stats.player1.name +
            " " +
            stats.player1.points +
            "/" +
            stats.player1.turn}
        </div>
        <div className="counterPlayer2">
          {stats.player2.name +
            " " +
            stats.player2.points +
            "/" +
            stats.player2.turn}
        </div>
      </div>
    </div>
  );
}

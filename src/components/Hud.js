import React from "react";

export default function Hud({ redStats, blueStats, turn }) {
  return (
    <>
      <div>
        {turn}
        {turn === "red"
          ? redStats.Points + "/" + redStats.Turn
          : blueStats.Points + "/" + blueStats.Turn}
      </div>
    </>
  );
}

import React from "react";
import Counter from "./Counter";
import TurnShow from "./TurnShow";

export default function Hud({ stats, turn }) {
  return (
    <>
      <div className="hud">
        <div className="hudTurn">
          <TurnShow turn={turn} />
        </div>
        <div className="hudCounter">
          <Counter stats={stats} />
        </div>
      </div>
    </>
  );
}

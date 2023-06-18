import React from "react";

export default function Counter({ stats }) {
  return (
    <div className="counter">
      Counter:
      <div className="counterWrapper">
        <div className="counterRed">
          RED {stats.Red.Points + "/" + stats.Red.Turn}{" "}
        </div>
        <div className="counterBlue">
          {" "}
          {stats.Blue.Points + "/" + stats.Blue.Turn} BLUE
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import cardBack from "../images/cardBack.jpg";
import card1 from "../images/cars/1.jpg";
import card2 from "../images/cars/2.jpg";
import card3 from "../images/cars/3.jpg";
import card4 from "../images/cars/4.jpg";
import card5 from "../images/cars/5.jpg";
import card6 from "../images/cars/6.jpg";
import card7 from "../images/cars/7.jpg";
import card8 from "../images/cars/8.jpg";
import card9 from "../images/cars/9.jpg";

const cars = [card1, card2, card3, card4, card5, card6, card7, card8, card9];

export default function Card({ data, clickCard, flipped, found, turn }) {
  let founded = false;
  found.forEach((element) => {
    if (element.id === data.id) {
      founded = true;
    }
  });
  return (
    <div className="divCard">
      {founded ? (
        <div>
          <img
            src={cars[data.figure - 1]}
            width="100%"
            style={{ opacity: 0.4, border: `4px solid ${turn}` }}
          />
        </div>
      ) : flipped ? (
        <div>
          <img src={cars[data.figure - 1]} width="100%" />
          {/* V CHEAT MODE V */}
          {data.figure}
        </div>
      ) : (
        <div onClick={() => clickCard(data)}>
          <img src={cardBack} width="100%" />
          {/* V CHEAT MODE V */}
          {data.figure}
        </div>
      )}
    </div>
  );

  /*     <div onClick={() => clickCard(data)}>{flipped ? data.figure : "X"}</div> */
}

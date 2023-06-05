import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "./Card";

export default function Board({
  data,
  handleIncrementTurnedCards,
  handleIncrementPoints,
  handleTurn,
  showTime,
}) {
  const [showCard1, setShowCard1] = useState(null);
  const [showCard2, setShowCard2] = useState(null);
  const [found, setFound] = useState([]);

  const clickCard = (data) => {
    if (!showCard1) {
      setShowCard1(data);
    } else if (!showCard2) {
      handleIncrementTurnedCards();
      setTimeout(() => {
        handleTurn();
        setShowCard1(null);
        setShowCard2(null);
      }, showTime);
      setShowCard2(data);
    }
  };
  {
  }
  useEffect(() => {
    if (showCard1 && showCard2 && showCard1.figure === showCard2.figure) {
      handleIncrementPoints();

      const newFound = [...found, showCard1, showCard2];

      setFound(newFound);
      setShowCard1(null);
      setShowCard2(null);
    }
    console.log(showCard1, showCard2);
  }, [showCard1, showCard2]);

  function createBoard(data) {
    const rows = data.length;
    const cols = data[0].length;

    if (found.length === rows * cols) {
      alert("You Win!");
    }

    const arrayRows = [];

    let pos = 1;

    for (let row = 0; row < rows; row++) {
      const arrayCols = [];
      for (let col = 0; col < cols; col++) {
        arrayCols.push(
          <Col key={"col-" + pos}>
            <Card
              data={{ id: pos, figure: data[row][col] }}
              clickCard={clickCard}
              flipped={
                (showCard1 && pos === showCard1.id) ||
                (showCard2 && pos === showCard2.id)
              }
              found={found}
            />
          </Col>
        );
        pos++;
      }

      arrayRows.push(<Row key={"row-" + pos}>{arrayCols}</Row>);
    }

    return arrayRows;
  }
  return <Container fluid>{createBoard(data)}</Container>;
}

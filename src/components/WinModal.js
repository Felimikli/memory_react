import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Game from "../pages/Game";

function WinModal({ stats, numbers, restart }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (player) => {
    setShow(player);
  };
  useEffect(() => {
    if (stats.player1 && stats.player1.points > numbers / 2) {
      handleShow("player1");
    } else if (stats.player2 && stats.player2.points > numbers / 2) {
      handleShow("player2");
    }
  }, [stats]);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> {show} WINS!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button variant="secondary" onClick={handleClose}>
            Quit
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              restart();
              handleClose();
            }}
          >
            Restart
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default WinModal;

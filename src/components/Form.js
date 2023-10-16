import { useState } from "react";
import Form from "react-bootstrap/Form";

function FormTextExample() {
  const [config, setConfig] = useState({
    player1: "",
    player2: "",
    difficulty: "",
  });

  const handleConfig = (event) => {
    const { name, value } = event.target;

    const newConfig = { ...config };

    newConfig[name] = value;

    setConfig(newConfig);
  };

  return (
    <div className="form_cont">
      <div className="form_div">
        <div className="label_div">Player 1</div>
        <div className="control_div">
          <Form.Control
            className="form_controls"
            id="player1-name"
            name="player1"
            value={config.player1}
            onChange={handleConfig}
          />
        </div>
      </div>
      <div className="form_div">
        <div className="label_div">Difficulty</div>
        <div className="select_div">
          <Form.Select
            className="form_select"
            aria-label="Default select example"
            value={config.difficulty}
            onChange={handleConfig}
            name="difficulty"
          >
            <option value="1">2x5</option>
            <option value="2">3x6</option>
            <option value="3">4x7</option>
          </Form.Select>
        </div>
      </div>
      <div className="form_div">
        <div className="label_div">Player 2</div>
        <div className="control_div">
          <Form.Control
            className="form_controls"
            id="player2-name"
            name="player2"
            value={config.player2}
            onChange={handleConfig}
          />
        </div>
      </div>
    </div>
  );
}

export default FormTextExample;

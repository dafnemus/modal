import PropTypes from "prop-types";
import { useState } from "react";
import Square from "../square";
import "./styles.css";

const Modal = ({ onClick }) => {
  const [color, setColor] = useState("gray");
  return (
    <div className="container">
      <button onClick={onClick}>close</button>
      <div className="section">
        <button onClick={() => setColor("purple")}>Purple</button>
        <button onClick={() => setColor("yellow")}>Yellow</button>
      </div>
      <Square color={color} />
    </div>
  );
};

Modal.propTypes = {
  onClick: PropTypes.func,
};

Modal.defaultProps = {
  onClick: () => {},
};

export default Modal;

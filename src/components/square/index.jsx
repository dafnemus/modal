import PropTypes from "prop-types";
import "./styles.css";

const Square = ({ color }) => {
  return (
    <div className={`square ${color}`}>
      <p>{color}</p>
    </div>
  );
};

Square.propTypes = {
  color: PropTypes.string,
};

Square.defaultProps = {
  color: "",
};
export default Square;
